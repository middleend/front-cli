import React, { Component } from 'react';
import WPCLI from '../components/wp-cli';

class App extends Component {
	showMsg = () => 'Hello World'

	render() {
		return (
			<div
				style={ {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh"
				} }
			>
				<WPCLI />
			</div>
		);
	}
}


export default App;