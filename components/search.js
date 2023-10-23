import React, { useState, useEffect } from "react";
import { getCarModel } from "@/services/api";
import { Form, Button, Row, Col } from "react-bootstrap";
const defaultAdvanceSearchObject = {
	name: "Name",
	value: "Name",
};
const searchTypes = {
	advanved: "advanved",
	simple: "simple",
};

export default function Search({ filter, resetFilter }) {
	const [searchType, setSearchType] = useState(searchTypes.simple);
	const [searchValue, setSearchValue] = useState("");
	const [carModel, setCarModel] = useState([]);
	const [advanceSearch, setAdvanceSearch] = useState(
		defaultAdvanceSearchObject
	);

	const escapeRegexSpecialChars = (input) =>
		input.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");

	const regex = new RegExp(escapeRegexSpecialChars(searchValue), "gi");

	const isInputTextValueEmpty = () => {
		if (searchValue.length == 0) {
			resetFilter();
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		getCarModel()
			.then((response) => {
				setCarModel(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		const isAdvanceSearch = searchType == searchTypes.advanved;
		!isInputTextValueEmpty()
			? filter(isAdvanceSearch, advanceSearch.value, regex)
			: null;
	}, [searchValue]);

	useEffect(() => {
		resetFilter();
		setSearchValue("");
	}, [advanceSearch]);

	const handleSwitchButton = () => {
		if (searchType == searchTypes.simple) {
			setSearchType(searchTypes.advanved);
			setAdvanceSearch(defaultAdvanceSearchObject);
		} else {
			setSearchType(searchTypes.simple);
			setAdvanceSearch({});
		}
	};

	return (
		<>
			<p>Search</p>

			<Row>
				<Col>
					<Row>
						<Col>
							<Form.Group
								className=""
								controlId="formBasicEmail"
							>
								<Form.Control
									type="text"
									placeholder={
										searchType == searchTypes.simple
											? "Search with Name or Origin"
											: `Search with ${advanceSearch.name}`
									}
									value={searchValue}
									onChange={(e) => {
										setSearchValue(e.target.value);
									}}
								/>
							</Form.Group>
						</Col>
						{carModel.length != 0 && searchType == searchTypes.advanved && (
							<Col xs={"auto"}>
								<Form.Group
									as={Col}
									controlId=""
								>
									<Form.Control
										as="select"
										value={advanceSearch.value}
										onChange={(e) => {
											setAdvanceSearch(carModel[e.target.selectedIndex]);
										}}
									>
										{carModel.map((item, index) => (
											<option
												key={index}
												value={item.value}
											>
												{item.name}
											</option>
										))}
									</Form.Control>
								</Form.Group>
							</Col>
						)}
					</Row>
				</Col>
				<Col xs={"auto"}>
					<Button
						variant="primary"
						type="button"
						onClick={handleSwitchButton}
					>
						{searchType == searchTypes.simple
							? "Switch to Advance Search"
							: "Switch to Simple Search"}
					</Button>
				</Col>
			</Row>
		</>
	);
}
