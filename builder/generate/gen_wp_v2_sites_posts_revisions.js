
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/posts/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> posts <parent> revisions <id>
 */

class wpV2SitesPostsRevisionsCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> posts <parent> revisions <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
