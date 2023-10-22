import React from "react";
import Image from "next/image";
import { Table } from "react-bootstrap";

export default function CarCard({ item }) {
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
					</div>
				</div>
			</div>
		</div>
	);
}
