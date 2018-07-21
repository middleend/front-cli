
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/blocks/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> blocks <id>
 */

class wpV2SitesBlocksCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> blocks <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
