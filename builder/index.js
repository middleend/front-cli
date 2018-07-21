const fs = require('fs');
const camelcase = require('camelcase');

module.exports.generateCommandsFromEndpoints = function( data ) {
	console.log( {data} );

	var namespace = data.namespace;
	var routes = data.routes;

	console.log( {namespace} );
	console.log( {routes} );

	const modules = [];
	const classNames = [];

	for (var name in routes) {
		console.log( {name} );
		var endpoint = name.substr( ( '/' + namespace ).length );
		console.log( {endpoint} );

		// get commands and values from endpoint
		var part = endpoint.split( '/' );
		var filename = `${ namespace }`;
		var cmdStructure = {};
		var commandPath = '>';

		for (var i = 0; i < part.length; i++) {
			var v = part[i];
			if ( ! v ) {
				continue;
			}

			var entity;
			if ( ! ( /^\(/.test( v ) ) ) {
				filename += '_' + v;
				cmdStructure[ v ] = {};
				entity = v;
				commandPath += ' ' + v;
			} else {
				var entityStructure = v.match( /\(\?P\<([a-z\-\_]+)\>\[(.+)\]/i );
				if ( entityStructure.length > 1 ) {
					cmdStructure[ entity ]['id'] = entityStructure[1];
					cmdStructure[ entity ]['regexp'] = entityStructure[2];
					commandPath += ` <${ entityStructure[1] }>`;
				}
				else {
					cmdStructure[ entity ]['value'] = v;
					commandPath += ` <${ v }>`;
				}
			}
		}

		console.log( {cmdStructure} );

		var route = routes[name];
		console.log( {route} );

		
		filename = filename.replace( /\//g, '_' );
		modules.push( filename );

		var className = camelcase( filename + '_command' );
		classNames.push( className );

		filename = `gen_${ filename }.js`;

		let sourceCode =
`
/**
 * Command generated
 *
 * namespace/version: ${namespace}
 * endpoint: ${ endpoint }
 *
 * ${ commandPath }
 */

class ${ className } {
	constructor( ) {
		this.description = 'Run ${ commandPath }';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
`;
		console.log( {filename} );

		fs.writeFile( `./builder/generate/${ filename }`, sourceCode, (err) => {  
			if (err) throw err;

			console.log( `${ filename } saved.` );
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
	mainModulerSource += 'import ' + classNames[i] + ' from \'' + modules[i] + '\';\n';
}

mainModulerSource += `
export default {};
`;


	fs.writeFile( `./builder/generate/index.js`, mainModulerSource, (err) => {
		if (err) throw err;

		console.log( `index.js saved.` );
	} );
}