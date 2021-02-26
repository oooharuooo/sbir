import React from "react";
import Box from "@material-ui/core/Box";

const GrantInformation = ({ information, solicitation_number }) => {
	const { agency, branch, program, phase, solicitation_year } = information;
	return (
		<Box display="flex" bgcolor="rgb(247 219 219)" flexDirection="column">
			<p>Agency: {agency}</p>
			<p>Branch: {branch}</p>
			<p>
				Program / Phase / Year /: {program}/ {phase} / {solicitation_year}
			</p>
			<p>Solicitation Number: {solicitation_number}</p>
		</Box>
	);
};

export default GrantInformation;
