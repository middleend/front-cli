const fs = require('fs');
const camelcase = require('camelcase');


const _log = message => {
	console.log( message )
};

module.exports.generateCommandsFromEndpoints = function( data ) {
	console.log( {data} );

	var namespace = data.namespace;
	var routes = data.routes;

	const modules = [];
	const functionsNames = [];
	const commandKeys = [];

	for (var name in routes) {
		var endpoint = name.substr( ( '/' + namespace ).length );

		// get commands and values from endpoint
		var part = endpoint.split( '/' );
		var filename = `${ namespace }`;
		var cmdKey = 'cmd_';
		var cmdStructure = {};
		var commandPath = '>';
		var endpointRexExp = '';
		var mapObject = '{\n';

		for (var i = 0; i < part.length; i++) {
			var v = part[i];
			if ( ! v ) {
				continue;
			}

			var entity;
			if ( ! ( /^\(/.test( v ) ) ) {
				filename += '-' + v;
				cmdKey += '_' + v;
				cmdStructure[ v ] = {};
				entity = v;
				commandPath += ' ' + v;
				endpointRexExp += '/' + v;
			} else {
				var entityStructure = v.match( /\(\?P\<([a-z\-\_]+)\>\[(.+)\]/i );
				if ( entityStructure.length > 1 ) {
					cmdStructure[ entity ]['id'] = entityStructure[1];
					cmdStructure[ entity ]['regexp'] = entityStructure[2];
					commandPath += ` <${ entityStructure[1] }>`;
					endpointRexExp += `/${ entityStructure[1] }`;

					filename += '-' + entityStructure[1];
					mapObject += `\t\t${ entityStructure[1] }: args[${ i/2 - 1 }],\n`
					cmdKey += '_value';
				}
				else {
					cmdStructure[ entity ]['value'] = v;
					commandPath += ` <${ v }>`;
				}
			}
		}

		mapObject += '\t}';

		var route = routes[name];
		filename = filename.replace( /\//g, '-' );
		cmdKey = cmdKey.replace( /\//g, '-' );

		modules.push( filename );
		commandKeys.push( cmdKey );

		var functionName = camelcase( filename + '_command' );
		functionsNames.push( functionName );

		filename = `gen-${ filename }.js`;

		const date = new Date();
		let sourceCode =
`
/**
 * Command generated
 *
 * namespace/version: ${namespace}
 * endpoint: ${ endpoint }
 * created at: ${ date.toISOString() }
 *
 * ${ commandPath }
 */

export default {
	description: '${ commandPath }',
	exec: ( args, print, runCmd ) => {

		const mapObject = ${ mapObject };

		const endpoint_base = 'https://public-api.wordpress.com/wp/v2${ endpointRexExp }';
		const re = new RegExp(Object.keys(mapObject).join("|"),"gi");
		const endpoint = endpoint_base.replace(re, matched => mapObject[matched.toLowerCase()]);

		fetch( endpoint )
			.then( resp => {
				const promise = resp.json();

				promise
					.then( data => print( JSON.stringify( data, undefined, 2 ) ) )
					.catch( console.error );

			} )
			.catch(console.error);

	}
}
`;
		fs.writeFile( `./builder/generate/${ filename }`, sourceCode, (err) => {  
			if (err) throw err;

			_log( `${ filename } saved.` );
		});
	}


	let mainModulerSource = `
/**
 * Command generated - Main module
 *
 * namespace/version: ${namespace}
 */

`;

for (var i = 0; i < modules.length; i++) {
	mainModulerSource += 'import ' + functionsNames[i] + ' from \'./gen-' + modules[i] + '\';\n';
}

mainModulerSource += `
export default {
`;

for (var i = 0; i < commandKeys.length; i++) {
	mainModulerSource += `\t${ commandKeys[i] }: ${ functionsNames[i] },\n`;
}

mainModulerSource += `};
`
;


	fs.writeFile( `./builder/generate/index.js`, mainModulerSource, (err) => {
		if (err) throw err;

		_log( 'index.js saved.' );
	} );
}