import Terminal from 'terminal-in-react';

import { getCommands, getDescriptions } from '../lib/commands';

const cmds = getCommands();
const descs = getDescriptions();

console.log( {cmds} );
console.log( {descs} );

export default props => <div style={{
			width: '98%',
			margin: '10px auto',
			height: '500px',
			position: 'absolute',
			top: '0'
		}}
	>
		<Terminal
			color='green'
			backgroundColor='black'
			barColor='black'
			style={{ fontWeight: "bold", fontSize: "1em" }}
			commands={ getCommands() }
			descriptions={ getDescriptions() }
			msg='WP-CLI is ready!'
			watchConsoleLogging={ true }
			startState="maximised"
		/>
	</div>;