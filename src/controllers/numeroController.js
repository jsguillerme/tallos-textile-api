class numeroController {

    static atualizarNumero = (req, res) => {
        const numero = req.query.numero;
        
        const novoNumero = (numero.replace(/[^0-9]/g, "%2F"));
        
        res.status(200).send({NumeroAtualizado: novoNumero});
    }
}

export default numeroController;