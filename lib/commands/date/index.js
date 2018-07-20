import moment from 'moment';

export const date = {
	description: 'Show Date',
	exec: ( args, print, run ) => print( moment().format(args[1] || 'MMMM Do YYYY') ),
};

export const time = {
	description: 'Show Time',
	exec: ( args, print, run ) => print( moment().format('LTS') ),
};
