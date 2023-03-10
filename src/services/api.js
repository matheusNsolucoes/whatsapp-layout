// Este arquivo guarda todas as funções responsaveis por fazer conexões e requisições ao banco de dados
import axios from 'axios';
const url = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL;

// User Controllers

export const getInfo = async (reqData) => {
    try {
        const { data } = await axios.get(`${url}/instance/getInfo`, {
            headers: {
                Authentication: reqData.userId,
            },
        });

        return data;
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const ListInstance = async (data) => {
    try {
        return await axios.get(`${url}/instance/listIns`, {
            headers: {
                Authentication: data.userToken,
            },
        });
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const InitiateInstance = async (data) => {
    try {
        return await axios.post(`${url}/instance/initUser`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const deleteInstance = async (data) => {
    try {
        return await axios.post(`${url}/instance/deleteIns`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

// Contacts Controllers

export const addNewContact = async (data) => {
    try {
        return await axios.post(`${url}/contacts/addContact`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const deleteUserContact = async (data) => {
    try {
        return await axios.post(`${url}/contacts/deleteContact`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const getContacts = async (reqData) => {
    try {
        const { data } = await axios.get(`${url}/contacts/consultContacts`, {
            headers: {
                Authentication: reqData.userToken,
            },
        });

        return data;
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const getContactPic = async (reqData) => {
    try {
        const { data } = await axios.get(`${url}/contacts/getContactPic?contactId=${reqData.contactNumber}`, {
            headers: {
                userId: reqData.userId,
            },
        });

        return data;
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const getGroups = async (reqData) => {
    try {
        const { data } = await axios.get(`${url}/contacts/getGroups`, {
            headers: {
                Authentication: reqData.userId,
            },
        });

        return data;
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const blockContact = async (data) => {
    try {
        return await axios.get(`${url}/contacts/blockUserContact?contactNumber=${data.contactNumber}`, {
            headers: {
                Authentication: data.userId,
            },
        });
    } catch (err) {
        console.log('[!!] Erro ao bloquear contato - ' + err);
    }
};

export const updateContactName = async (data) => {
    try {
        return await axios.post(
            `${url}/contacts/updateContactName`,
            {
                newName: data.name,
                phoneNumber: data.number,
            },
            {
                headers: {
                    Authentication: localStorage.getItem('userToken'),
                },
            }
        );
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const getNonContacts = async (data) => {
    try {
        return await axios.post(`${url}/contacts/getNonContacts`, data);
    } catch (error) {
        console.log('Erro');
    }
};

// Contacts Tags

export const createTagForContact = async (userToken, contactNumber, tags) => {
    try {
        return await axios.post(`${url}/contacts/tags/new`, { userToken, contactNumber, tags });
    } catch (error) {
        console.log('Error while calling createtags API', error);
    }
};

export const deleteTagForContact = async (userToken, contactNumber, tags) => {
    try {
        return await axios.delete(`${url}/contacts/tags/delete`, { data: { userToken, contactNumber, tags } });
    } catch (error) {
        console.log('Error while calling createtags API', error);
    }
};

export const getTagForContact = async (userToken, phoneNumber) => {
    try {
       return await axios.post(`${url}/contacts/tags/get`, {userToken, phoneNumber});
    } catch (error) {
        console.log('Error while calling createtags API', error);
    }
};


// Tags

export const createTagForUser = async (userToken, tags) => {
    try {
        const { data } = await axios.post(`${url}/tags/new`, { userToken, tags });
        return data;
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

export const getAllTags = async (userToken) => {
    try {
        const { data } = await axios.post(`${url}/tags/get`, { userToken });
        return data;
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

export const updateTagsForUser = async (userToken, tag) => {
    try {
        const { data } = await axios.put(`${url}/tags/update`, { userToken, tag });
        return data;
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

export const deleteTagForUser = async (userToken, tag) => {
    try {
        const { data } = await axios.delete(`${url}/tags/delete`, { data: { userToken, tag } });
        return data;
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

// Campaign
export const createCampaign = async (nameCampaign, flow, userToken) => {
    console.log(`na requi: ${flow}`);
    try {
        const { data } = await axios.post(`${url}/campaign/create`, { nameCampaign, flow, userToken });
        return data;
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

export const getCampaigns = async (userToken) => {
    try {
        return await axios.post(`${url}/campaign/get`, { userToken });
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

export const updateCampaigns = async (nameCampaign, userToken, newName) => {
    try {
        const { data } = await axios.put(`${url}/campaign/update`, { nameCampaign, userToken, newName });
        return data;
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

export const deleteCampaign = async (nameCampaign, userToken) => {
    try {
        await axios.delete(`${url}/campaign/delete`, { data: { nameCampaign, userToken } });
    } catch (error) {
        console.log('Erro aqui', error.response.data.message);
    }
};

// Automation Controllers

export const sendSingleMessage = async (data) => {
    try {
        return await axios.post(`${url}/message/sendMessage`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

export const sendMultipleMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/sendMultipleMessages`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

// Live Chat Controllers

export const sendMessage = async (data) => {
    try {
        return await axios.post(`${url}/livechat/newMessage`, data);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const getAllChats = async (data) => {
    try {
        return await axios.get(`${url}/livechat/getAllChats?userId=${data.userId}`);
    } catch (error) {
        console.log('error');
    }
};

export const checkMessagerData = async (data) => {
    try {
        return await axios.post(`${url}/livechat/checkMessagerData`, data);
    } catch (error) {
        console.log(error);
    }
};

export const sendImage = async (data) => {
    try {
        return await axios.post(`${apiUrl}/message/image?key=${data.from}`, data.data);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const sendDoc = async (data) => {
    try {
        return await axios.post(`${apiUrl}/message/doc?key=${data.from}`, data.data);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const sendVid = async (data) => {
    try {
        return await axios.post(`${apiUrl}/message/video?key=${data.from}`, data.data);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const sendAudio = async (data) => {
    try {
        return await axios.post(`${apiUrl}/message/audio?key=${data.from}`, data.data);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const getCurrentChat = async (data) => {
    try {
        return await axios.get(`${url}/livechat/getChat?from=${data.from}&to=${data.to}`);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const getMessages = async (data) => {
    try {
        return await axios.get(`${url}/livechat/getMessages?chatId=${data.chatId}`);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const getContactLastMessage = async (data) => {
    try {
        return await axios.get(`${url}/livechat/getLastMessage?from=${data.from}&to=${data.to}`);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const getUserStatus = async (data) => {
    try {
        return await axios.get(`${url}/contacts/getStatus?contactNumber=${data.contactNumber}`, {
            headers: {
                userId: data.userId,
            },
        });
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const clearChat = async (data) => {
    try {
        return await axios.post(`${url}/livechat/clearChat`, data);
    } catch (err) {
        console.log('[!!] Erro na requisição ao apagar conversa - ' + err);
    }
};

// Files Controllers

export const downloadFile = async (data) => {
    try {
        return await axios.post(`${url}/files/getImage`, data);
    } catch (error) {
        console.log('Error while calling newMessage API', error);
    }
};

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/uploadFile`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
};

// Groups

export const updateGroupName = async (data) => {
    try {
        return await axios.post(`${apiUrl}/group/updatesubject?key=${data.userId}`, {
            id: data.groupId,
            subject: data.newSubject,
        });
    } catch (error) {
        console.log(error);
    }
};

/*
  name: string,
  execution: number,
  ctr: number,
  user_token: string
*/

export const createFlow = async (data) => {
    try {
        return await axios.post(`${url}/flow/create`, data);
    } catch (error) {
        console.log('Error while calling getFlow API', error);
    }
};

/*
  user_token: string,
  nameFlow: string
*/

export const getFlows = async (data) => {
    try {
        return await axios.post(`${url}/flow/get`, { data });
    } catch (error) {
        console.log('Error while calling getFlow API', error);
    }
};

/*
nameFlow: string,
userToken
*/

export const getOneFlow = async (data) => {
    try {
        return await axios.post(`${url}/flow/getOne`, data);
    } catch (error) {
        console.log('Error while calling getOneFlow API', error);
    }
};

/*
  nameFlow: string,   Nome do flow pra busca
  newName: string     Novo nome
*/

export const updateFlow = async (data) => {
    try {
        return await axios.post(`${url}/flow/update`, data);
    } catch (error) {
        console.log('Error while calling updateFlow API', error);
    }
};

/*
  user_token: string,
  nameFlow: string  Nome do flow q quer apagar
*/

export const deleteFlow = async (data) => {
    try {
        return await axios.post(`${url}/flow/delete`, data);
    } catch (error) {
        console.log('Error while calling deletFlow API', error);
    }
};

export const createFlowMap = async (data, userToken, flowName) => {
    try {
        console.log(`Dados chegam aqui: ${(data, userToken, flowName)}`);
        return await axios.post(`${url}/flow/map`, { data, userToken, flowName });
    } catch (error) {
        console.log('Error while calling createFlowMap API', error);
    }
};

export const getFlowMap = async (userToken, flowName) => {
    try {
        console.log(`Dados chegam aqui: ${(userToken, flowName)}`);
        return await axios.post(`${url}/flow/getmap`, { userToken, flowName });
    } catch (error) {
        console.log('Error while calling createFlowMap API', error);
    }
};

//Login User

export const newUser = async (fullname, email, password) => {
    try {
        return await axios.post(`${url}/account/register`, { fullname, email, password });
    } catch (error) {
        console.log('Error while calling createFlowMap API', error);
    }
};

export const authUser = async (email, password) => {
    try {
        return await axios.post(`${url}/account/login`, { email, password });
    } catch (error) {
        console.log('Error while calling authUser API', error);
    }
};
