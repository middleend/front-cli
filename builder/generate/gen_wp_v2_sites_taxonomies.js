
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/taxonomies/(?P<taxonomy>[\w-]+)
 *
 * > sites <wpcom_site> taxonomies <taxonomy>
 */

class wpV2SitesTaxonomiesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> taxonomies <taxonomy>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
