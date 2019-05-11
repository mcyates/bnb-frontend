import * as Yup from "yup";

export const registrationValidationSchema = Yup.object().shape({
	name: Yup.string().required("Please enter your username"),
	email: Yup.string()
		.email()
		.required("Please enter a valid email address"),
	password: Yup.string()
		.min(8, "Password must be atleast 8 characters long")
		.required("Please enter a password")
});

export const LoginValidationSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required("Please enter a valid email address"),
	password: Yup.string()
		.min(8, "Password must be atleast 8 characters long")
		.required("Please enter a password")
});

export const CreateListingValidationSchema = Yup.object().shape({
	name: Yup.string()
		.required("Listing must have a name")
		.min(8, "Listing name must be atleast 8 characters"),
	description: Yup.string(),
	price: Yup.number()
		.positive("Price must be postive")
		.round("floor")
		.required("Listing must have a price"),
	guests: Yup.number()
		.min(0)
		.round("floor"),
	beds: Yup.number()
		.min(0)
		.round("floor"),
	baths: Yup.number()
		.min(0)
		.round("floor"),
	amenities: Yup.string(),
	published: Yup.mixed().required()
});

export default registrationValidationSchema;
