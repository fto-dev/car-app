import React from "react";
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useFavoriteContext } from "@/context/favoriteContext";

import Link from "next/link";

function Header() {
	const { pathname } = useRouter();
	const { list, removeFavorite, setOffCanvasToggle } = useFavoriteContext();

	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto align-items-center">
						<Link
							className="nav-link"
							href={{
								pathname: "/",
							}}
						>
							Home
						</Link>
						<Link
							className="nav-link"
							href={{
								pathname: "/favorites",
							}}
						>
							Your Favorite Cars <span className="favorite-length text-center"> ({list.length}) </span>
						</Link>
						<button type="button"
							className="nav-link"
							onClick={setOffCanvasToggle}
						>	
							<svg className={
								clsx(
									"text-favorite button-favorite",
									list.length > 0 ? "button-favorite-filled" : ""
								)}

								viewBox="0 0 24 24" stroke="currentColor" fill="transparent" id="heart">
									<path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
						</button>
					</Nav>

					{pathname != "/favorites" && (
						<div className="ml-auto ">
							<Nav className="ms-auto align-items-center">
								<Link
									className="nav-link"
									href={{
										pathname: "/login",
									}}
								>
									Admin
								</Link>
							</Nav>
						</div>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
