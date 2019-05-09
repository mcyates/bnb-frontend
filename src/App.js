import React, { Component } from "react";
import AppRouter from "./router/AppRouter";
import "./App.css";

const initialState = {
	route: "signin",
	isSignedIn: false,
	user: {
		id: "",
		name: "",
		email: ""
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}
	render() {
		return (
			<React.Fragment>
				<AppRouter />
			</React.Fragment>
		);
	}
}

export default App;
