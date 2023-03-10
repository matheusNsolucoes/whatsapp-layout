const User = require('../models/user');
const apiUrl = process.env.API_URL;
const axios = require('axios');
const LiveChat = require('../models/livechat');

const axiosReq = axios.create({
    // cria a instância de conexão do axios
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
});

const newContact = async (req, res) => {
    const { phoneNumber, contactName, userId, contactEmail } = req.body;

    try {
        const exist = await LiveChat.findOne({
            // procura no banco de dados o chat correspondente
            members: {
                $all: [userId, phoneNumber],
            },
        });

        if (!exist) {
            // se esse chat não existir, ele gera um novo documento no banco pra ele

            let { data } = await axiosReq.get(`${apiUrl}/misc/getStatus?key=${userId}&id=${phoneNumber}`); // pega o status do usuário

            // caso o número não esteja cadastrado no banco
            axiosReq
                .get(`${apiUrl}/misc/downProfile?key=${userId}&id=${phoneNumber}`) // pega a foto de usuário do número
                .then(async (response) => {
                    let picture = await response.data;

                    const newChat = new LiveChat({
                        members: [userId, phoneNumber],
                        contactName: contactName,
                        contactProfilePicture: picture.data,
                        contactStatus: data.data.status,
                        contactEmail: contactEmail,
                    });

                    await newChat.save(); // salva o documento
                })
                .catch((err) => {
                    return res.send(err.data.message);
                });
        }

        return res.status(200).send('[!!] ja existe');
    } catch (err) {
        res.send(err);
    }
};

const deleteContact = async (req, res) => {
    const { user_token, phone_number } = req.body;

    try {
        User.find({ userId: user_token }, (err, arr) => {
            arr.forEach((items) => {
                User.findOneAndUpdate(
                    { phoneNumber: phone_number },
                    {
                        $pull: { contactList: { phoneNumber: phone_number } },
                    },
                    { new: true },
                    (err, arr) => {
                        if (arr) {
                            return res.status(200).send('[!!] Contact deleted.');
                        }
                    }
                );
            });
        });
    } catch (err) {
        console.log('[!!] Error on deleting contact - ' + err);
    }
};

const blockUser = async (req, res) => {
    const userId = req.headers['authentication'];
    const contactNumber = req.query.contactNumber;

    axios
        .get(`${apiUrl}/misc/blockUser?key=${userId}&id=${contactNumber}`)
        .then(async (response) => {
            let data = await response.data;

            res.status(200).send('[!!] Contato bloqueado com sucesso! - ' + data);
        })
        .catch((err) => {
            res.send('[!!] Erro ao bloquear contato - ' + err);
        });
};

const consultContacts = async (req, res) => {
    const userToken = req.headers['authentication'];

    try {
        User.find({ userId: userToken }, (err, arr) => {
            // puxa todos os contatos de determinado usuário, busca através da identificação do usuário (user_token)
            arr.forEach((items) => {
                contacts = items.contactList;

                let array = contacts.map((item) => {
                    return {
                        number: item.phoneNumber,
                        contact: item.contactName,
                        pfp: item.picture,
                        date: item.createdAt,
                        email: item.email,
                        status: item.status,
                    };
                });

                return res.send(array);
            });
        });
    } catch (err) {
        console.log('[!!] Error on deleting contact - ' + err);
    }
};

const getGroups = async (req, res) => {
    const userId = req.headers['authentication'];

    axiosReq
        .get(`${apiUrl}/group/getallgroups?key=${userId}`)
        .then(async (response) => {
            let data = await response.data;

            let array = Object.keys(data.instance_data).map((key) => {
                return data.instance_data[key];
            });

            return res.send(array);
        })
        .catch((err) => {
            return err;
        });
};

const getContactPic = async (req, res) => {
    // pega a foto do contato
    // const { user_id, contact_number } = req.body;
    const userId = req.headers['userid'];
    const contactNumber = req.query.contactId;

    axiosReq
        .get(`${apiUrl}/misc/downProfile?key=${userId}&id=${contactNumber}`)
        .then(async (response) => {
            let data = await response.data;

            return res.send(data.data);
        })
        .catch((err) => {
            return res.send(err);
        });
};

const updateName = async (req, res) => {
    // Atualiza o nome do contato
    const { phoneNumber, newName } = req.body;

    try {
        await LiveChat.findOneAndUpdate({members: {$all: [phoneNumber]}}, {$set: {contactName: newName}});

        res.send('Contato atualizado com sucesso.');
    } catch (err) {
        console.log('[!!] Error on deleting contact - ' + err);
    }
};

const getNonContacts = async (req, res) => {};

module.exports = {
    newContact,
    deleteContact,
    consultContacts,
    getContactPic,
    blockUser,
    getGroups,
    updateName,
    getNonContacts,
};
