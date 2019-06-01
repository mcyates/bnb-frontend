import React from "react";
import { Mutation, ApolloConsumer } from "react-apollo";
import { Formik, Form, Field } from "formik";
import { navigate } from "@reach/router";

import { REGISTER } from "../../mutations/REGISTER";
import { registrationValidationSchema } from "../../yup/Schema";
import { LISTINGS } from "../../queries/LISTINGS";

export const RegistrationPage = () => (
	<ApolloConsumer>
		{(client) => (
			<Mutation
				mutation={REGISTER}
				refetchQueries={[
					{
						query: LISTINGS
					}
				]}
				onCompleted={(e) => {
					localStorage.setItem("token", e.createUser.token);
					localStorage.setItem("id", e.createUser.user.id);
					client.writeData({
						data: {
							isAuthed: true,
							id: e.createUser.user.id
						}
					});
					navigate(`/`);
				}}
				onError={(error, ...rest) => {
					console.log(rest);
				}}
			>
				{(createUser, { loading, error }) => (
					<div className="form-box">
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
								<Form className="formik">
									<h2>Sign up today!</h2>
									<div className="formik-field">
										<label htmlFor="Email: ">Email</label>
										<Field
											className="input-text"
											type="email"
											name="email"
											autoComplete="email"
										/>
									</div>
									<div className="formik-field">
										<label htmlFor="Name">Username</label>
										<Field
											className="input-text"
											type="text"
											name="name"
											autoComplete="name"
										/>
									</div>
									<div className="formik-field">
										<label htmlFor="Password: ">Password</label>
										<Field
											className="input-text"
											type="password"
											name="password"
											autoComplete="current-password"
										/>
									</div>

									<button className="btn" type="submit" disabled={isSubmitting}>
										Submit
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

export default RegistrationPage;
