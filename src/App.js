import React, { useState, useEffect } from "react";
import SingleGrant from "./components/SingleGrant";

import axios from "axios";

import "./App.css";
import { Container, Grid } from "@material-ui/core";

const url = "https://www.sbir.gov/api/solicitations.json?keyword=sbir";

function App() {
	const [grantData, setGrantData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// Fetching data from API
	const fetchData = async () => {
		/*  There is a CORS problem with the API that affected the render process, I do some research and come out with this solution */
		const {
			data: { contents },
		} = await axios.get(
			`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
		);
		const finalData = JSON.parse(contents);
		setIsLoading(false);
		setGrantData(finalData);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Container>
			<Grid container spacing={3}>
				{isLoading ? (
					<h1>...Loading</h1>
				) : (
					<SingleGrant grantData={grantData} />
				)}
			</Grid>
		</Container>
	);
}

export default App;
