const Users = require('../models/user');
const bcrypt = require('bcryptjs');
const { default: mongoose } = require('mongoose');

const newUser = (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        Users.find({ email: email }).then((user) => {
            if (user.length > 0) {
                console.log('User already exists!');
            } else {
                const newUser = new Users({
                    userId: fullname,
                    email: email,
                    password: password,
                });

                //Criptografar a senha do usuario antes de salvar no banco

                bcrypt.genSalt(10, (erro, salt) => {
                    bcrypt.hash(newUser.password, salt, (erro, hash) => {
                        if (erro) {
                            console.log(erro);
                        }
                        newUser.password = hash;

                        newUser
                            .save()
                            .then(() => {
                                console.log('Usuario salvo no Banco de Dados');
                                localStorage.setItem('userToken', newUser.fullname);
                                return res.send(true);
                            })
                            .catch((err) => {
                                return res.status(500).send(err);
                            });
                    });
                });
            }
        });
    } catch (err) {
        return res.status(500).send(err);
    }
};

const deleteUser = async (req, res) => {
    const email = req.body;

    try {
        Users.deleteOne({ email: email })
            .then(() => {
                console.log('Usuario deletado');
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (err) {
        return err;
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        Users.findOne({ email: email }).then((user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, success) => {
                    if (success) {
                        console.log('Autenticado');
                        return res.send({
                            username: user.userId,
                            id: user._id,
                        });
                    } else {
                        console.log('password incorrect');
                    }
                });
            } else {
                console.log('Email nao cadastrado');
            }
        });
    } catch (err) {
        return err;
    }
};

module.exports = {
    newUser,
    deleteUser,
    loginUser,
};
