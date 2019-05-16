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
			onDrop={async ([file]) => {
				setFieldValue(name, file);
			}}
			{...props}
		>
			{({ getRootProps, getInputProps }) => (
				<div id="drop" {...getRootProps()}>
					<input {...getInputProps()} />
					<p className="drop-p">Click here or drag a image over</p>
				</div>
			)}
		</Dropzone>
	);
};
