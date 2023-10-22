import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
export default function Search({ filter, resetFilter }) {
	const [searchValue, setSearchValue] = useState("");
	const regex = new RegExp(searchValue, "gi");

	const isInputTextValueEmpty = () => {
		if (searchValue.length == 0) {
			resetFilter();
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		!isInputTextValueEmpty() ? filter(regex) : null;
	}, [searchValue]);

	return (
		<>
			<p>Search</p>
			<Form.Group
				className=""
				controlId="formBasicEmail"
			>
				<Form.Control
					type="text"
					placeholder="Name or Origin"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</Form.Group>
		</>
	);
}
