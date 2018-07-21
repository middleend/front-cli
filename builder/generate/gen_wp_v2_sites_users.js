
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/users/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> users <id>
 */

class wpV2SitesUsersCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> users <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
