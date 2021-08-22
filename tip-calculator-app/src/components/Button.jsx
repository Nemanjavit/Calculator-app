import React from "react";
import { Col } from "react-grid-system";

const Button = (props) => {
	return (
		<div style={{ width: "30%" }}>
			<button className="button">{props.name}</button>
		</div>
	);
};

export default Button;
