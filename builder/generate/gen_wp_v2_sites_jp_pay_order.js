
/**
 * Command generated
 *
 * namespace/version: wp/v2
 * endpoint: /sites/(?P<wpcom_site>[\w.:]+)/jp_pay_order/(?P<id>[\d]+)
 *
 * > sites <wpcom_site> jp_pay_order <id>
 */

class wpV2SitesJpPayOrderCommand {
	constructor( ) {
		this.description = 'Run > sites <wpcom_site> jp_pay_order <id>';
		this.actions = ['show'];
		this.defaultAction = 'show';
	}

	exec = ( args, print, runCmd ) => {
		console.log( args );
	}
}

export default () => {

};
