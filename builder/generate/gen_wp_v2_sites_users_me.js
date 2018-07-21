
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/users/me
 *
 * > sites <wpcom_site> users me
 */

class wpV2SitesUsersMeCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> users me';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
