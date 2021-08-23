import React from "react";
import { Col } from "react-grid-system";

const Button = ({ name, clickHandler }) => {
	return (
		<div style={{ width: "30%" }}>
			<button onClick={clickHandler} className="button">
				{name}
			</button>
		</div>
	);
};

export default Button;
