import React, { useState, useEffect } from "react";

import { Form, Button, Col, ListGroup, Row, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";

import { useFavoriteContext } from "@/context/favoriteContext";
import { getCars } from "@/services/api";
import CarCard from "./carCard";
import Search from "./search";
import LoginForm from "./loginForm";

let allCarList;

export default function Admin() {
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
			<Container>
				<div className="mt-5">
					<h5>Admin Page</h5>

					<Row></Row>
				</div>
			</Container>
		</>
	);
}
