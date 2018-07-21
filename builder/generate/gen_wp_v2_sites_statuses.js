
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/statuses/(?P<status>[\w-]+)
 *
 * > sites <wpcom_site> statuses <status>
 */

class wpV2SitesStatusesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> statuses <status>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
