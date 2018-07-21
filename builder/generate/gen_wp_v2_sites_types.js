
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/types/(?P<type>[\w-]+)
 *
 * > sites <wpcom_site> types <type>
 */

class wpV2SitesTypesCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> types <type>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
