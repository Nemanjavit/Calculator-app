import React from "react";
import Dollar from "../svgs/Dollar";
import Person from "../svgs/Person";

const Input = ({ label, id, message }) => {
	console.log(label);
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<span className="warning">{message}sadsada</span>
			{id === "bill" && <Dollar />}
			{id === "person" && <Person />}
			<input id={id} type="number" />
		</>
	);
};

export default Input;
