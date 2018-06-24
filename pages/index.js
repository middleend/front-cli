import React, { Component } from 'react';
import FrontCLI from '../components/front-cli';

class App extends Component {
	showMsg = () => 'Hello World'

	render() {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh"
				}}
			>
				<FrontCLI />
			</div>
		);
	}
}


export default App;