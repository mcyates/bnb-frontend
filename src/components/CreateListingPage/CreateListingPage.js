import React from "react";
import { ApolloConsumer, Mutation } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { navigate } from "@reach/router";

import { CREATELISTING } from "../../mutations/createListing";
import { CreateListingValidationSchema } from "../../yup/Schema";
import { DropzoneField } from '../shared/DropzoneField';
import './CreateListing.css';

const CreateListingPage = () => (
	<ApolloConsumer>
		{(client) => (
			<Mutation
				mutation={CREATELISTING}
				onCompleted={(e) => {
					navigate("/");
				}}
			>
				{(createListing, { loading, error }) => (
					<div className="box">
						<Formik
							initialValues={{
                name: "",
                hero: null,
								description: "",
								price: `$${0}`,
								guests: 0,
								beds: 0,
								baths: 0,
								amenities: ""
							}}
							validationSchema={CreateListingValidationSchema}
							onSubmit={(values, { setSubmitting }) => {
								// createListing()
								console.log(values);
								setTimeout(() => {
									setSubmitting(false);
								}, 400);
							}}
							render={({ isSubmitting, values }) =>console.log(values) || (
								<Form className="form">
									<label htmlFor="name">name</label>
									<Field type="text" name="name" />
									<ErrorMessage name="name" component="div" />

                  <Field name="hero" component={DropzoneField} />

									<button type="submit" disabled={isSubmitting}>
										Submit
									</button>
								</Form>
							)}
						/>
					</div>
				)}
			</Mutation>
		)}

	</ApolloConsumer>
);

export default CreateListingPage;
