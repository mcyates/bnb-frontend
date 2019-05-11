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

export default registrationValidationSchema;