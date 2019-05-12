import React from "react";
import { ApolloConsumer, Mutation } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { navigate } from "@reach/router";

import { CREATELISTING } from "../../mutations/createListing";
import { CreateListingValidationSchema } from "../../yup/Schema";

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
      <>
        <Formik
          initialValues={{
            name: "",
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
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
          render={({ isSubmitting }) => (
            <Form>
              <label htmlFor="name">name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </>
    )}
  </Mutation>
  )}
	</ApolloConsumer>
);

export default CreateListingPage;
