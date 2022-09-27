const express = require("express");
const routes = express.Router();

routes.get("/cities", async function (req, res, next) {
    const collection = await Collection();

    try {
        const result = await collection.insertMany(array);
        return console.log('adicionado')
    } catch (err) {
        return console.log(err)
    }
});

// NOT FOUND
routes.use(function (req, res, next) {
    res.status(404);
    return res.json({ error: { message: "The webpage you're trying to reach can't be found." } });
});

module.exports = routes;