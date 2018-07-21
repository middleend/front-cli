/*
 * Commands core
 */

import { map, mapValues } from 'lodash';

import { wpComAPICommand as wp } from './wp-com-api';
import { date, time } from './date';
import { site } from './wpcom';


// @todo: get main commands from the namespaces field of the `discovery` endpoint response

const methods = {
	date,
	time,
	site,
}

const execs = {
	wp,
}

// console.log( {commands} );

export const getCommands = () => Object.assign(
	{},
	{ ...methods },
	{ ...mapValues( execs, 'exec' ) },
);

export const getDescriptions = () => mapValues( getCommands(), 'description' );
