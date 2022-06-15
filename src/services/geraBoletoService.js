// import axios from 'axios';
// import numeroController from '../controllers/numeroController.js';

// const geraBoletoService = async (req, res) => {
//     const logs = [];
//     const token = "ZjegJFyh2S8Ygl2dKwmOG960QSNHMRqW7mUEruGj";
//     const cpfCnpj  = 41806047000124;
//     const numeroNovo = 129043;

//     if(!cpfCnpj || !numeroNovo){
//         return res.status(400).json({error: 'CPF ou CNPJ não encontrado ou falta o número do documento'})
//     }

//     await axios
//         .get(`https://txc.portaldocliente.online/api/data-integration/v1/app/txc/bankbill/company/${cpfCnpj}/customer/${cpfCnpj}/document/${numeroNovo}/generate-bankbill`, {
//             headers: { 'x-api-key': token },
//             params: {'emissao': '10/04/2022'}
//         })
//         .then(response => {
//             console.log("AQUI")
//             logs.push({
//                 cliente: cpf,
//                 documento: novoNumero,
//                 message: response.data,
//             })
//             console.log({
//                 cliente: cpf,
//                 documento: novoNumero,
//                 message: response.data
//             })
//         })
//         .catch(e => {
//             logs.push({
//                 message: e.response.data,
//                 status: e.response.status
//             })
//         })
//     res.set('X-Robots-Tag', 'noindex');
//     return res.status(200).json(logs[0])
// }

// export default geraBoletoService;



