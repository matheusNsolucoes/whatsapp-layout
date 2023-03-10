const User = require('../models/user');

const newFlow = async (req, res) => {
    const { name, execution, ctr, user_token } = req.body;

    try {
        await User.findOneAndUpdate(
            { userId: user_token },
            {
                $push: {
                    flowList: {
                        name,
                        execution,
                        ctr,
                    },
                },
            }
        ).then(() => {
            console.log('Flow Salvo');
            return res.status(200);
        });
    } catch (err) {
        return Error;
    }
};

const getFlows = async (req, res) => {
    try {
        const { data } = req.body;

        User.find({ userId: data }, (err, arr) => {
            arr.forEach((items) => {
                flow = items.flowList;

                let array = flow.map((item) => {
                    return {
                        name: item.name,
                        execution: item.execution,
                        ctr: item.ctr,
                        createdAt: item.createdAt,
                    };
                });
                console.log(JSON.stringify(array));
                return res.json(array);
            });
        });
    } catch (error) {
        console.log(error.message);
    }
};

const getOneFlow = async (req, res) => {
    const { userToken, nameFlow } = req.body;

    try {
        const flowFinded = await User.find({ userId: userToken }, { flowList: { $elemMatch: { name: nameFlow } } });

        if (!flowFinded) res.status(404);

        return res.status(200).json(flowFinded);
    } catch (err) {
        return err;
    }
};

const updateFlow = async (req, res) => {
    const { user_token, nameFlow, newName } = req.body;

    try {
        await User.findOneAndUpdate(
            { 'flowList.name': nameFlow },
            {
                $set: {
                    'flowList.$.name': newName,
                },
            }
        ).then(() => {
            console.log('Flow atualizado');
            return res.status(200);
        });
    } catch (err) {
        return err;
    }
};

const deleteFlow = async (req, res) => {
    const { user_token, nameFlow } = req.body;

    try {
        User.find({ userId: user_token }, (err, arr) => {
            arr.forEach((items) => {
                User.findOneAndUpdate(
                    { name: nameFlow },
                    {
                        $pull: { flowList: { name: nameFlow } },
                    },
                    { new: true },
                    (err, arr) => {
                        if (arr) {
                            return res.status(200).send('flow deletado');
                        }
                    }
                );
            });
        });
    } catch (err) {
        return err;
    }
};

module.exports = {
    newFlow,
    getFlows,
    getOneFlow,
    deleteFlow,
    updateFlow,
};
