import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Table } from "react-bootstrap";

import { useRouter } from "next/router";
import { useFavoriteContext } from "@/context/favoriteContext";

export default function CarCard({ item, isFavorite = false }) {
	const { pathname } = useRouter();
	const { list, addFavorite, removeFavorite } = useFavoriteContext();

	const [isFavoritePage, setisFavoritePage] = useState(
		pathname === "/favorites" ? true : false
	);

	const handleClick = () => {
		if (isFavoritePage) {
			return;
		}

		isFavorite ? removeFavorite(item) : addFavorite(item);
	};

	const renderButtonText = useMemo(() => {
		const addText = "Add Favorite";
		const removeText = "Remove Favorite";

		if (isFavoritePage) return removeText;
		return isFavorite ? removeText : addText;
	}, [isFavorite, isFavoritePage]);

	return (
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
						<h5 className="card-title">{item.Name}</h5>
						<Table
							striped
							bordered
							hover
						>
							<tbody>
								<tr>
									<td>id</td>
									<td>{item.Id}</td>
								</tr>
								<tr>
									<td>Origin</td>
									<td>{item.Origin}</td>
								</tr>
								<tr>
									<td>Miles Per Gallon</td>
									<td>{item.Miles_per_Gallon}</td>
								</tr>
								<tr>
									<td>Cylinders</td>
									<td>{item.Cylinders}</td>
								</tr>
								<tr>
									<td>Displacement</td>
									<td>{item.Displacement}</td>
								</tr>
								<tr>
									<td>Horsepower</td>
									<td>{item.Horsepower}</td>
								</tr>
								<tr>
									<td>Weight In Lbs</td>
									<td>{item.Weight_in_lbs}</td>
								</tr>
								<tr>
									<td>Acceleration</td>
									<td>{item.Acceleration}</td>
								</tr>
								<tr>
									<td>Year</td>
									<td>{item.Year}</td>
								</tr>
							</tbody>
						</Table>

						<div
							className="btn btn-link text-info px-0"
							onClick={handleClick}
						>
							<small className="text-body-secondary"></small>
							{renderButtonText}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
