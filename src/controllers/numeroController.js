class numeroController {

    static atualizarNumero = (req, res) => {
        const { cpfCnpj, numero } = req.query

        const novoNumero = (numero.replace(/[^0-9]/g, "%2F"));

        return novoNumero;
    }
}


export default numeroController