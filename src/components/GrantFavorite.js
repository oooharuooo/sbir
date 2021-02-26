import React, { useState } from "react";

import { Button, Container, Box } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const GrantFavorite = ({ grant }) => {
	const [favorite, setFavorite] = useState(false);
	const [showJson, setShowJson] = useState(false);
	const [readMore, setReadMore] = useState(false);
	const [textJson, setTextJson] = useState("");

	// Extract the object by user favorite then convert to json file
	const JsonCompiler = (objFile) => {
		const jsonFile = JSON.stringify(objFile);
		setTextJson(jsonFile);
		setShowJson(!showJson);
	};

	return (
		<Container>
			<Box display="flex" flexDirection="column">
				<Box display="flex" justifyContent="space-evenly">
					<Button
						variant="contained"
						color="primary"
						onClick={() => setFavorite(!favorite)}
					>
						{favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</Button>
					{favorite && (
						<Button
							variant="contained"
							color="secondary"
							onClick={() => JsonCompiler(grant)}
						>
							Json
						</Button>
					)}
				</Box>

				<Box bgcolor="rgb(231 234 253)">
					{showJson && (
						<p style={{ wordBreak: "break-all" }}>
							{readMore ? textJson : textJson.substr(0, 50).trim() + "..."}
							<Button
								variant="contained"
								color="primary"
								onClick={() => setReadMore(!readMore)}
							>
								{readMore ? <RemoveIcon /> : <AddIcon />}
							</Button>
						</p>
					)}
				</Box>
			</Box>
		</Container>
	);
};

export default GrantFavorite;
