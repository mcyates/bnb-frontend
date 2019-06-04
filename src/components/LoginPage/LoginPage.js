import React from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import { Formik, Form, Field } from "formik";
import { navigate } from "@reach/router";

import { LOGIN } from "../../mutations/LOGIN.js";
import { LoginValidationSchema } from "../../yup/Schema";
import { LISTINGS } from "../../queries/LISTINGS";
import "./login.css";

export const LoginPage = () => (
	<ApolloConsumer>
		{(client) => (
			<Mutation
				mutation={LOGIN}
				refetchQueries={[
					{
						query: LISTINGS
					}
				]}
				onCompleted={(e) => {
					localStorage.setItem("token", e.loginUser.token);
					localStorage.setItem("id", e.loginUser.user.id);
					client.writeData({
						data: {
							isAuthed: true,
							id: e.loginUser.user.id
						}
					});
					navigate("/");
				}}
			>
				{(loginUser, { loading, error }) => (
					<div className="form-box">
						<Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={LoginValidationSchema}
							onSubmit={(values, { setSubmitting }) => {
								loginUser({
									variables: {
										data: {
											email: values.email,
											password: values.password
										}
									}
								});
								setTimeout(() => {
									setSubmitting(false);
								}, 400);
							}}
							render={({ isSubmitting }) => (
								<Form className="formik">
									<div className="formik-field">
										<label htmlFor="email">Email: </label>
										<Field
											className="input-text"
											type="email"
											name="email"
											autoComplete="email"
										/>
									</div>

									<div className="formik-field">
										<label htmlFor="password">Password: </label>
										<Field
											className="input-text"
											type="password"
											name="password"
											autoComplete="current-password"
										/>
									</div>

									<button className="btn" type="submit" disabled={isSubmitting}>
										Login
									</button>
								</Form>
							)}
						/>
						{loading && <p>Loading...</p>}
						{error && <p>Error</p>}
					</div>
				)}
			</Mutation>
		)}
	</ApolloConsumer>
);
export default LoginPage;
