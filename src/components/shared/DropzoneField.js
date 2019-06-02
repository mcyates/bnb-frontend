import React from "react";
import Dropzone from "react-dropzone";
import uploadSVG from "../../images/upload.svg";

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
					<span className="form-box">
						<img className="listing-svg" src={uploadSVG} alt="reload icon" />
					</span>
				</div>
			)}
		</Dropzone>
	);
};
