import React from "react";
import { Mutation } from "react-apollo";
import { navigate } from "@reach/router";

import { REGISTER } from "../../mutations/register";
import Navbar from "../Navbar/Navbar";

export const RegistrationPage = () => {
	let nameInput, emailInput, passwordInput;
	return (
		<Mutation
			mutation={REGISTER}
			onCompleted={(e) => {
				localStorage.setItem('token', e.createUser.token)
				console.log(localStorage.getItem('token'))
				navigate(`/`);
			}}
			onError={(error) => {
				console.log(error);
			}}
		>
			{(createUser, { loading, error }) => (
				<>
					<Navbar />
					<h2>Registration page</h2>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							createUser({
								variables: {
									data: {
										name: nameInput.value,
										email: emailInput.value,
										password: passwordInput.value
									}
								}
							});
						}}
					>
						<label htmlFor="name">Username</label>
						<input
							type="text"
							placeholder="name"
							autoComplete="username"
							autoFocus
							name="name"
							ref={(node) => {
								nameInput = node;
							}}
						/>
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
						<button type="submit">Register</button>
					</form>
					{loading && <p>Loading...</p>}
					{error && <p>Error</p>}
				</>
			)}
		</Mutation>
	);
};

export default RegistrationPage;
