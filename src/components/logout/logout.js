import React from "react";
import { ApolloConsumer } from "react-apollo";
import { navigate } from "@reach/router";

export const Logout = () => (
	<ApolloConsumer>
		{(client) => (
			<button
				onClick={() => {
					localStorage.setItem("token", "");
					client.writeData({
					  data: {
					    isAuthed: false
					  }
					})
					navigate("/");
				}}
			>
				Logout
			</button>
		)}
	</ApolloConsumer>
);

export default Logout;