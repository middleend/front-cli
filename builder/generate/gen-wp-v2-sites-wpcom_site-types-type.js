
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/types/(?P<type>[\w-]+)
 * created at: 2018-07-21T21:36:04.914Z
 *
 * > sites <wpcom_site> types <type>
 */

export default {
	description: '> sites <wpcom_site> types <type>',
	exec: ( args, print, runCmd ) => {

		const mapObject = {
		wpcom_site: args[0],
		type: args[1],
	};

		const endpoint_base = 'https://public-api.wordpress.com/wp/v2/sites/wpcom_site/types/type';
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
