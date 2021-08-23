import React from "react";
import Dollar from "../svgs/Dollar";
import Person from "../svgs/Person";

const Input = ({ label, name, id, message, changeHandler, value }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<span className="warning">{message}sadsada</span>
			{id === "bill" && <Dollar />}
			{id === "person" && <Person />}
			<input
				id={id}
				type="number"
				name={name}
				onChange={changeHandler}
				value={value}
			/>
		</>
	);
};

export default Input;
