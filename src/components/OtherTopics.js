import React from "react";

import { Box } from "@material-ui/core";

const OtherTopics = ({ otherTopic: { solicitation_topics } }) => {
	return (
		<Box>
			{solicitation_topics.length >= 1 && <h3>Other Topics:</h3>}

			<Box
				display="flex"
				flexWrap="wrap"
				justifyContent="space-evenly"
				bgcolor="rgb(247, 219, 219)"
			>
				{solicitation_topics.map(({ topic_title }) => {
					return <p>{topic_title}</p>;
				})}
			</Box>
		</Box>
	);
};

export default OtherTopics;
