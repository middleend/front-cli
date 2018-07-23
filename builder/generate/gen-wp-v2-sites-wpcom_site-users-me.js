
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/users/me
 * created at: 2018-07-21T21:36:04.915Z
 *
 * > sites <wpcom_site> users me
 */

export default {
	description: '> sites <wpcom_site> users me',
	exec: ( args, print, runCmd ) => {

		const mapObject = {
		wpcom_site: args[0],
	};

		const endpoint_base = 'https://public-api.wordpress.com/wp/v2/sites/wpcom_site/users/me';
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
