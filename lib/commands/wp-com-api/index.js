
import { get, noop } from 'lodash';

// load core commands
import { coreCommandsList } from './core';

const sites = {
	description: 'Sites command handler',
	actions: ['show'],
	defaultAction: 'show',
	args: ['fields'],
	exec: ( cmdArgs, print, run ) => {
		console.log( {cmdArgs} );
		const siteId = cmdArgs[0];
		if ( ! siteId ) {
			return print( `Error: Site ID is undefined.` );
		}



		console.log( {cmdArgs} );
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
