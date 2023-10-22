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
								<Col
									lg="4"
									key={index}
								>
									<CarCard item={item} />
								</Col>
							);
						})}
					</Row>
				</div>
			</Container>
		</>
	);
}
