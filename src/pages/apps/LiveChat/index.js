import React, { useEffect, useRef, useState } from 'react';
import {
    ContactPfp,
    ContactName,
    Container,
    ChatMain,
    ChatInputContainer,
    ContactTopBar,
    MessageContainer,
    Chat,
    Sentinel,
    MessageBtn,
    SendFileInput,
    ClipIcon,
    DocumentContainer,
    QuotedMessageContainer,
    NormalMessage,
    Quoted,
    ContactsList,
    Menu,
    VideoContainer,
    ImageMessage,
    ImagePreview,
    PreviewBackground,
    AudioMessage,
    SearchBox,
    SearchInput,
    ContactHeader,
    MyProfile,
    SearchContainer,
    Contacts,
    NewMessages,
    EndColumn,
    EmptyChat,
    RecordBtn,
    TrashBtn,
    OptionsIcon,
    OptionsDropdown,
    ImageWrapper,
    ContactRow,
} from './styles';
import InputEmoji from 'react-input-emoji';
import { pdfjs } from 'react-pdf';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import { useParams, Redirect } from 'react-router-dom';
import { io } from 'socket.io-client';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import defaultPic from '../../../assets/images/defaultPic.jpg';
import { convertToDate, convertToMessageFormat, convertoToFullStringDate } from '../../../utils/conversions';
import {
    getContacts,
    getCurrentChat,
    getMessages,
    sendMessage,
    uploadFile,
    sendImage,
    sendDoc,
    sendVid,
    sendAudio,
    getUserPicture,
    getInfo,
    getContactLastMessage,
    blockContact,
    clearChat,
    getGroups,
    getContactPic,
    addNewContact,
    getAllChats,
} from '../../../services/api';
import {
    BsImage,
    IoDocument,
    BsCameraVideoFill,
    MdDownloadForOffline,
    BsFillPlayFill,
    BsFillPauseFill,
    BsCheckAll,
    BiSearchAlt,
    AiFillCamera,
} from '../../../styles/Icons';
import AudioPlayer from 'react-h5-audio-player';
import './styles.css';
import ContactInfoPage from './ContactInfoPage';
import FilePreviewPage from './FilePreviewPage';
import { useDetectOutsideClick } from '../../../utils/checkOutsideClick';
import { Dropdown } from 'reactstrap';

function ChatPage({ match }) {
    // Referencias a elementos
    const dropdownRef = useRef(); // referencia o menu dropdown
    const fileinput = useRef(null); // referencia o input de upload de arquivos
    const scrollRef = useRef(); // referencia o scroll

    // Estados auxiliares
    const recorderControls = useAudioRecorder();

    // Auxiliares de rotas
    // const { userIns, chatId } = match.params;
    const userIns = match.params.userIns;
    const chatId = match.params.chatId; // usa o hook useParams do react-router para pegar os parametros passados através da URL (instância do usuário e o ID do chat selecionado)

    // Estados de controle
    const [newMessageFlag, setNewMessageFlag] = useState(false); // flag para verificar se o usuário enviou uma mensagem
    const [newContactMessageFlag, setNewContactMessageFlag] = useState(false); // flag para verificar se o usuário recebeu uma mensagem
    const [floatMenuOpen, setFloatMenuOpen] = useState(false);
    const [profileView, setProfileView] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    useDetectOutsideClick(dropdownRef, () => setDropdownOpen(false));

    // Estados de inputs
    const [message, setMessage] = useState(''); // estado que guarda o valor do input do usuário
    const [acceptedFiles, setAcceptedFiles] = useState('');
    const [caption, setCaption] = useState('');
    const [searchBox, setSearchBox] = useState('');

    // Estados de informação
    const [contacts, setContacts] = useState([]); // estado que guarda os contatos do usuário
    const [groups, setGroups] = useState([]);
    const [chatMsgs, setChatMsgs] = useState([]); // estado que guarda o histórico de mensagens com o contato selecionado
    const [currentPage, setCurrentPage] = useState(-15); // usado para otimizar o carregamento do chat
    const [fileUrl, setFileUrl] = useState('');
    const [file, setFile] = useState();
    const [interactions, setInteractions] = useState(0);

    const [contactsMessages, setContactsMessages] = useState([
        { contact: '', message: '', date: '', type: '', unreadMessages: 0 },
    ]);

    const [insInfo, setInsInfo] = useState({ username: '', userId: '', userPhone: '', userPicture: '' });
    const [selectedContact, setSelectedContact] = useState({
        chatId: 'main',
        contactId: '',
        contactPfp: '',
        contactName: '',
        subscriptionTime: '',
        contactEmail: '',
        contactStatus: '',
        isGroup: false,
        participants: [],
    }); // estado que guarda as informações do contato selecionado

    // hook chamado para pegar as mensagens do contato selecionado e grava-las no state chatMsgs
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await handleGetMsgs();
            setInteractions(data.length);

            if (data.length > 15) {
                setChatMsgs(data.slice(currentPage));
            } else {
                setChatMsgs(data);
            }
        };
        getMessageDetails();
    }, [selectedContact, selectedContact.chatId, newMessageFlag, currentPage, newContactMessageFlag]); // o hook é disparado toda vez que o usuário seleciona um chat ou uma mensagem é enviada ou recebida

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setCurrentPage((currentPageInsideState) => currentPageInsideState - 20);
            }
        });

        intersectionObserver.observe(document.querySelector('.sentinel'));

        return () => {
            intersectionObserver.disconnect();
        };
    }, []);

    // esse hook é disparado no primeiro load da página e serve para buscar a lista de contatos e grupos do usuário
    useEffect(() => {
        const getAllContacts = async () => {
            let contactData = await getContacts({
                userToken: localStorage.getItem('userToken'),
                userId: userIns,
            });

            let groupData = await getGroups({
                userId: userIns,
            });

            setContacts(contactData);
            setGroups(groupData);
        };
        getAllContacts();
    }, []);

    // hook que busca a foto de perfil dos grupos do usuário
    useEffect(() => {
        const userPicture = () => {
            if (userIns !== '') {
                groups.forEach(async (group) => {
                    let groupPicture = await getContactPic({
                        userId: userIns,
                        contactNumber: group.id,
                    });

                    group.profilePicture = groupPicture;
                });
            }
            setNewMessageFlag((prev) => !prev);
        };
        userPicture();
    }, [groups, contacts]);

    // hook usado para monitar a conexão de web sockets com o backend
    useEffect(() => {
        let socket = io.connect(process.env.REACT_APP_URL); // socket de conexão com o back-end

        const saveReceiverMsg = async (data) => {
            // ao receber a mensagem vinda do socket
            if (!contacts.some((contact) => contact.number === data.from)) {
                let contactData = await getAllChats({ userId: userIns, from: data.from });

                addNewContact({
                    phone_number: contactData.data[0].members[1],
                    contact_name: contactData.data[0].members[1],
                    user_token: localStorage.getItem('userToken'),
                    user_id: userIns,
                    email: '',
                });

                setContacts((contacts) => [
                    ...contacts,
                    {
                        pfp: '',
                        number: contactData.data[0].members[1],
                        contact: contactData.data[0].members[1],
                        email: '',
                        status: '',
                        date: '',
                    },
                ]);
            }
            setNewContactMessageFlag((prev) => !prev);
        };

        // hook que recebe as requisições de socket do servidor (os sockets mandam as mensagem recebidas pelo usuário)
        socket.on('message', (data) => {
            saveReceiverMsg(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    // hook utilizado para salvar as imagens enviadas no banco de dados
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append('filename', file.name);
                data.append('file', file);

                let response = await uploadFile(data);
                setFileUrl(response.data);
            }
        };
        getImage();
    }, [file]);

    // hook usado para abrir o seletor de arquivos com filtros de determinado tipo de arquivo
    useEffect(() => {
        // abre o seletor de arquivos
        const openSelector = async () => {
            if (acceptedFiles) {
                await fileinput.current.click();
            }
        };
        openSelector();
        setAcceptedFiles('');
    }, [acceptedFiles]);

    // pega as informações da instância atual [nome, telefone, id da instância e foto de perfil]
    useEffect(() => {
        const getUserInfo = async () => {
            let data = await getInfo({ userId: userIns });

            setInsInfo({
                username: data.username,
                userId: data.userId,
                userPhone: data.userPhone,
                userPicture: data.userPicture,
            });
        };
        getUserInfo();
    }, []);

    useEffect(() => {
        const getLast = () => {
            contacts?.map(async (contact) => {
                if (contact !== null) {
                    let data = await getContactLastMessage({
                        from: userIns,
                        to: contact.number,
                    }); // retorna a ultima mensagem que o contato enviou, este código é executado para todos os contatos da lista

                    if (data.data.lastMessage !== null) {
                        // se os dados não forem vazios
                        if (
                            !contactsMessages.some((number) => number.contact === contact.number) // se o numéro do contato não está no state de ultimas mensagens
                        ) {
                            setContactsMessages((contactsMessages) => [
                                // salva a ultima mensagem do contato na lista
                                ...contactsMessages,
                                {
                                    contact: contact.number,
                                    message: data.data.lastMessage.text,
                                    date: convertToDate(data.data.lastMessage.date),
                                    type: data.data.lastMessage.type,
                                    unreadMessages: data.data.unreadMessagesCount,
                                },
                            ]);
                        } else {
                            // caso o contato já esteja
                            let targetIndex = contactsMessages.findIndex((number) => number.contact === contact.number);

                            if (targetIndex !== -1) {
                                // sobrescreve os valores com a nova mensagem recebida
                                let temporaryarray = contactsMessages.slice();
                                temporaryarray[targetIndex].message = data.data.lastMessage.text;
                                temporaryarray[targetIndex].unreadMessages = data.data.unreadMessagesCount;
                                temporaryarray[targetIndex].date = convertToDate(data.data.lastMessage.date);
                                setContactsMessages(temporaryarray);
                            }
                        }
                    }
                }
            });
        };
        getLast();
    }, [contacts, newContactMessageFlag]); // esse hook é disparado sempre que o usuário recebe uma nova mensagem ou a lista de contatos é atualizada.

    const handleSaveMsg = async (chatId, from, to, text, type, caption) => {
        // função usada para salvar as mensagens tanto do sender quanto do receiver
        let messageValue = {};

        if (file) {
            // se o usuário estiver enviando um arquivo
            messageValue = {
                chatId: chatId,
                from: from,
                to: to,
                text: fileUrl,
                caption: caption,
                type: 'file',
            };
        } else {
            messageValue = {
                chatId: chatId,
                from: from,
                to: to,
                text: text,
                type: 'text',
            };
        }

        setFile();
        setFileUrl('');
        setMessage('');

        await sendMessage(messageValue); // salve a mensagem

        setNewMessageFlag((prev) => !prev);
    };

    const handleGetChat = async (number, pfp, name, time, email, status, isGroup, participants) => {
        // essa função serve para buscar as informações do chat selecionado
        if (userIns !== null && number !== '') {
            let data = await getCurrentChat({ from: userIns, to: number });

            setSelectedContact({
                chatId: data.data._id,
                contactId: number,
                contactPfp: pfp,
                contactName: name,
                subscriptionTime: time,
                contactEmail: email,
                contactStatus: status,
                isGroup: isGroup,
                participants: participants,
            });

            setFile();

            setIsOpen(false);
            setProfileView(false);
            setCurrentPage(-15);
            setAcceptedFiles('');

            let targetIndex = contactsMessages.findIndex((index) => index.contact === number);

            if (targetIndex !== -1) {
                // sobrescreve os valores com a nova mensagem recebida
                let temporaryarray = contactsMessages.slice();
                temporaryarray[targetIndex].unreadMessages = 0;
                setContactsMessages(temporaryarray);
            }
        }
    };

    async function handleGetMsgs() {
        // função usada para buscar o histórico de mensagens do usuário com um determinado contato
        if (selectedContact.chatId !== null) {
            let data = await getMessages({ chatId: selectedContact.chatId });

            return data.data;
        }
    }

    const handleFileMessage = async (caption) => {
        // envia mensagens de documentos/imagens, audios, documentos em geral
        const data = new FormData();
        data.append('file', file);
        data.append('id', selectedContact.contactId);
        data.append('caption', caption);

        switch (file.type.split('/')[0]) {
            case 'image':
                await sendImage({ from: userIns, data: data });
                break;
            case 'application':
                await sendDoc({ from: userIns, data: data });
                break;
            case 'video':
                await sendVid({ from: userIns, data: data });
                break;
            case 'audio':
                await sendAudio({ from: userIns, data: data });
                break;
            default:
                console.log('[!!] Erro no envio de arquivo');
                break;
        }

        handleSaveMsg(selectedContact.chatId, userIns, selectedContact.contactId, message, 'file', caption);

        fileinput.current.value = '';
        setFile();
        setIsOpen(false);
        setNewMessageFlag((prev) => !prev);
    };

    const onFileChange = (e) => {
        // sempre que o usuário selecionar um novo arquivo, salva as caracteristicas do arquivo nos estados:
        setFile(e.target.files[0]);
        setFileUrl(e.target.files[0].name);

        setIsOpen(true);
    };

    const closeImagePreview = () => {
        // fecha o preview de imagens
        fileinput.current.value = '';
        setIsOpen(false);
        setAcceptedFiles('');
    };

    const handleEnter = (text) => {
        // função que envia a mensagem digitada pelo usuário caso ele aperte ENTER
        handleSaveMsg(selectedContact.chatId, userIns, selectedContact.contactId, text);
    };

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };

    const closeView = () => {
        setProfileView(!profileView);
    };

    async function handleSendAudio(blob) {
        try {
            let audioUrl;

            var blobFile = new File([blob], `${URL.createObjectURL(blob).split('/').pop()}.mp3`, { type: 'audio/mp3' }); // converte o arquivo blob em um arquivo de tipo file

            // faz o upload do arquivo de audio pro banco de dados
            const uploadData = new FormData();
            uploadData.append('filename', blobFile.name);
            uploadData.append('file', blobFile);

            let uploadRes = await uploadFile(uploadData);
            audioUrl = uploadRes.data;

            // envia a mensagem de audio utilizando a api do whatsapp
            const sendAudioMessage = new FormData();
            sendAudioMessage.append('file', blobFile);
            sendAudioMessage.append('id', selectedContact.contactId);
            sendAudioMessage.append('caption', caption);

            await sendAudio({ from: userIns, data: sendAudioMessage });

            // salva a mensagem para ser renderizada dentro do chat
            await sendMessage({
                chatId: selectedContact.chatId,
                from: userIns,
                to: selectedContact.contactId,
                text: audioUrl,
                caption: '',
                type: 'file',
            });
        } catch (err) {
            console.log('[!!] Erro durante envio de audio - ' + err);
        }

        setNewMessageFlag((prev) => !prev);
    }

    const clearCurrentChat = async () => {
        await clearChat({ from: userIns, to: selectedContact.contactId });

        setNewMessageFlag((prev) => !prev);
    };

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <Container>
            <ContactsList>
                <ContactHeader>
                    <MyProfile>
                        <ContactPfp
                            src={insInfo.userPicture}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = defaultPic;
                            }}
                        />
                    </MyProfile>
                    <SearchContainer>
                        <SearchBox>
                            <BiSearchAlt />
                            <SearchInput
                                onChange={(e) => setSearchBox(e.target.value)}
                                placeholder="Pesquisar uma conversa..."
                                type="text"
                            />
                        </SearchBox>
                        <hr style={{ marginBottom: '0' }} />
                    </SearchContainer>
                </ContactHeader>
                <Contacts>
                    {contacts // exibe os contatos do usuário na tela
                        ?.filter((contact) => contact.contact?.toLowerCase().includes(searchBox?.toLowerCase()))
                        .map((contact, index) => {
                            var result = contactsMessages.filter((obj) => {
                                return obj.contact === contact.number;
                            });

                            return (
                                <ContactRow
                                    key={index}
                                    onClick={() =>
                                        handleGetChat(
                                            contact.number,
                                            contact.pfp,
                                            contact.contact,
                                            convertoToFullStringDate(contact.date),
                                            contact.email,
                                            contact.status,
                                            false
                                        )
                                    }>
                                    <ContactPfp
                                        src={contact.pfp !== null ? contact.pfp : defaultPic}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = defaultPic;
                                        }}
                                    />
                                    <ContactName>
                                        <p>{contact.contact}</p>
                                        {result !== [] && (
                                            <small>
                                                {(result[0]?.type === 'text' && (
                                                    <span>
                                                        <BsCheckAll /> {result[0]?.message}
                                                    </span>
                                                )) ||
                                                    (result[0]?.type === 'file' && (
                                                        <>
                                                            <AiFillCamera /> Imagem
                                                        </>
                                                    )) ||
                                                    (result[0]?.type == 'quotedText' && (
                                                        <span>
                                                            <BsCheckAll /> {result[0]?.message}
                                                        </span>
                                                    ))}
                                            </small>
                                        )}
                                    </ContactName>
                                    <EndColumn>
                                        <sub>{result[0]?.date}</sub>
                                        {result[0]?.unreadMessages > 0 && (
                                            <NewMessages>{result[0]?.unreadMessages}</NewMessages>
                                        )}
                                    </EndColumn>
                                </ContactRow>
                            );
                        })}
                    {groups // exibe os grupos do usuário na tela
                        ?.filter((group) => group.subject?.toLowerCase().includes(searchBox?.toLowerCase()))
                        .map((group, index) => {
                            var result = contactsMessages.filter((obj) => {
                                return obj.contact === group.id;
                            });

                            return (
                                <ContactRow
                                    key={index}
                                    onClick={() =>
                                        handleGetChat(
                                            group.id,
                                            group.profilePicture,
                                            group.subject,
                                            '',
                                            '',
                                            group.desc || '',
                                            true,
                                            group.participants
                                        )
                                    }>
                                    <ContactPfp
                                        src={group.profilePicture !== null ? group.profilePicture : defaultPic}
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = defaultPic;
                                        }}
                                    />
                                    <ContactName>
                                        <p>{group.subject}</p>
                                        {result !== [] && (
                                            <small>
                                                {(result[0]?.type === 'text' && (
                                                    <span>
                                                        <BsCheckAll /> {result[0]?.message}
                                                    </span>
                                                )) ||
                                                    (result[0]?.type === 'file' && (
                                                        <>
                                                            <AiFillCamera /> Imagem
                                                        </>
                                                    )) ||
                                                    (result[0]?.type == 'quotedText' && (
                                                        <span>
                                                            <BsCheckAll /> {result[0]?.message}
                                                        </span>
                                                    ))}
                                            </small>
                                        )}
                                    </ContactName>
                                    <EndColumn>
                                        <sub>{result[0]?.date}</sub>
                                        {result[0]?.unreadMessages > 0 && (
                                            <NewMessages>{result[0]?.unreadMessages}</NewMessages>
                                        )}
                                    </EndColumn>
                                </ContactRow>
                            );
                        })}
                </Contacts>
            </ContactsList>
            <ChatMain>
                <ContactTopBar>
                    <div
                        onClick={closeView}
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                        }}>
                        <ContactPfp
                            src={selectedContact.contactPfp !== null ? selectedContact.contactPfp : defaultPic}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = defaultPic;
                            }}
                        />
                        <ContactName>{selectedContact.contactName}</ContactName>
                    </div>
                    <OptionsIcon onClick={() => setDropdownOpen(!isDropdownOpen)} />
                    {isDropdownOpen && (
                        <OptionsDropdown ref={dropdownRef}>
                            <ul>
                                <li onClick={closeView}>Dados do usuário</li>
                                <li onClick={clearCurrentChat}>Apagar conversa</li>
                                <li
                                    onClick={() =>
                                        blockContact({
                                            userId: userIns,
                                            contactNumber: selectedContact.contactId,
                                        })
                                    }>
                                    Bloquear
                                </li>
                                <li>Denunciar usuário</li>
                            </ul>
                        </OptionsDropdown>
                    )}
                </ContactTopBar>
                {isOpen && file && (
                    <FilePreviewPage
                        type={file.type}
                        fileUrl={fileUrl}
                        closePreview={closeImagePreview}
                        handleSend={handleFileMessage}
                    />
                )}
                {profileView && (
                    <ContactInfoPage
                        picture={selectedContact.contactPfp}
                        name={selectedContact.contactName}
                        number={selectedContact.contactId}
                        userIns={userIns}
                        subscriptionTime={selectedContact.subscriptionTime}
                        email={selectedContact.contactEmail}
                        status={selectedContact.contactStatus}
                        interactions={interactions}
                        closeView={closeView}
                        isGroup={selectedContact.isGroup}
                        participants={selectedContact.participants}
                    />
                )}
                <Chat ref={scrollRef}>
                    <Sentinel className="sentinel" />
                    {chatMsgs.length <= 0 && <EmptyChat>Sem histórico de conversas!</EmptyChat>}
                    {chatMsgs.slice(currentPage).map((msg, index) => {
                        return (
                            <section key={index}>
                                {userIns === msg.from ? (
                                    <MessageContainer key={index}>
                                        {msg.type === 'quotedText' ? (
                                            <QuotedMessageContainer>
                                                <Quoted>
                                                    <b>Você</b>
                                                    <p>{msg.quotedMessage}</p>
                                                </Quoted>
                                                <p>{msg.text}</p>
                                                <sub>
                                                    {convertToMessageFormat(msg.date)}
                                                    <BsCheckAll size={15} />
                                                </sub>
                                            </QuotedMessageContainer>
                                        ) : (
                                            <>
                                                {msg.type === 'file' ? (
                                                    <>
                                                        <FileMessage
                                                            message={{
                                                                msg: msg,
                                                                pfp: insInfo.userPicture,
                                                            }}
                                                        />
                                                        {msg.caption != '' && <p>{msg.caption}</p>}
                                                    </>
                                                ) : (
                                                    <NormalMessage>
                                                        <p>{msg.text}</p>
                                                        <sub>
                                                            {convertToMessageFormat(msg.date)}
                                                            <BsCheckAll size={15} />
                                                        </sub>
                                                    </NormalMessage>
                                                )}
                                            </>
                                        )}
                                    </MessageContainer>
                                ) : (
                                    <MessageContainer receiver key={index}>
                                        {msg.type === 'quotedText' ? (
                                            <QuotedMessageContainer>
                                                <Quoted>
                                                    <b>Você</b>
                                                    <p>{msg.quotedMessage}</p>
                                                </Quoted>
                                                <p>{msg.text}</p>
                                                <sub>{convertToMessageFormat(msg.date)}</sub>
                                            </QuotedMessageContainer>
                                        ) : (
                                            <>
                                                {msg.type === 'file' ? (
                                                    <>
                                                        <FileMessage
                                                            receiver
                                                            message={{
                                                                msg: msg,
                                                                pfp: selectedContact.contactPfp,
                                                            }}
                                                        />
                                                        <p>{msg.caption}</p>
                                                    </>
                                                ) : (
                                                    <NormalMessage receiver>
                                                        <p>{msg.text}</p>
                                                        <sub>{convertToMessageFormat(msg.date)} </sub>
                                                    </NormalMessage>
                                                )}
                                            </>
                                        )}
                                    </MessageContainer>
                                )}
                            </section>
                        );
                    })}
                    <AlwaysScrollToBottom />
                </Chat>
                <ChatInputContainer>
                    {!recorderControls.isRecording && (
                        <>
                            <Menu>
                                <FloatingMenu slideSpeed={500} direction="up" spacing={10} isOpen={floatMenuOpen}>
                                    <MainButton
                                        iconResting={<ClipIcon size={30} />}
                                        iconActive={<ClipIcon size={30} />}
                                        onClick={() => setFloatMenuOpen(!floatMenuOpen)}
                                        background="transparent"
                                        style={{ boxShadow: 'none' }}
                                        size={30}
                                    />
                                    <ChildButton
                                        icon={<BsImage size={20} color="#FFFFFF" />}
                                        size={40}
                                        background="#BF59CF"
                                        onClick={() => setAcceptedFiles('.jpg, .jpeg, .png')}
                                        style={{ boxShadow: 'none' }}
                                    />
                                    <ChildButton
                                        icon={<BsCameraVideoFill size={20} color="#FFFFFF" />}
                                        size={40}
                                        background="#EC407A"
                                        onClick={() => setAcceptedFiles('.mp4, .mov')}
                                        style={{ boxShadow: 'none' }}
                                    />
                                    <ChildButton
                                        icon={<IoDocument size={20} color="#FFFFFF" />}
                                        size={40}
                                        background="#5F66CD"
                                        onClick={() => setAcceptedFiles('.pdf, .doc, .zip, .rar, .mp3, .wav')}
                                        style={{ boxShadow: 'none' }}
                                    />
                                </FloatingMenu>
                            </Menu>
                            <SendFileInput
                                type="file"
                                id="fileinput"
                                accept={acceptedFiles}
                                ref={fileinput}
                                onChange={(e) => onFileChange(e)}
                            />
                            <InputEmoji
                                value={message}
                                onChange={setMessage}
                                onEnter={handleEnter}
                                cleanOnEnter
                                borderRadius={12}
                                theme="light"
                                placeholder="Digite uma mensagem.."
                            />
                            {message && !recorderControls.isRecording ? (
                                <MessageBtn
                                    size={30}
                                    onClick={() =>
                                        handleSaveMsg(
                                            selectedContact.chatId,
                                            userIns,
                                            selectedContact.contactId,
                                            message
                                        )
                                    }
                                />
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                    {recorderControls.isRecording ? (
                        <TrashBtn size={20} onClick={recorderControls.stopRecording} />
                    ) : (
                        <></>
                    )}
                    {!message && !recorderControls.isRecording && (
                        <RecordBtn size={20} onClick={() => recorderControls.startRecording()} />
                    )}

                    <AudioRecorder
                        onRecordingComplete={(blob) => handleSendAudio(blob)}
                        recorderControls={recorderControls}
                    />
                </ChatInputContainer>
            </ChatMain>
        </Container>
    );
}

const FileMessage = ({ message }) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const [fullImageView, setFullImageView] = useState(false);

    const handleDownloadFile = (url) => {
        window.open(`${url}`);
    };

    const openImageFullPreview = (e) => {
        setPreviewUrl(e !== '' ? e : '');
        setFullImageView(!fullImageView);
    };

    return (
        <>
            {fullImageView && (
                <ImagePreview>
                    <img src={previewUrl} alt={message.msg?.text} />
                    <PreviewBackground onClick={() => openImageFullPreview()} />
                </ImagePreview>
            )}
            {['.pdf', '.doc', '.rar', '.zip'].some((el) => message.msg?.text?.includes(el)) && (
                <DocumentContainer
                    onClick={() => handleDownloadFile(`${process.env.REACT_APP_URL}${message.msg.text}`)}>
                    <IoDocument size={30} fill="#F34646" />
                    <div>
                        <p>{message.msg.text.split('-')[1]}</p>
                        <p>{message.msg.text.split('.').pop().toUpperCase()}</p>
                    </div>
                    <MdDownloadForOffline size={30} fill="#A2ABB2" />
                    <sub>
                        {convertToMessageFormat(message.msg.date)}
                        <BsCheckAll size={15} />
                    </sub>
                </DocumentContainer>
            )}
            {['.mp4', '.mov'].some((el) => message.msg?.text?.includes(el)) && (
                <VideoContainer controls>
                    <source src={`${process.env.REACT_APP_URL}${message.msg.text}`} type="video/mp4" />
                    <sub>
                        {convertToMessageFormat(message.msg.date)}
                        <BsCheckAll size={15} />
                    </sub>
                </VideoContainer>
            )}
            {['.mp3', '.wav', '-blob'].some((el) => message.msg?.text?.includes(el)) && (
                <AudioMessage>
                    <ContactPfp src={message.pfp} />
                    <AudioPlayer
                        src={`${process.env.REACT_APP_URL}${message.msg.text}`}
                        style={{
                            width: '300px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            boxShadow: 'none',
                            padding: '0',
                            margin: '0',
                            fontSize: '12px',
                        }}
                        customProgressBarSection={['DURATION', 'PROGRESS_BAR']}
                        customAdditionalControls={[]}
                        customVolumeControls={[]}
                        showSkipControls={false}
                        showJumpControls={false}
                        showFilledProgress={true}
                        autoPlay={false}
                        autoPlayAfterSrcChange={false}
                        showFilledVolume={false}
                        customIcons={{
                            play: <BsFillPlayFill />,
                            pause: <BsFillPauseFill />,
                        }}
                        layout="horizontal-reverse"
                    />
                    <sub>
                        {convertToMessageFormat(message.msg.date)}
                        <BsCheckAll size={15} />
                    </sub>
                </AudioMessage>
            )}
            {['.png', '.jpg', '.jpeg'].some((el) => message.msg?.text?.includes(el)) && (
                <ImageWrapper>
                    <ImageMessage
                        src={`${process.env.REACT_APP_URL}${message.msg.text}`}
                        alt={message.msg.text}
                        onClick={() => openImageFullPreview(`${process.env.REACT_APP_URL}${message.msg.text}`)}
                    />
                    <sub>
                        {convertToMessageFormat(message.msg.date)}
                        <BsCheckAll size={15} />
                    </sub>
                </ImageWrapper>
            )}
        </>
    );
};

export default ChatPage;
