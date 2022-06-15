// import geraBoletoService from '../services/geraBoletoService.js'
import axios from "axios";


const geraBoletoController = async (req, res) => 
{
    const logs = [];
    const token = "ZjegJFyh2S8Ygl2dKwmOG960QSNHMRqW7mUEruGj";
    const cpfCnpj  = req.query.cpfCnpj;
    const numero = req.query.numero;
    let numeroNovo

    try{
        numeroNovo = (numero.replace(/[^0-9]/g, "%2F"));

    } catch (err) {
        return res.status(400).json({error: 'falta o número do documento'})
    }

    if(token != "ZjegJFyh2S8Ygl2dKwmOG960QSNHMRqW7mUEruGj"){
        return res.status(500).json({error: 'Problema de autenticação, verifique o token'})
    }

    if(!numero){
        return res.status(400).json({error: 'falta o número do documento'})
    }

    if(!cpfCnpj || !numeroNovo){
        return res.status(400).json({error: 'CPF ou CNPJ não encontrado'})
    }

    await axios
        .get(`https://txc.portaldocliente.online/api/data-integration/v1/app/txc/bankbill/company/${cpfCnpj}/customer/${cpfCnpj}/document/${numeroNovo}/generate-bankbill`, {
            headers: { 'x-api-key': token },
            params: {'emissao': '10/04/2022'}
        })
        .then(response => {
            logs.push({
                cliente: cpf,
                documento: novoNumero,
                message: response.data,
            })
            console.log({
                cliente: cpf,
                documento: novoNumero,
                message: response.data
            })
        })
        .catch(e => {
            logs.push({
                message: e.response.data,
                status: e.response.status,
                documentoEnviado: numeroNovo,
                clienteEnviado: cpfCnpj
            })
        })
    res.set('X-Robots-Tag', 'noindex');
    return res.status(200).json(logs[0])
}


export default geraBoletoController;