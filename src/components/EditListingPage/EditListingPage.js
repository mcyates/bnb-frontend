import React from "react";
import { ApolloConsumer, Mutation, Query } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { navigate } from "@reach/router";
import { DropzoneField } from "../shared/DropzoneField";
import { LISTINGS } from "../../queries/LISTINGS";
import { EDITLISTING } from "../../mutations/EDITLISTING.js";
import { GET_LISTING } from "../../queries/GET_LISTING";
import { MY_LISTINGS } from "../../queries/MY_LISTINGS";
import "./edit.css";

export const EditListingPage = (props) => (
	<ApolloConsumer>
		{(client) => (
			<Mutation
				mutation={EDITLISTING}
				refetchQueries={[
					{
						query: GET_LISTING,
						variables: { id: props.id }
					},
					{
						query: LISTINGS
					},
					{
						query: MY_LISTINGS
					}
				]}
				onCompleted={(e) => {
					navigate(`/listing/${e.updateListing.id}`);
				}}
			>
				{(updateListing, { loading, error }) => (
					<>
						{loading && <p>Loading...</p>}
						{error && <p>error</p>}
						<Query query={GET_LISTING} variables={{ id: props.id }}>
							{({ loading, error, data }) => {
								if (loading) {
									return null;
								}
								if (error) {
									return `Error: ${error}`;
								}
								const { listing } = data;

								return (
									<div className="box">
										<Formik
											initialValues={{
												name: listing.name,
												category: listing.category,
												hero: null,
												description: listing.description,
												price: listing.price,
												guests: listing.guests,
												beds: listing.beds,
												baths: listing.baths,
												amenities: listing.amenities
											}}
											onSubmit={(values, { setSubmitting }) => {
												updateListing({
													variables: {
														id: props.id,
														data: {
															...values
														}
													}
												});
												setTimeout(() => {
													setSubmitting(false);
												}, 400);
											}}
											render={({ isSubmitting }) => (
												<Form className="form">
													<label htmlFor="name">Name:</label>
													<Field
														className="input-text"
														type="text"
														name="name"
														placeholder="melrose place"
													/>
													<ErrorMessage name="name" component="div" />

													<label htmlFor="category">Category:</label>
													<Field
														className="select"
														component="select"
														name="category"
														placeholder="Category"
													>
														<option value="apartment">Apartment</option>
														<option value="sharedRoom">Shared Room</option>
														<option value="house">House</option>
														<option value="privateRoom">Private room</option>
														<option value="villa">Villa</option>
														<option value="boat">Boat</option>
													</Field>
													<ErrorMessage name="category" component="div" />

													<Field name="hero" component={DropzoneField} />
													<img
														src={listing.heroUrl}
														alt="preview"
														className="preview"
													/>

													<label htmlFor="description">Description:</label>
													<Field
														className="text-area"
														component="textarea"
														name="description"
													/>
													<ErrorMessage name="name" component="div" />

													<label htmlFor="price">Price</label>
													<span>
														<Field
															className="input"
															type="number"
															name="price"
															min="1"
														/>{" "}
														$
													</span>

													<ErrorMessage name="price" component="div" />

													<label htmlFor="guests">Guests</label>
													<Field
														className="input"
														type="number"
														name="guests"
														min="1"
													/>
													<ErrorMessage name="guests" component="div" />

													<label htmlFor="beds">Beds</label>
													<Field
														className="input"
														type="number"
														name="beds"
														min="1"
													/>
													<ErrorMessage name="beds" component="div" />

													<label htmlFor="baths">Baths</label>
													<Field
														className="input"
														type="number"
														name="baths"
														min="1"
													/>
													<ErrorMessage name="baths" component="div" />

													<label htmlFor="amenities">Amenities</label>
													<Field
														className="text-area"
														component="textarea"
														name="amenities"
													/>
													<ErrorMessage name="amenities" component="div" />

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
									</div>
								);
							}}
						</Query>
					</>
				)}
			</Mutation>
		)}
	</ApolloConsumer>
);

export default EditListingPage;
