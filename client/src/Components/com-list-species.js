import React from "react";
import Species from "./Species"

const listRender = (list) => {
	return list ? (
		list.map((item, index) => {
			return (
				<Species key={index} species={item}></Species>
			)
		})
	) : (
		<p> loading</p>
	);
};

const ComListSpecies = ({ species }) => {
	return <div>{listRender(species)}</div>;
};

export default ComListSpecies;
