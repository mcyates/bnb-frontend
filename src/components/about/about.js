import React from "react";

import bedSVG from "../../images/bed-3.svg";
import bathSVG from "../../images/shower.svg";
import avatarSVG from "../../images/avatar.svg";
import uploadSVG from "../../images/upload.svg";
import "./about.css";

export const About = () => (
	<div className="about form-box">
		<div>
			<span className="listing-svg-box">
				<img className="listing-svg" src={avatarSVG} alt="guest icon" />
			</span>
			<span className="listing-svg-box">
				<img className="listing-svg" src={uploadSVG} alt="reload icon" />
			</span>
			Icons made by{" "}
			<a
				className="nav-link"
				href="https://www.flaticon.com/authors/gregor-cresnar"
				title="Gregor Cresnar"
			>
				Gregor Cresnar
			</a>{" "}
			from{" "}
			<a className="nav-link" href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com
			</a>{" "}
			is licensed by{" "}
			<a
				className="nav-link"
				rel="noopener noreferrer"
				href="http://creativecommons.org/licenses/by/3.0/"
				title="Creative Commons BY 3.0"
				target="_blank"
			>
				CC 3.0 BY
			</a>
		</div>

		<div>
			<span className="listing-svg-box">
				<img className="listing-svg" src={bedSVG} alt="bed icon" />
			</span>
			<span className="listing-svg-box">
				<img className="listing-svg" src={bathSVG} alt="bath icon" />
			</span>
			Icons made by{" "}
			<a
				className="nav-link"
				href="https://www.flaticon.com/authors/smashicons"
				title="Smashicons"
			>
				Smashicons
			</a>{" "}
			from{" "}
			<a className="nav-link" href="https://www.flaticon.com/" title="Flaticon">
				www.flaticon.com
			</a>{" "}
			is licensed by{" "}
			<a
				className="nav-link"
				href="http://creativecommons.org/licenses/by/3.0/"
				title="Creative Commons BY 3.0"
				target="_blank"
				rel="noopener noreferrer"
			>
				CC 3.0 BY
			</a>
		</div>
	</div>
);

export default About;
