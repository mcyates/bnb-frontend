import React from "react";
import Dropzone from "react-dropzone";

export const DropzoneField = ({
	field: { name },
	form: { setFieldValue },
	...props
}) => {
	return (
		<Dropzone
			accept="image/*"
			multiple={false}
			onDrop={([file]) => {
				setFieldValue(name, file);
			}}
			{...props}
		>
			{({ getRootProps, getInputProps }) => (
				<div id="drop" {...getRootProps()}>
					<input {...getInputProps()} />
					<p></p>
				</div>
			)}
		</Dropzone>
	);
};
