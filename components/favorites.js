import React, { useState } from "react";
import { Form, Button, Col, ListGroup, Row, Container } from "react-bootstrap";
import Image from "next/image";
import ConfirmModal from "@/utils/confirm";
import { useFavoriteContext } from "@/context/favoriteContext";
import CarCard from "./carCard";
export default function Favorites() {
	const { list, removeFavorite, clearFavorites, isFavorite } =
		useFavoriteContext();


	const [showConfirmModal, setShowConfirmModal] = useState(false);
	
	const handleShowConfirmModal = () => setShowConfirmModal(true);
	const handleCloseConfirmModal = () => setShowConfirmModal(false);

	const handleConfirmAction = () => {
		handleCloseConfirmModal();
		clearFavorites();
	};

	return (
		<>
			<Container>
				<div className="mt-5">
					<div className="d-flex align-items-center">
						<h5 className="mb-0">Your Favorite Car List ({list.length})</h5>
						<button type="button"
							className="btn btn-danger ms-auto"
							onClick={handleShowConfirmModal}
						>
							Clear All Favorites
						</button>
					</div>

					<ConfirmModal
						show={showConfirmModal}
						handleClose={handleCloseConfirmModal}
						handleConfirm={handleConfirmAction}
						title="Confirm Deletion"
						message="Are you sure you want to delete all favorites?"
					/>

					<Row className="mt-4">
						{list.map((item, index) => {
							const favorite = isFavorite(item.Id);
							return (
								<Col
									lg="4"
									key={index}
								>
									<CarCard
										item={item}
										isFavorite={favorite}
									/>
								</Col>
							);
						})}
					</Row>
				</div>
			</Container>
		</>
	);
}
