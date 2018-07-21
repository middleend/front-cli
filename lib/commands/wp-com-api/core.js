
import config from '../../../config';
// import generatedCommands from '../../../builder/generate';
import { getArgs } from './utils';


const pickupEndpoints = ( promResponse, print ) => {
	return promResponse
		.then( data => {
			const { routes, namespace } = data;
			// console.log( 'data: %o', data );

			for( let route in routes ) {
				const endpoint = route.substr( ( `/${ namespace }/` ).length );
				print( endpoint );
			}
			// print( JSON.stringify( endpoints ) )
		} )
		.catch( console.error );
}


class Discovery {
	constructor( ) {
		this.description = 'Discovery WP REST ORG commands.';
		this.actions = ['show', 'generate'];
		this.defaultAction = 'show';
		this.help = '`wporg` commands: ';
	}

	exec = ( args, print, runCmd ) => {
		console.log( {args} );
		// @todo: action is the first item of the args array
		const action = args[0] || this.defaultAction;
		console.log( 'action: %o', action );

		const commandArgs = getArgs( args );
		console.log( {commandArgs} );

		switch( action ) {
			case 'show':
				// const discoveryEndpoint = `${ config.wp_api_host }/${ config.wp_rest_api_namespace }/${ config.wp_rest_api_version }`;
				const discoveryEndpoint = `api/${ config.wp_rest_api_namespace }/${ config.wp_rest_api_version }`;
				fetch( discoveryEndpoint )
					.then( resp => ( resp.ok ? pickupEndpoints( resp.json(), print ) : resp.json() ) )
					.catch( console.error );
				break;

			case 'generate':
				const generateEndpoint = `api/${ config.wp_rest_api_namespace }/${ config.wp_rest_api_version }/generate`;
				fetch( generateEndpoint )
					.then( resp => ( resp.ok ? pickupEndpoints( resp.json(), print ) : resp.json() ) )
					.catch( console.error );
				break;
		}
	}
}

export const coreCommandsList = {
	discovery: new Discovery,
};
