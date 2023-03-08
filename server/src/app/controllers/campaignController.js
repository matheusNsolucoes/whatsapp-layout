const User = require('../models/user');

const createCampaign = async (req, res) => {
    try {
        const {nameCampaign, flow, userToken} = req.body;
        console.log(`dados do body: ${nameCampaign} ${flow} ${userToken}`)

        const user = await User.findOne({ userId: userToken, 'campaigns.name': nameCampaign });
        if (user) {
            console.log('Já existe')
            return;
        }

        await User.findOneAndUpdate( 
            { userId: userToken },
            { $push: {
                campaigns: {
                    name: nameCampaign,
                    flow: flow
                }
            } },
            {new: true},
            (err, arr) => {
                if(arr) {
                console.log(`fo: ${JSON.stringify(arr)}`)
                }
            }
        )
            
        res.status(200).send({ message: 'Campanha criada com sucesso!' });

    } catch (error) {
        console.log(error.message);
    }
}

const getCampaigns = async (req, res) => {
    try {
        const { userToken } = req.body;

        console.log(userToken)

        const user = await User.findOne({ userId: userToken });

        if (!user) {
            return res.status(404).send({ error: 'Usuário não encontrado.' });
        }

        const campaigns = user.campaigns;

        res.send(campaigns);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: 'Erro ao obter campanhas.' });
    }
}

const updateCampaign = async (req, res) => {
    try {
        const {nameCampaign, userToken, newName} = req.body;
        console.log(`dados do body: ${nameCampaign} ${userToken}`)

        const user = await User.findOne({ userId: userToken, 'campaigns.name': newName });
        if (user) {
            console.log('Já existe')
            return;
        }

        await User.findOneAndUpdate(
            { userId: userToken, 'campaigns.name': nameCampaign },
            {$set: {
                "campaigns.$.name": newName
            }}, 
            {new: true}
            ).then(() => console.log('Campaign Salva'))
    } catch (error) {
        console.log(error.message);
    }
}

const deleteCampaign = async (req, res) => {
    try {
        const { nameCampaign, userToken } = req.body;

        await User.updateOne(
            { userId: userToken },
            { $pull: { campaigns: { name: nameCampaign } } }
        );

        res.send({ message: `Campanha ${nameCampaign} removida com sucesso.` });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: 'Erro ao remover campanha.' });
    }
}

module.exports = {
    createCampaign,
    updateCampaign,
    deleteCampaign,
    getCampaigns
}