
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: 
 *
 * >
 */

class wpV2Command {
	constructor( ) {
		this.description = 'Run >';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
