
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/pages/(?P<parent>[\d]+)/autosaves/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> pages <parent> autosaves <id>
 */

class wpV2SitesPagesAutosavesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> pages <parent> autosaves <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
