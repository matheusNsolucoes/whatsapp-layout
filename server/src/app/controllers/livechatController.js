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
        return res.send(err);
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
        return err;
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
                            break;
                        case 404:
                            return res.status(404).send('rota não encontrada');
                            break;
                    }
                });
        }

        await newMessage.save();
        await LiveChat.findByIdAndUpdate(chatId, {
            message: text,
            caption: caption,
        });
    } catch (err) {
        return res.send(err);
    }
};

const saveReceiverMsg = async (data) => {
    // responsavel por salvar as mensagens recebidas por web socket
    try {
        const newMessage = new ChatMessage(data);

        await newMessage.save();
        await LiveChat.findByIdAndUpdate(data.chatId, {
            message: data.text,
            caption: data.caption,
        });
    } catch (err) {
        return err;
    }
};

const getReceiverChat = async (from, to) => {
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

        return JSON.stringify(conversation);
    } catch (err) {
        return err;
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
    // const userId = req.query.userId;
    // const userToken = req.headers['authentication'];

    // let data = await LiveChat.find({ members: { $all: [userId] } });
    // data.forEach(async (chat) => {
    //     let chatNumber = chat.members[1];
    //     let contacts = [];

        // User.find({ userId: userToken }, async (err, arr) => {
        //     arr.forEach((items) => {
        //         items.contactList.forEach((contact) => {
        //             if (contact.phoneNumber == chatNumber) {
        //                 console.log('é um contato - ' + chatNumber);
        //                 contacts.push(contact);
        //             }
        //         })
        //     });
        // });

        // f.forEach((contact) => {
        //     console.log(contact)
        // })
    // });
};

const checkMessagerData = async (req, res) => {
    const { userId, userToken, phoneNumber } = req.body;
    let result = await LiveChat.exists({ members: { $all: [phoneNumber] } });
    if (result == null) {
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
        return res.send(err);
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
