import moment from 'moment';

export const date = {
	description: 'Show Date',
	method: ( args, print, run ) => print( moment().format(args[1] || args.format ) ),
	options: [
		{
			name: 'format',
			description: 'Format to show the date.',
			defaultValue: 'MMMM Do YYYY',
		},
  ],
};

export const time = {
	description: 'Show Time',
	method: ( args, print, run ) => print( moment().format('LTS') ),
};
