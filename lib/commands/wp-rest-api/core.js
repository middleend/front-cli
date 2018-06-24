
import config from './config';

const discoveryActions = [
	'show',
];

const pickupEndpoints = ( promResponse, print ) => {
	return promResponse
		.then( data => {
			const { routes, namespace } = data;
			 console.log( 'data: %o', data );

			for( let route in routes ) {
				const endpoint = route.substr( ( `/${ namespace }/` ).length );
				print( endpoint );
			}
			// print( JSON.stringify( endpoints ) )
		} )
		.catch( console.error );
}

const execDiscovery = ( args, print, runCmd ) => {
	// @todo: action is the first item of the args array
	const action = args[0];
	console.log( 'action: %o', action );

	const discoveryEndpoint = `${ config.host }${ config.namespace }`;
	fetch( discoveryEndpoint )
		.then( resp => ( resp.ok ? pickupEndpoints( resp.json(), print ) : errorHandling( resp ) ) )
		.catch( console.error );

}

const discovery = {
	description: 'Discovery WP REST ORG commands.',
	exec: execDiscovery,
	help: '`wporg` commands: ',
};

export const coreCommandsList = {
	discovery,
};