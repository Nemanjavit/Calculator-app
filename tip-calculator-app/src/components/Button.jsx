import React from "react";
import { Col } from "react-grid-system";

const Button = ({ name, clickHandler }) => {
	return (
		// <div style={{ width: "30%" }}>
		<Col xs={6} md={6} lg={6} xl={4} style={{ padding: "5px" }}>
			<button onClick={clickHandler} className="button">
				{name}
			</button>
		</Col>

		// </div>
	);
};

export default Button;
