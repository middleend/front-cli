
export const getArgs = args => {
	const object = {};

	// process arguments
	if ( args.length > 0 ) {
		object.fields = [];
		// console.log( {args} );
		for (let i = 0; i < args.length; i++) {
			const arg = args[i];
			if ( arg === '--fields' && args[i + 1] ) {
				object.fields.push( encodeURIComponent( args[i + 1] ) )
			}
		}
		object.fields = object.fields.join( ',' );
	}
};
