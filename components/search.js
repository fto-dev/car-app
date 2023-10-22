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
	const [inputPlaceholder, setInputPlaceholder] = useState("");
	const [switchButtonContent, setSwitchButtonContent] = useState(
		"Switch to Advance Search"
	);

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
		getCarModel()
			.then((response) => {
				setCarModel(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		!isInputTextValueEmpty() ? filter(advanceSearch.value, regex) : null;
	}, [searchValue]);

	useEffect(() => {
		resetFilter();
		setSearchValue("");
		if (searchType == searchTypes.simple) {
			setSwitchButtonContent("Switch to Advance Search");
			setInputPlaceholder("Search with Name or Origin");
		} else {
			setSwitchButtonContent("Switch to Simple Search");
			setInputPlaceholder(`Search with ${advanceSearch.name}`);
		}
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
					{searchType == searchTypes.simple ? (
						<Form.Group
							className=""
							controlId="formBasicEmail"
						>
							<Form.Control
								type="text"
								placeholder="Search with Name or Origin"
								onChange={(e) => {
									setSearchValue(e.target.value);
								}}
							/>
						</Form.Group>
					) : (
						<Row>
							<Col>
								<Form.Group
									className=""
									controlId="formBasicEmail"
								>
									<Form.Control
										type="text"
										placeholder={inputPlaceholder}
										value={searchValue}
										onChange={(e) => {
											setSearchValue(e.target.value);
										}}
									/>
								</Form.Group>
							</Col>
							{carModel.length != 0 && (
								<Col xs={"auto"}>
									<Form.Group
										as={Col}
										controlId="my_multiselect_field"
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
					)}
				</Col>
				<Col xs={"auto"}>
					<Button
						variant="primary"
						type="button"
						onClick={handleSwitchButton}
					>
						{switchButtonContent}
					</Button>
				</Col>
			</Row>
		</>
	);
}
