
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/feedback/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> feedback <id>
 */

class wpV2SitesFeedbackCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> feedback <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
