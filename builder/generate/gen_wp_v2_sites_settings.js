
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/settings
 *
 * > sites <wpcom_site> settings
 */

class wpV2SitesSettingsCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> settings';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
