const apiUrl = process.env.API_URL;
const axios = require('axios');

const axiosReq = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
});

const sendMessage = async (req, res) => {
    // envia apenas um mensagem
    const { user_id, msg, phone_number } = req.body;

    axiosReq
        .post(`${apiUrl}/message/text?key=${user_id}`, {
            id: phone_number,
            message: msg,
        })
        .then(async () => {
            return res.send('mensagem enviada');
        })
        .catch((err) => {
            return err;
        });
};

const sendMultipleMessages = async (req, res) => {
    // envia mensagens para multiplos contatos
    const { user_id, msg, number_list } = req.body;

    try {
        number_list.forEach((number) => {
            axiosReq
                .post(`${apiUrl}/message/text?key=${user_id}`, {
                    id: number,
                    message: msg,
                })
                .then(async (response) => {
                    return res.send('mensagens enviadas.');
                });
        });
    } catch (err) {
        return err;
    }
};

module.exports = {
    sendMessage,
    sendMultipleMessages,
};
