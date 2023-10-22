import React from "react";
import { Form, Button, Col, ListGroup, Row, Container } from "react-bootstrap";
import Image from "next/image";
import { useFavoriteContext } from "@/context/favoriteContext";
import CarCard from "./carCard";
export default function Favorites() {
	const { list, removeFavorite, clearFavorites } = useFavoriteContext();
	return (
		<>
			<Container>
				<div className="mt-5">
					<div className="d-flex">
						<h5>Your Favorite Car List ({list.length})</h5>
						<div
							className="ms-auto"
							onClick={clearFavorites}
						>
							Clear All Favorites
						</div>
					</div>

					<Row>
						{list.map((item, index) => {
							return (
								<Col lg="4">
									<CarCard item={item} />
								</Col>
							);
						})}
						{/* <div className="card mb-3">
								<div className="row g-0">
									<div className="col-auto d-flex align-items-center">
										<div className="px-3">
											<Image
												className="img-fluid rounded-start"
												src={"/bmw.png"}
												width={100}
												height={100}
												alt="BMW"
											/>
										</div>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<p className="card-text">
												This is a wider card with supporting text below as a
												natural lead-in to additional content. This content is a
												little bit longer.
											</p>
											<p className="card-text">
												<small className="text-body-secondary">
													Last updated 3 mins ago
												</small>
											</p>

											<div className="btn btn-link text-danger px-0">
												<small className="text-body-secondary"></small>
												Remove Favorite
											</div>
										</div>
									</div>
								</div>
							</div> */}
					</Row>
				</div>
			</Container>
		</>
	);
}
