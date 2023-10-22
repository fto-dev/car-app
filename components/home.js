import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Form, Button, Col, ListGroup, Row, Offcanvas } from "react-bootstrap";
import Image from "next/image";
export default function Home({ offCanvasShow, handleClose }) {
	const [show, setShow] = useState(offCanvasShow);

	useEffect(() => {
		setShow(offCanvasShow);
	}, [offCanvasShow]);

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
					<h5>Filtred Car List (10)</h5>

					<Row>
						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>
						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>
						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col lg="4">
							<div className="card mb-3">
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

											<div className="btn btn-link text-info px-0">
												<small className="text-body-secondary"></small>
												Add Favorite
											</div>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</>
	);
}
