import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/com-list-species";

const fetchSpecies = (dataSetter) => {
	return fetch("http://localhost:8080/api/species/", {}).then((res) =>
		res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const handleClick = async () => {
		const data = await fetch("http://localhost:8080/api/species/");
		const res = await data.json()
		console.log(res);
	}

	const [species, setSpecies] = useState();
	useEffect(() => {
		fetchSpecies(setSpecies);
	}, [species]);

	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<input></input>
			<button onClick={handleClick}>Search</button>
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
