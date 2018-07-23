
import { get, noop, toPairs, map } from 'lodash';

// load core commands
import { coreCommandsList } from './core';

import generatedCommands from '../../../builder/generate';

console.log( {generatedCommands} );

const sites = {
	description: 'Sites command handler',
	actions: ['show'],
	defaultAction: 'show',
	args: ['fields'],
	exec: ( cmdArgs, print, run ) => {
		console.log( {cmdArgs} );
		const siteId = cmdArgs[0];
		console.log( {siteId} );
		if ( ! siteId ) {
			return print( `Error: Site ID is undefined.` );
		}

		if ( siteId === '--help' ) {
			const commandsDesc = map( toPairs( generatedCommands ), cmd => cmd[1].description ).join( '\n\t' );
			const help = 'Sites commands list: \n\t' + commandsDesc + '\n';
			return print( help );
		}

		const siteCmdArgs = [siteId];

		let commandKey = 'cmd__sites_value';

		if ( cmdArgs[1] ) {
			commandKey += '_' + cmdArgs[1];
		}

		if ( cmdArgs[2] ) {
			commandKey += '_value';
			siteCmdArgs.push( cmdArgs[2] );
		}

		if ( cmdArgs[3] ) {
			commandKey += '_' + cmdArgs[3];
		}

		const exec = get( generatedCommands, [ commandKey, 'exec' ] );
		if ( ! exec ) {
			return print( 'DEV Error: `exec() function is not defined!' );
		}

		// - process - execute the command
		const result = exec( siteCmdArgs, print, run );
	}
}

const entitiesWhitelist = {
	sites,
};

const commands = Object.assign( {}, entitiesWhitelist, coreCommandsList );

/**
 * Check command, pickup subcommand and command parameters
 * @param  {array} args     
 * @param  {function} print    
 * @param  {function} runCmd
 * @return
 */
const wpcomExec = ( args, print, runCmd ) => {
	const mainCmd = args[0]; // -> `wp`

	// get identity from command arguments
	const mainEntity = args[1];

	// get second identities, arguments and action
	const cmdArgs = args.slice( 2 );

	// - check - is main entity defined
	if ( ! mainEntity ) {
		return print( `Error: Entity is not defined.\nRun \`${ mainCmd } help\` for more information.` );
	}

	// - run help command
	if ( mainEntity === 'help' ) {
		const commandsList = Object.keys( commands );
		return print( "wp commands: \n\t* " + commandsList.join( "\n\t* " ) );
	}

	// - check - is main entity valid
	if ( ! commands[ mainEntity ] ) {
		return print( `Error: Unknow ${ mainEntity } entity.` );
	}

	const exec = get( commands, [ mainEntity, 'exec' ], false );
	if ( ! exec ) {
		return print( 'DEV Error: `exec() function is not defined!' );
	}
	
	// - process - execute the command
	const result = exec( cmdArgs, print, runCmd );
};


export const wpComAPICommand = {
	description: 'WordPress.com COM API command',
	exec: wpcomExec,
};
