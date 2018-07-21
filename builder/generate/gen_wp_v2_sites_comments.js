
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/comments/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> comments <id>
 */

class wpV2SitesCommentsCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> comments <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
