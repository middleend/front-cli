import Terminal from 'terminal-in-react';

import { getCommands, getDescriptions } from '../lib/commands';

const commands = getCommands();
console.log( 'commands: %o', commands );

const descs = getDescriptions();
console.log( 'descs: %o', descs );

export default () => <Terminal
	color='green'
	backgroundColor='black'
	barColor='black'
	style={{ fontWeight: "bold", fontSize: "1em" }}
	commands={ getCommands() }
	descriptions={ getDescriptions() }
	msg='wp CLI is ready!'
	watchConsoleLogging= { false }
/>