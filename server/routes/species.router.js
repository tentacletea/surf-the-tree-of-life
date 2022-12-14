const { Router } = require("express");
const SpeciesModel = require("../db/species.model");

const speciesRouter = new Router();

speciesRouter.get("/", async (req, res) => {
	let searchQuery = {};

	if (req.query.search) {
		searchQuery = { name: {$regex: req.query.search, $options: "i"} }
	}

	const species = await SpeciesModel.find(searchQuery)
		.limit(100)
		.sort({ created: "asc" });
	return res.json(species);
});

module.exports = speciesRouter;
