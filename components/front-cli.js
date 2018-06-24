import Terminal from 'terminal-in-react';

import { getCommands, getDescriptions } from '../lib/commands';

export default () => <Terminal
	color='green'
	backgroundColor='black'
	barColor='black'
	style={{ fontWeight: "bold", fontSize: "1em" }}
	commands={ getCommands() }
	descriptions={ getDescriptions() }
	msg='frontCLI is ready!'
	watchConsoleLogging= { false }
/>