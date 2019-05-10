import React from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import { navigate } from "@reach/router";

import Navbar from "../Navbar/Navbar";
import { LOGIN } from "../../mutations/login";

export const LoginPage = () => {
	let emailInput, passwordInput;
	return (
		<ApolloConsumer>
			{(client) => (
				<Mutation
					mutation={LOGIN}
					onCompleted={(e) => {
						localStorage.setItem("token", e.loginUser.token);
						client.writeData({
							data: {
								isAuthed: true
							}
						});
						navigate("/");
					}}
				>
					{(loginUser, { loading, error }) => (
						<>
							<Navbar />
							<form
								onSubmit={(e) => {
									e.preventDefault();
									loginUser({
										variables: {
											data: {
												email: emailInput.value,
												password: passwordInput.value
											}
										}
									});
								}}
							>
								<label htmlFor="email">email</label>
								<input
									type="email"
									placeholder="email"
									autoComplete="email"
									name="email"
									ref={(node) => {
										emailInput = node;
									}}
								/>
								<label htmlFor="Password">Name</label>
								<input
									type="password"
									placeholder="password"
									autoComplete="current-password"
									name="password"
									minLength="8"
									ref={(node) => {
										passwordInput = node;
									}}
								/>
								<button type="submit">Login</button>
							</form>
							{loading && <p>Loading...</p>}
							{error && <p>Error</p>}
						</>
					)}
				</Mutation>
			)}
		</ApolloConsumer>
	);
};

export default LoginPage;