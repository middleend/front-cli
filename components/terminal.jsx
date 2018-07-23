import Terminal from 'terminal-in-react';

import { getCommands, getDescriptions } from '../lib/commands';

const cmds = getCommands();
const descs = getDescriptions();

console.log( {cmds} );
console.log( {descs} );

export default props => 
	<Terminal
		color='green'
		backgroundColor='black'
		barColor='black'
		style={{ fontWeight: "bold", fontSize: "1em" }}
		msg='WP-CLI is ready!'
		watchConsoleLogging={ true }
	/>;