import React, { useEffect, useState } from "react";
import ComListSpecies from "../Components/com-list-species";

const fetchSpecies = (dataSetter) => {
	return fetch(
		"http://localhost:8080/api/species/", {}).then((res) =>
		res.json().then((data) => dataSetter(data))
	);
};

const PageHome = () => {
	const [species, setSpecies] = useState();
	useEffect(() => {
		fetchSpecies(setSpecies);
	}, []);

	const handleInput = async (e) => {
		const paramsObj = {
			search: e.target.value
		}
		const searchParams = new URLSearchParams(paramsObj)

		const data = await fetch(`http://localhost:8080/api/species?${searchParams}`);
		const res = await data.json()
		setSpecies(res);
	}

	return (
		<div>
			<h1>Welcome to Tree Of Life Project</h1>
			<input onChange={handleInput}></input>
			<ComListSpecies species={species}></ComListSpecies>
		</div>
	);
};

export default PageHome;
