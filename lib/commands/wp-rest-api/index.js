
import { get, noop } from 'lodash';

// load core commands
import { coreCommandsList } from './core';

const posts = {
	description: 'Show the posts of the site.',
	exec: noop,
}

const entitiesWhitelist = {
	posts
};

const commands = Object.assign( {}, entitiesWhitelist, coreCommandsList );

console.log( 'commands: %o', commands );

/**
 * Check command, pickup subcommand and command parameters
 * @param  {array} args     
 * @param  {function} print    
 * @param  {function} runCmd
 * @return
 */
const wporgExec = ( args, print, runCmd ) => {
	const mainCmd = args[0]; // -> `wporg`

	// get identity from command arguments
	const mainEntity = args[1];

	// get second identities, arguments and action
	const wporgArgs = args.slice( 2 );

	// - check - is main entity defined
	if ( ! mainEntity ) {
		return print( `Error: Entity is not defined.\nRun \`${ mainCmd } help\` for more information.` );
	}

	// - run help command
	if ( mainEntity === 'help' ) {
		return print( 'HELP !!!' );
	}

	// - check - is main entity valid
	if ( ! commands[ mainEntity ] ) {
		return print( `Error: Unknow ${ mainEntity } entity.` );
	}

	const exec = get( commands, [ mainEntity, 'exec' ], false );
	if ( ! exec ) {
		return print( 'DEV Error: `exec() function is not defined!' );
	}

	// @todo: - process - get <en></en>tities, values, and action
	
	// - process - execute the command
	const result = exec( wporgArgs, print, runCmd );
};


export const wpRestAPICommand = {
	name: 'wp',
	description: 'WordPress.com REST API command',
	exec: wporgExec,
};
