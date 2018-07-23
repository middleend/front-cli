import queryString from 'query-string';
import { map } from 'lodash';

import config from '../../../config';

/*
 * > site <site>
 */

const requestSite = ( args, print, run ) => {
	// siteID is the first command arg 
	const siteId = args._[0];
	if ( ! siteId ) {
		return print( 'Error: Site ID must be defined.' );
	}

	const action = args._[1] || 'show';

	// process args
	const queryObject = {};

	// `--fields`
	if ( args.fields && args.fields ) {
		queryObject.fields = typeof args.fields === 'object' 
			? args.fields.join( ',' )
			: args.fields;
	}

	// `--pretty`
	if ( args.fields ) {
		queryObject.pretty = true;
	}

	const query = queryString.stringify( queryObject );

	const siteEndpoint =
		config.wp_api_host + '/' +
		config.wp_com_api_base_path + '/' +
		config.wp_com_api_version + '/' +
		`sites/${siteId}?${query}`;

	fetch( siteEndpoint )
		.then( resp => {
			const promise = resp.json();

			promise
				.then( data => print( JSON.stringify( data, undefined, 2 ) ) )
				.catch( console.error );

		} )
		.catch(console.error);

}

export const site = {
	description: 'Show information about the site',
	method: requestSite,
	options: [
		{
			name: 'fields',
			description: 'Returns specified fields only. Example: -f ID -f title',
		},
		{
			name: 'pretty',
			description: 'set output pretty JSON.',
		}
	]
}

