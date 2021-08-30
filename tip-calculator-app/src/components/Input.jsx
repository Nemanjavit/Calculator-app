import React from "react";
import Dollar from "../svgs/Dollar";
import Person from "../svgs/Person";

const Input = ({
	label,
	name,
	id,
	message,
	changeHandler,
	value,
	style,
	placeHolder,
}) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			{name === "custom" ? "" : <span className="warning">{message}</span>}

			{id === "bill" && <Dollar />}
			{id === "person" && <Person />}
			<input
				id={id}
				type="number"
				name={name}
				onChange={changeHandler}
				value={value}
				className={style}
				placeholder={placeHolder}
			/>
		</>
	);
};

export default Input;
