
function mask(value, pattern){
    let i = 0;
    const v = value.toString();

    return pattern.replace(/#/g, () => v[i++] || '');
}

class atualizarCnpj {

    static atualizarCnpj = (req, res) => {

        try {

            const cnpj = req.query.cnpj

            const cnpjFormatado = mask(cnpj, '##.###.###/####-##');

            res.status(200).send({CnpjFormatado: cnpjFormatado})

        } catch (error) {
            
            res.status(400).send({message: "Erro"})
        }
        
    }
}


export default atualizarCnpj