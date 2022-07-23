import axios from "axios";


const geraBoletoController = async (req, res) => {

    const { numero, cpfCnpj } = req.body;
    let status;
    let numeroNovo;
    let cpfCnpjNovo;
    const logs = [];
    const token = "ZjegJFyh2S8Ygl2dKwmOG960QSNHMRqW7mUEruGj";

    try {cpfCnpjNovo = (cpfCnpj.replace(/\D/gm, ''));

    } catch (error) {return res.status(400).json({ error: 'Erro nos dados do cliente' })}

    try {numeroNovo = (numero.replace(/[^0-9]/g, "%2F"));

    } catch (err) {return res.status(400).json({ error: 'Erro nos dados do boleto solicitado' });}

    await axios
        .get(`http://txc.portaldocliente.online/api/data-integration/v1/app/txc/bankbill/company/42548082000153/customer/${cpfCnpjNovo}/document/${numeroNovo}/generate-bankbill`, {
            headers: { 'x-api-key': token },
            responseType: 'json'
        })
        .then(response => {
            logs.push(response.data)
            status = response.status
        })
        .catch(error => {
            if (error.response) {
                logs.push(error.response.data);
                return res.status(error.response.status).json(logs[0])

            } else if (error.request) {
                logs.push(error.request);
                return res.status(error.response.status).json(logs[0])

            } else {
                logs.push(error.message);
                return res.status(error.response.status).json(logs[0])
            }
        })

    return res.status(status).json(logs[0])
}


export default geraBoletoController;