
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/pages/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> pages <id>
 */

class wpV2SitesPagesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> pages <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
