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
        return res.status(403).json({error: 'Problema de autenticação, verifique o token'})
    }

    if(!numero){
        return res.status(400).json({error: 'falta o número do documento'})
    }

    if(!cpfCnpj || !numeroNovo){
        return res.status(400).json({error: 'CPF ou CNPJ não encontrado'})
    }

    await axios
        .get(`http://txc.portaldocliente.online/api/data-integration/v1/app/txc/bankbill/company/42548082000153/customer/${cpfCnpj}/document/${numeroNovo}/generate-bankbill`, {
            headers: { 'x-api-key': token },
            // params: {'emissao': '10/04/2022'}
        })
        .then(response => {
            logs.push({
                message: response.data,
                status: response.status
            })
            console.log({
                message: response.data,
                status: response.status
            })
            
            return res.status(response.status).json(logs[0])

        })
        .catch(error => {
            if(error.response){
                logs.push(error.response.data);
                // res.status(error.response.status);
                return res.status(error.response.status).json(logs[0])

            } else if (error.request) {
                console.log(error.request);
                logs.push(error.request);
                // res.status(error.response.status);
                return res.status(error.response.status).json(logs[0])

            } else {
                console.log('Error', error.message);
                logs.push(error.message);
                // res.status(error.response.status);
                return res.status(error.response.status).json(logs[0])
            }
        })


    // res.set('X-Robots-Tag', 'noindex');
    // return res.status(??????????????).json(logs)
    
}


export default geraBoletoController;