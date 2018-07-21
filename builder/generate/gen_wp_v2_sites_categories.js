
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/categories/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> categories <id>
 */

class wpV2SitesCategoriesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> categories <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
