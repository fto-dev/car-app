import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Form, Button, Col, ListGroup, Row, Offcanvas } from "react-bootstrap";

import { getCars } from "@/services/api";
import CarCard from "./carCard";

export default function Home({ offCanvasShow, handleClose }) {
	const [isLoading, setIsLoading] = useState(true);

	const [show, setShow] = useState(offCanvasShow);
	const [allCarList, setAllCarList] = useState([]);
	const [filtredCarList, setfiltredCarList] = useState([]);

	useEffect(() => {
		setShow(offCanvasShow);
	}, [offCanvasShow]);

	useEffect(() => {
		//setAllCarList
		getCars()
			.then((response) => {
				setAllCarList(response.data);
				setfiltredCarList(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			<Offcanvas
				show={show}
				onHide={handleClose}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Your Favorite Car List</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div>
						<div className="card mb-3 ">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-3 mt-3">
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
										<h5 className="card-title mb-0">Card title</h5>

										<div className="btn btn-link text-danger px-0">
											<small className="text-body-secondary"></small>
											Remove Favorite
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Offcanvas.Body>
			</Offcanvas>

			<Container>
				<div className=" mt-5">
					<p>
						You can write below input and search all cars with name and origin.
					</p>
					<Form.Group
						className=""
						controlId="formBasicEmail"
					>
						<Form.Control
							type="text"
							placeholder="You can search by name or origin"
						/>
					</Form.Group>
				</div>

				<div className="mt-5">
					<h5>
						Filtred Car List
						{isLoading ? "Loading..." : ` (${allCarList.length})`}
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
