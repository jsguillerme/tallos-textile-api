import express from "express";
// import numeroController from "../controllers/numeroController.js";
import geraBoleto from "../controllers/geraBoletoController.js";


const router = express.Router();

router
    .get('/geraBoleto', geraBoleto)
    // .put("/", numeroController.atualizarNumero)


export default router;
