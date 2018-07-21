
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/posts/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> posts <parent> autosaves <id>
 */

class wpV2SitesPostsAutosavesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> posts <parent> autosaves <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
