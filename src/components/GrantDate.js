import React from "react";
import Box from "@material-ui/core/Box";

const GrantDate = ({ date }) => {
	const { application_due_date, close_date, open_date, release_date } = date;

	return (
		<Box display="flex" bgcolor="#dbdbe4" flexDirection="column">
			<p>Release date: {release_date}</p>
			<p>Open date: {open_date}</p>

			<Box bgcolor="#e8e8f5">
				<p>Application due date:</p>
				<Box display="flex" flexWrap="wrap" justifyContent="space-around">
					{application_due_date.map((duoDate, i) => (
						<p key={i}>{duoDate}</p>
					))}
				</Box>
			</Box>

			<p>Close date: {close_date}</p>
		</Box>
	);
};

export default GrantDate;
