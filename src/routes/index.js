import express from "express";
import numeros from "./numeroRotas.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({message: "FUNCIONANDO GET!!..."})
    });

    app.use(
        express.json(),
        numeros
    )
}

export default routes;