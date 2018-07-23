
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: 
 * created at: 2018-07-21T21:36:04.913Z
 *
 * >
 */

export default {
	description: '>',
	exec: ( args, print, runCmd ) => {

		const mapObject = {
	};

		const endpoint_base = 'https://public-api.wordpress.com/wp/v2';
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
