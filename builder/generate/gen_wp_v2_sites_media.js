
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/media/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> media <id>
 */

class wpV2SitesMediaCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> media <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};