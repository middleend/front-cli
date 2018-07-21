const Koa = require('koa');
const path = require('path');
const next = require('next');
const bodyParser = require('koa-body');
const Router = require('koa-router');
const fetch = require('isomorphic-unfetch');

const config = require('./config');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const defaultHandler = app.getRequestHandler()

const generateCommandsFromEndpoints = require('./builder').generateCommandsFromEndpoints;

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();

	server.proxy = true
	server.use(bodyParser());


	router.get('/api/:namespace/:version/generate', async context => {
		const { res, params, query } = context;

		// if (typeof handler === 'function') {
		result = await fetch( `https://public-api.wordpress.com/${params.namespace}/${params.version}/` )
			.then( resp => resp.json() )
			.catch( err => err );

		context.body = result;

		generateCommandsFromEndpoints( result );

		context.respond = true
	})

	router.get('/api/:namespace/:version/', async context => {
		const { res, params, query } = context;
		console.log( {params} );
		console.log( {query} );

		// if (typeof handler === 'function') {
		result = await fetch( `https://public-api.wordpress.com/${params.namespace}/${params.version}/` )
			.then( resp => resp.json() )
			.catch( err => err );

		context.body = result;
		context.respond = true
	})

	router.get('*', async context => {
		const { req, res, params, query } = context
		await defaultHandler( req, res );
	})

	server.use(async (context, next) => {
		context.res.statusCode = 200;
		await next();
	})

	server.use(router.routes())
	server.listen( config.port, err => {
		if (err) {
			throw err
		}
		console.log(`> Ready on ${config.host}:${config.port}`)
	})
});
