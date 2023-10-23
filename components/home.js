import React, { useState, useEffect } from "react";

import { Form, Button, Col, ListGroup, Row, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";

import { useFavoriteContext } from "@/context/favoriteContext";
import { getCars } from "@/services/api";
import CarCard from "./carCard";
import Search from "./search";

let allCarList;

export default function Home() {
	const {
		list,
		removeFavorite,
		offCanvasToggle,
		setOffCanvasValue,
		isFavorite,
	} = useFavoriteContext();

	const [isLoading, setIsLoading] = useState(true);
	const [filtredCarList, setFiltredCarList] = useState([]);

	useEffect(() => {
		getCars()
			.then((response) => {
				allCarList = response.data;
				setFiltredCarList(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	const resetFilter = () => {
		setFiltredCarList(allCarList);
	};

	const filter = (isAdvanceSearch, mode, regex) => {
		const filter = allCarList.filter((item, index) => {
			if (item[mode] == null) return false;

			if (isAdvanceSearch) {
				if (item[mode].toString().match(regex)) {
					return true;
				}
			} else {
				if (item.Name.match(regex) || item.Origin.match(regex)) {
					return true;
				}
			}
		});

		setFiltredCarList(filter);
	};

	return (
		<>
			<Offcanvas
				show={offCanvasToggle}
				onHide={setOffCanvasValue}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						Your Favorite Car List ({list.length})
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div>
						{list.map((item, index) => {
							return (
								<div
									className="card mb-3"
									key={index}
								>
									<div className="row g-0">
										<div className="col-auto d-flex align-items-center">
											<div className="px-3">
												<Image
													className="img-fluid rounded-start"
													src={"/bmw.png"}
													width={50}
													height={50}
													alt="BMW"
												/>
											</div>
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title mb-0">{item.Name}</h5>

												<div
													className="btn btn-link text-danger px-0"
													onClick={() => removeFavorite(item.Id)}
												>
													<small className="text-body-secondary"></small>
													Remove Favorite
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</Offcanvas.Body>
			</Offcanvas>

			<Container>
				<div className=" mt-5">
					<Search
						filter={filter}
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
							filtredCarList.map((item, index) => {
								const favorite = isFavorite(item.Id);

								return (
									<Col
										md="6"
										key={index}
									>
										<CarCard
											item={item}
											isFavorite={favorite}
										/>
									</Col>
								);
							})
						)}
					</Row>
				</div>
			</Container>
		</>
	);
}
