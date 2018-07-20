import queryString from 'query-string';

const config = {
	host: 'https://public-api.wordpress.com',
	api_base_path: '',
	namespace: '/wp/v2',
	version: 'v1.1',
};

console.log( {config} );

/*
 * > site <site>
 */

const requestSite = ( args, print, run ) => {
	const mainCmd = args[0]; // -> `site`
	const siteId = args[1]; // -> `<site>`
	if ( ! siteId ) {
		return print( 'Error: Site ID must be defined.' );
	}

	const commandArgs = args.slice(2);

	const queryObject = {
		fields: []
	};

	// process arguments
	if ( commandArgs.length > 0 ) {
		console.log( {commandArgs} );
		for (var i = 0; i < commandArgs.length; i++) {
			const arg = commandArgs[i];
			if ( arg === '--fields' && commandArgs[i + 1] ) {
				queryObject.fields.push( encodeURIComponent( commandArgs[i + 1] ) )
			}
		}
	}

	// procesar `fields`
	queryObject.fields = queryObject.fields.join( ',' );
	const query = queryString.stringify( queryObject );

	const siteEndpoint = `${config.host}/rest/${config.version}/sites/${siteId}?${query}`;
	fetch( siteEndpoint )
		.then( resp => {
			if ( ! resp.ok ) {
				return print( 'Error!' );
			}

			const promise = resp.json();

			promise
				.then( data => print( JSON.stringify( data, undefined, 2 ) ) )
				.catch( console.error );

		} )
		.catch(console.error);

}

export const site = {
	description: 'Show information about the site',
	exec: requestSite
}

