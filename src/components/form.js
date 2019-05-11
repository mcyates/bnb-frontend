import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required("Please enter a valid email address"),
	password: Yup.string()
		.min(8, "Password must be atleast 8 characters long")
		.required("Please enter a password")
});

const RegistrationForm = ({ createUser }) => (
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
		render={({isSubmitting}) => (
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
				Submit
			</button>
			</Form>
		)}
	/>
);

