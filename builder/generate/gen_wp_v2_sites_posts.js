
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/posts/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> posts <id>
 */

class wpV2SitesPostsCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> posts <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
