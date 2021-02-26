import React from "react";
import GrantInformation from "./GrantInformation";
import GrantDate from "./GrantDate";
import OtherTopics from "./OtherTopics";
import GrantFavorite from "./GrantFavorite";

import { Grid, Box, Container } from "@material-ui/core";

const SingleGrant = ({ grantData }) => {
	return (
		<>
			{grantData.map((grant) => {
				const {
					solicitation_title,
					solicitation_number,
					...otherProps
				} = grant;

				return (
					<Grid item sm={6} key={solicitation_number}>
						<Box border={2} borderRadius={16} borderColor="primary.main">
							<Container>
								<h3>{solicitation_title}</h3>
								<GrantFavorite grant={grant} />
								<GrantInformation
									information={otherProps}
									solicitation_number={grant.solicitation_number}
								/>
								<GrantDate date={otherProps} />
								<OtherTopics otherTopic={otherProps} />
							</Container>
						</Box>
					</Grid>
				);
			})}
		</>
	);
};

export default SingleGrant;
