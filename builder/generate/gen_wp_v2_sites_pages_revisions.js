
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/pages/(?P<parent>[\d]+)/revisions/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> pages <parent> revisions <id>
 */

class wpV2SitesPagesRevisionsCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> pages <parent> revisions <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
