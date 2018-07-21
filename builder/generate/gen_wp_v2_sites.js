
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)
 *
 * > sites <wpcom_site>
 */

class wpV2SitesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
