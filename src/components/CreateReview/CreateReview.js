import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Mutation } from "react-apollo";

import { CREATEREVIEW } from "../../mutations/CREATEREVIEW";
import { GET_LISTING } from "../../queries/GET_LISTING";

export const CreateReview = (props) => {
	return (
		<React.Fragment>
			<h3>Create review here!</h3>
			<Mutation
				mutation={CREATEREVIEW}
				refetchQueries={[
					{
						query: GET_LISTING,
						variables: { id: props.listingId }
					}
				]}
			>
				{(createReview, { loading, error }) => (
					<React.Fragment>
						<Formik
							initialValues={{
                review: "",
                rating: 3
              }}
              onSubmit={(values, { setSubmitting}) => {
                createReview({
                  variables: {
                    data: {
                      text: values.review,
                      rating: values.rating,
                      listing: props.listingId,
                      author: props.authorId
                    }
                  }
                })
                setTimeout(() => {
                  setSubmitting(false);
                }, 400)
              }}
							render={({ isSubmitting, values }) => (
								<Form className="form">
									<label htmlFor="review">Review: </label>
									<Field
										name="review"
										className="text-area"
										component="textarea"
										placeholder="lorem ipsum"
									/>
									<ErrorMessage name="review" component="div" />


                  <label htmlFor="rating">Rating</label>
                  <span>
                    <Field className="input" type="number" name="rating" min="1" max="5" />
                  </span>
                  <ErrorMessage name="rating" component="div" />

									<button
										className="btn-form"
										type="submit"
										disabled={isSubmitting}
									>
										Submit
									</button>
								</Form>
							)}
						/>
						{loading && <p>Loading...</p>}
						{error && <p>error</p>}
					</React.Fragment>
				)}
			</Mutation>
		</React.Fragment>
	);
};
