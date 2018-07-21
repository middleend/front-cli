
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/jp_pay_product/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> jp_pay_product <id>
 */

class wpV2SitesJpPayProductCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> jp_pay_product <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
