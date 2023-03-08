import React, { useState, useEffect } from 'react';
import { Container, ModalBox, FinishButton, Background } from './styles';
import { io } from 'socket.io-client';
import { InitiateInstance } from '../../services/api';
import { useModalContext } from '../../modal.context';

function QRCodeModal(props) {
    const {
        modalState: { message, visible },
        openModal,
        closeModal,
    } = useModalContext();

    const [username, setUsername] = useState();
    const [qrGenerated, setQrStatus] = useState(false);
    const [userkey, setKey] = useState();
    const [html, setHTML] = useState('');
    const socket = io('http://127.0.0.1:3005'); // ip do back-end

    const initIns = async (e) => {
        e.preventDefault();

        // cria uma nova instância de usuário
        let data = await InitiateInstance({
            key: username,
            token: process.env.REACT_APP_SECRET_TOKEN,
            userToken: localStorage.getItem('userToken'),
        });

        let parser = new DOMParser();

        var doc = parser.parseFromString(data.data.qrdata, 'text/html');
        var qrcode = doc.getElementById('qrcode_box').src;

        setKey(data.data.key);
        setQrStatus(true);
        setHTML(qrcode);
    };

    useEffect(() => {
        // Função para escutar o websocket enviado do backend, se o socket contendo a key for recebido, significa que o usuário escaneou o QRCODE
        socket.on('connect', () => console.log(socket.id));
        socket.on('connect_error', () => {
            setTimeout(() => socket.connect(), 3005); // conecta no socket do backend
        });

        socket.on('key', (data) => {
            if (data == userkey) {
                // se a key recebida pelo socket for igual a key já registrada pelo usuário na função initIns, => (é possivel do usuário receber multiplos sockets de multiplos usuáruios fazendo login ao mesmo tempo)
                closeModal(); // fecha o modal do QRCODE e dá reload na página
                window.location.reload(false);
            }
        });
    }, [userkey]); // esse hook é disparado toda vez que o valor do estado userKey é alterado

    return (
        <Container>
            <Background onClick={props.onClick} />
            <ModalBox>
                <h5>Conecte-se ao Whatsapp</h5>
                {qrGenerated ? (
                    <p>
                        Escaneie o QR code utlizando a função dispostivos do seu Whatsapp para conectar sua empresa, o
                        Atendezap está aguardando sua conexão
                    </p>
                ) : (
                    <p>Insira o nome da sua empresa para gerar QR code de acesso.</p>
                )}
                <form onSubmit={(e) => initIns(e)}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Seu nome.."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {qrGenerated && (
                        <>
                            <img src={html} />
                            {/** renderiza o qr code, a partir do momento em que o qrcode for escaneado, os dados do usuário serão salvos no banco de dados */}
                        </>
                    )}
                    <input type="submit" className="submitButton" />
                </form>
            </ModalBox>
        </Container>
    );
}

export default QRCodeModal;
