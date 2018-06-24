/*
 * Commands core
 */

import { mapValues } from 'lodash';

import { wpRestAPICommand as wporg } from './wp-rest-api';


// @todo: get main commands from the namespaces field of the `discovery` endpoint response

const commands = {
	wporg,
}

/**
 * core commands
 */

const generate = () => {

}

export const getCommands = () => mapValues( commands, 'exec' );
export const getDescriptions = () => mapValues( commands, 'description' );
