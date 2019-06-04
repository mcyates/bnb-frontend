import React from "react";
import { Mutation } from "react-apollo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { navigate } from "@reach/router";

import { CREATELISTING } from "../../mutations/CREATELISTING";
import { CreateListingValidationSchema } from "../../yup/Schema";
import { DropzoneField } from "../shared/DropzoneField";

import { LISTINGS } from "../../queries/LISTINGS";
import { MY_LISTINGS } from "../../queries/MY_LISTINGS";
import "./listingform.css";

const CreateListingPage = () => (
	<Mutation
		mutation={CREATELISTING}
		onCompleted={(e) => {
			navigate(`/listing/${e.createListing.id}`);
		}}
		refetchQueries={[
			{
				query: LISTINGS
			},
			{
				query: MY_LISTINGS
			}
		]}
		className="input"
	>
		{(createListing, { loading, error }) => (
			<div className="box">
				<Formik
					initialValues={{
						name: "",
						category: "apartment",
						hero: null,
						description: "",
						price: 1,
						guests: 1,
						beds: 1,
						baths: 1,
						amenities: "",
						published: false
					}}
					validationSchema={CreateListingValidationSchema}
					onSubmit={(values, { setSubmitting }) => {
						createListing({
							variables: {
								data: {
									name: values.name,
									category: values.category,
									hero: values.hero,
									description: values.description,
									price: values.price,
									guests: values.guests,
									beds: values.beds,
									baths: values.baths,
									amenities: values.amenities,
									published: true
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

							<Field name="hero" component={DropzoneField} placeholder="" />

							<label htmlFor="description">Description:</label>
							<Field
								className="text-area"
								component="textarea"
								name="description"
							/>
							<ErrorMessage name="name" component="div" />

							<label htmlFor="price">Price</label>
							<span>
								<Field className="input" type="number" name="price" min="1" /> $
							</span>

							<ErrorMessage name="price" component="div" />

							<label htmlFor="guests">Guests</label>
							<Field className="input" type="number" name="guests" min="1" />
							<ErrorMessage name="guests" component="div" />

							<label htmlFor="beds">Beds</label>
							<Field className="input" type="number" name="beds" min="1" />
							<ErrorMessage name="beds" component="div" />

							<label htmlFor="baths">Baths</label>
							<Field className="input" type="number" name="baths" min="1" />
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
				{loading && <p>Loading...</p>}
				{error && <p>error</p>}
			</div>
		)}
	</Mutation>
);

export default CreateListingPage;
