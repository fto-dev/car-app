import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";

import { getCars } from "@/services/api";
import CarCard from "./carCard";
import Search from "./search";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	const [allCarList, setAllCarList] = useState([]);
	const [filtredCarList, setFiltredCarList] = useState([]);

	useEffect(() => {
		getCars()
			.then((response) => {
				setAllCarList(response.data);
				setFiltredCarList(response.data);
			})
			.catch(function (error) {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	const resetFilter = () => {
		setFiltredCarList(allCarList);
	};

	const filterByNameAndOrigin = (regex) => {
	/* @todo change filter name */
	const filterByNameAndOrigin = (mode, regex) => {
		const filter = allCarList.filter((item, index) => {
			if (item.Name.match(regex) || item.Origin.match(regex)) {
				return item;
			if (item[mode] == null) return false;

			if (mode.length == 0) {
				if (item.Name.match(regex) || item.Origin.match(regex)) {
					return true;
				}
			} else {
				if (item[mode].toString().match(regex)) {
					return true;
				}
			}
		});

		setFiltredCarList(filter);
	};

	return (
		<>
			<Container>
				<div className="mt-4">
					<Search
						filter={filterByNameAndOrigin}
						resetFilter={resetFilter}
					/>
				</div>

				<div className="mt-5">
					<h5>
						Filtred Car List
						{isLoading ? "Loading..." : ` (${filtredCarList.length})`}
					</h5>

					<Row>
						{isLoading ? (
							<h3>Loading...</h3>
						) : (
							filtredCarList.map((item, index) => (
								<Col
									md="6"
									key={index}
								>
									<CarCard item={item} />
								</Col>
							))
						)}
					</Row>
				</div>
			</Container>
		</>
	);
}
