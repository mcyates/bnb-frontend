import React from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { navigate } from "@reach/router";

import { REGISTER } from "../../mutations/register";
import { registrationValidationSchema } from "../../yup/Schema";

export const RegistrationPage = () => (
	<ApolloConsumer>
		{(client) => (
			<Mutation
				mutation={REGISTER}
				onCompleted={(e) => {
					localStorage.setItem("token", e.createUser.token);
					client.writeData({
						data: {
							isAuthed: true
						}
					});
					navigate(`/dashboard`);
				}}
				onError={(error) => {
					console.log(error);
				}}
			>
				{(createUser, { loading, error }) => (
					<>
						<h2>Registration page</h2>
						<Formik
							initialValues={{ name: "", email: "", password: "" }}
							validationSchema={registrationValidationSchema}
							onSubmit={(values, { setSubmitting }) => {
								createUser({
									variables: {
										data: {
											name: values.name,
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

									<label htmlFor="name">Username</label>
									<Field type="text" name="name" autoComplete="name" />
									<ErrorMessage name="name" component="div" />

									<label htmlFor="password">Password</label>
									<Field
										type="password"
										name="password"
										autoComplete="current-password"
									/>
									<ErrorMessage name="password" component="div" />

									<button type="submit" disabled={isSubmitting}>
										Submit
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

export default RegistrationPage;
