import express from "express";
import atualizarCnpj from "../controllers/cpfFormatadoController.js";
import geraBoleto from "../controllers/geraBoletoController.js";


const router = express.Router();

router
    .post('/geraBoleto', geraBoleto)
    .put("/atualizaCnpj", atualizarCnpj.atualizarCnpj)


export default router;
