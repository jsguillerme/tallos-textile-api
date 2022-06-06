import express from "express";
import numeroController from "../controllers/numeroController.js";

const router = express.Router();

router
    .put("/atualizar/numero", numeroController.atualizarNumero);

export default router;