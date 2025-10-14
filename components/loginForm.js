import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { login } from "@/services/api/authentication";
import Toaster from "@/utils/toaster";
import { setTokenSessionStorage } from "@/utils/storage";

export default function LoginForm() {
	const [nameValue, setNameValue] = useState("demouser");
	const [passwordValue, setPasswordValue] = useState("bazinga!");

	const handleLogin = () => {
		// post input values authentication service
		const userModel = {
			nameValue,
			passwordValue,
		};

		login(userModel)
			.then((response) => {
				if (response.data.status) {
					setTokenSessionStorage(response.data.token);
					Toaster.success(response.data.message);
					// switch page
				} else {
					Toaster.error(response.data.message);
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<Col xs={"auto"}>
			<Form.Group
				as={Row}
				controlId=""
			>
				<Form.Control
					value={nameValue}
					onChange={(e) => {
						setNameValue(e.target.value);
					}}
					type="text"
					placeholder="User Name"
				></Form.Control>
				<Form.Control
					className="mt-2"
					value={passwordValue}
					onChange={(e) => {
						setPasswordValue(e.target.value);
					}}
					type="password"
					placeholder="Password"
				></Form.Control>
				<Button
					className="mt-2"
					variant="outline-primary"
					onClick={handleLogin}
				>
					Login
				</Button>
			</Form.Group>
		</Col>
	);
}
