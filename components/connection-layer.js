import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCommands, getDescriptions } from '../lib/commands';



class ConnectionLayer extends Component {
	static propTypes = {
		onCommandsChange: PropTypes.func,
		// commands: PropTypes.array,
		// descriptions: PropTypes.array,
	};

	state = {
		commands: [],
		descriptions: [],
	};

	componentWillMount() {
		this.setState( {
			commands: getCommands(),	
			descriptions: getDescriptions(),	
		})

		this.props.onCommandsChange( this.state.commands, this.state.descriptions );
	}

	render() {
		return (
			<div
				style={{
					width: '98%',
					margin: '10px auto',
					height: '500px',
					position: 'absolute',
					top: '0'
				}}
			>
				{ this.props.children }
			</div>
		);
	}
}

export default ConnectionLayer;
