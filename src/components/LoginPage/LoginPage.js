import React from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { navigate } from "@reach/router";

import { LOGIN } from "../../mutations/login";
import { LoginValidationSchema } from "../../yup/Schema";

export const LoginPage = () => (
	<ApolloConsumer>
		{(client) => (
			<Mutation
				mutation={LOGIN}
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
					<>
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
								<Form>
									<label htmlFor="email">Email</label>
									<Field type="email" name="email" autoComplete="email" />
									<ErrorMessage name="email" component="div" />

									<label htmlFor="password">Password</label>
									<Field
										type="password"
										name="password"
										autoComplete="current-password"
									/>
									<ErrorMessage name="password" component="div" />

									<button type="submit" disabled={isSubmitting}>
										Login
									</button>
								</Form>
							)}
						/>
						{loading && <p>Loading...</p>}
						{error && <p>Error</p>}
					</>
				)}
			</Mutation>
		)}
	</ApolloConsumer>
);
export default LoginPage;
