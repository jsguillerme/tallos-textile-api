
function mask(value, pattern){
    let i = 0;
    // const v = value.toString();
    return pattern.replace(/#/g, () => value[i++] || '');
}

class atualizarCnpj {

    static atualizarCnpj = (req, res) => {
        
        try {
            const { cnpj } = req.body

            if(!cnpj){
                return res.status(409).json({error: 'falta o número do CNPJ'})
            }

            if (cnpj.length == 11) {
                const cpfFormatado = mask(cnpj, '###.###.###-##');
                res.status(200).send({valorFormatado: cpfFormatado})
            } else {
                const cnpjFormatado = mask(cnpj, '##.###.###/####-##');
                res.status(200).send({valorFormatado: cnpjFormatado})
            }

        } catch (error) {  
            res.status(400).send({message: "Erro"})
        }
        
    }
}

export default atualizarCnpj