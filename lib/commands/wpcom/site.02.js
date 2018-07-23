import fetch from 'isomorphic-unfetch';


export const site = {
	description: 'Show information about the site',
	method: ( args, print, run ) => {
		// siteID is the first command arg 
		const siteId = args._[0];
		if ( ! siteId ) {
			return print( 'Error: Site ID must be defined.' );
		}

		const endpoint = `https://public-api.wordpress.com/rest/v1.1/sites/${siteId}`;
		console.log( {endpoint} );

	},
}

