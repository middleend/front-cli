/*
 * Commands core
 */

import { mapValues } from 'lodash';

import { wpComAPICommand as wp } from './wp-com-api';
import { date, time } from './date';
import { site } from './wpcom';


// @todo: get main commands from the namespaces field of the `discovery` endpoint response

const commands = {
	wp,
	date,
	time,
	site,
}

/**
 * core commands
 */

const generate = () => {

}

export const getCommands = () => mapValues( commands, 'exec' );
export const getDescriptions = () => mapValues( commands, 'description' );
