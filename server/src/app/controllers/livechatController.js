const LiveChat = require('../models/livechat');
const ChatMessage = require('../models/chatmessage');
const axios = require('axios');
const { newContact } = require('./contactsController');
const User = require('../models/user');
const apiUrl = process.env.API_URL;

const axiosReq = axios.create({
    // cria a instância de conexão do axios, passando os headers necessários
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    },
});

const getChat = async (req, res) => {
    const from = req.query.from;
    const to = req.query.to;

    try {
        const exist = await LiveChat.findOne({
            // procura no banco de dados o chat correspondente
            members: {
                $all: [from, to],
            },
        });

        if (!exist) {
            // se esse chat não existir, ele gera um novo documento no banco pra ele
            const newChat = new LiveChat({
                members: [from, to],
            });

            await newChat.save(); // salva o documento
        }

        let conversation = await LiveChat.findOne({
            // se ele já existir, retorna ele para o requisitor
            members: { $all: [from, to] },
        });

        return res.status(200).json(conversation);
    } catch (err) {
        return res.send('[!!] Erro ao buscar o chat');
    }
};

const getLastMessage = async (req, res) => {
    // puxa a ultima mensagem que o contato enviou
    const from = req.query.from;
    const to = req.query.to;

    try {
        let conversation = await LiveChat.findOne({
            members: { $all: [from, to] },
        });

        let string = JSON.stringify(conversation);
        let obj = JSON.parse(string);
        let chatId = obj?._id;

        const lastMessage = await ChatMessage.findOne({
            chatId: chatId,
            from: to,
        }).sort({ $natural: -1 });

        const unreadMessages = await ChatMessage.find({
            chatId: chatId,
            read: false,
        }).count();

        return res.json({
            lastMessage: lastMessage,
            unreadMessagesCount: unreadMessages,
        });
    } catch (err) {
        return res.send('[!!] Erro ao buscar última mensagem do usuário');
    }
};

const newMessage = async (req, res) => {
    const { text, from, to, chatId, type, quotedMessage, caption } = req.body;
    const newMessage = new ChatMessage(req.body);

    try {
        if (type != 'file') {
            axiosReq
                .post(`${apiUrl}/message/text?key=${from}`, {
                    id: to,
                    message: text,
                })
                .then((axiosRes) => {
                    switch (axiosRes.status) {
                        case 201:
                            return res.status(200).send('mensagem enviada');
                        case 404:
                            return res.status(404).send('rota não encontrada');
                    }
                });
        }

        await newMessage.save();
    } catch (err) {
        return res.send('[!!] Erro ao enviar mensagem');
    }
};

const saveReceiverMsg = async (data) => {
    // responsavel por salvar as mensagens recebidas por web socket
    try {
        const newMessage = new ChatMessage(data);
        await newMessage.save();
    } catch (err) {
        res.send('[!!] Erro ao salvar a mensagem recebida');
    }
};

// Quando receber uma mensagem, vai verificar se quem enviou a mensagem já está registrada como um "contato", se não, vai registrar a o contato da pessoa no modelo LIVECHAT.
const getReceiverChat = async (data) => {
    try {
        const exist = await LiveChat.findOne({
            // procura no banco de dados o chat correspondente
            members: {
                $all: [data.from, data.to],
            },
        });

        if (!exist) {
            // se esse chat não existir, ele gera um novo documento no banco pra ele
            let statusData = await axiosReq.get(`${apiUrl}/misc/getStatus?key=${data.from}&id=${data.to}`);
            let pictureData = await axiosReq.get(`${apiUrl}/misc/downProfile?key=${data.from}&id=${data.to}`); // pega a foto de usuário do número

            const newChat = new LiveChat({
                members: [data.from, data.to],
                contactName: data.contactName,
                contactProfilePicture: pictureData.data.data,
                contactStatus: statusData.data.data.status,
                contactEmail: '',
            });

            await newChat.save(); // salva o documento
        }

        let conversation = await LiveChat.findOne({
            // se ele já existir, retorna ele para o requisitor
            members: { $all: [data.from, data.to] },
        });

        return JSON.stringify(conversation);
    } catch (err) {
        res.send('[!!] Erro ao salvar a mensagem do receiver');
    }
};

const clearConversation = async (req, res) => {
    const { from, to } = req.body;

    try {
        await ChatMessage.deleteMany({
            // se ele já existir, retorna ele para o requisitor
            $all: [from, to],
        });

        await LiveChat.deleteMany({
            // se ele já existir, retorna ele para o requisitor
            members: { $all: [from, to] },
        });

        res.status(200).send('[!!] Conversa deletada com sucesso!!!');
    } catch (err) {
        res.send('[!!] Erro ao deletar a conversa');
    }
};

const getAllChats = async (req, res) => {
    const userId = req.query.userId;

    try {
        let conversation = await LiveChat.find({
            members: { $all: [userId] },
        });

        return res.status(200).json(conversation);
    } catch (err) {
        return res.send('[!!] Erro ao buscar todos os chats');
    }
};

const getMessages = async (req, res) => {
    const chatId = req.query.chatId;

    try {
        const messages = await ChatMessage.find({
            chatId: chatId,
        });

        await ChatMessage.find({ chatId: chatId }).update({ $set: { read: true } }); // quando clicado no chat, torna todas as mensagens não lidas e mensagens lidas.

        return res.status(200).json(messages);
    } catch (err) {
        return res.send('[!!] Erro ao puxar as mensagens');
    }
};

module.exports = {
    getMessages,
    newMessage,
    getChat,
    saveReceiverMsg,
    getReceiverChat,
    getAllChats,
    getLastMessage,
    clearConversation,
};
