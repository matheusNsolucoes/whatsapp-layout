import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useModalContext } from '../../modal.context';
import {
    Container,
    Background,
    ModalBox,
    ContactNameInput,
    SaveContactBtn,
    ContactEmailInput,
    ContainerLeftPanel,
    ContainerLeftPanelTopPart,
    ContainerLeftPanelAvatar,
    ContainerLeftPanelUserDetails,
    ButtonStartChat,
    ContainerRihtPanel,
    ContainerRightPanelFullName,
    ContentDetail,
    ContentDetailHeader,
    ContentDetailHeaderLabel,
    ContentDetailHeaderLabelAdd,
    ContentDetailItemList,
    ContentDetailItemListItem,
    ItemListItemSpan,
    TagSelector,
    NameInput,
} from './styles';
import InputMask from 'react-input-mask';
import { AiOutlineInfoCircle, BsCheck2, IoClose } from '../../styles/Icons';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { AiFillEdit, AiOutlineClockCircle } from 'react-icons/ai';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import defaultPic from '../../assets/images/defaultPic.jpg';
import {
    createTagForContact,
    createTagForUser,
    deleteTagForContact,
    getAllTags,
    getMessages,
    getCurrentChat,
    updateContactName,
} from '../../services/api';
import { convertoToFullStringDate, convertToFullDate, convertToPhone } from '../../utils/conversions';
import { SearchInput } from '../../pages/apps/Audience/styles';

function OpenContactModal({ number, name, contact, pfp, userIns, createdAt }) {
    const [isSelectSequence, setIsSelectSequence] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagsSelect, setTagsSelect] = useState([]);
    const [tag, setTag] = useState();
    const [tagForDelete, setTagForDelete] = useState();
    const [interactions, setInteractions] = useState(0);
    const [chatId, setChatId] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(name);
    const selectRef = useRef(null);

    const userToken = localStorage.getItem('userToken');

    const handleTagClick = (tagName, tag) => {
        if (!selectedTags.includes(tagName)) {
            setSelectedTags([...selectedTags, tagName]);
            setTag(tag);
        }
    };

    const handleAddTag = useCallback(async () => {
        await createTagForContact(userToken, number, tag);
    }, [tag, selectedTags]);

    const handleRemove = (tagName) => {
        setSelectedTags((tags) => tags.filter((tag) => tag !== tagName));
    };

    const handleRemoveTags = async (tagName) => {
        tagsSelect.map((tag) => {
            tag.tags.map((item) => {
                if (item.name === tagName) setTagForDelete(item);
            });
        });

        await deleteTagForContact(userToken, number, tagForDelete);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsSelectSequence(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    const {
        modalState: { message, visible },
        closeModal,
    } = useModalContext();

    useEffect(() => {
        const getChatId = async () => {
            let data = await getCurrentChat({ from: userIns, to: number });
            setChatId(data.data._id);
        };

        getChatId();
    });

    useEffect(() => {
        const getAlltagsforUser = async () => {
            const tags = await getAllTags(userToken);
            setTagsSelect(tags);
            tags.map((tag) => {
                tag.tags.map((item) => {
                    // jooj
                });
            });
        };
        getAlltagsforUser();
    }, []);

    useEffect(() => {
        const getInfo = async () => {
            let lengthData = await handleGetMsgs();
            setInteractions(lengthData.length);
        };
        getInfo();
    }, [chatId]);

    const handleGetMsgs = async () => {
        if (chatId !== null) {
            let data = await getMessages({ chatId: chatId });

            return data.data;
        }
    };

    const updateName = async () => {
        await updateContactName({ name: userName, number: number });
        setIsEditing(!isEditing);
    };

    return (
        <Container>
            <Background onClick={() => closeModal()} />
            <ModalBox>
                <ContainerLeftPanel>
                    <div style={{ display: 'block' }}>
                        <ContainerLeftPanelTopPart>
                            <div>:</div>
                            <ContainerLeftPanelAvatar
                                src={pfp}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = defaultPic;
                                }}
                            />
                        </ContainerLeftPanelTopPart>
                        <ContainerLeftPanelUserDetails>
                            <MdOutlinePhoneInTalk size={15} />
                            Telefone: {convertToPhone(number)}
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <AiOutlineClockCircle size={15} />
                            Tempo do assinante: {convertToFullDate(createdAt)}
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <BsPeopleFill size={15} />
                            Interações: {interactions}
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <div>Código de Indicação: 122552458</div>
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <div># Nenhum atendente atribuído</div>
                        </ContainerLeftPanelUserDetails>
                    </div>
                    <ButtonStartChat href={`${userIns}/apps/live-chat/${number}`}>Iniciar bate-papo</ButtonStartChat>
                </ContainerLeftPanel>
                <ContainerRihtPanel>
                    <ContainerRightPanelFullName>
                        {isEditing ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                }}>
                                <NameInput
                                    type="text"
                                    onChange={(e) => setUserName(e.target.value)}
                                    defaultValue={userName}
                                />
                                <BsCheck2 size={20} style={{ cursor: 'pointer' }} onClick={() => updateName()} />
                                <IoClose
                                    size={20}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setIsEditing(!isEditing)}
                                />
                            </div>
                        ) : (
                            <>
                                <div style={{ display: 'block' }}>{userName}</div>
                                <div style={{ cursor: 'pointer' }} onClick={() => setIsEditing(!isEditing)}>
                                    <AiFillEdit size={20} />
                                </div>
                            </>
                        )}
                    </ContainerRightPanelFullName>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>Etiquetas</ContentDetailHeaderLabel>
                            {isSelectSequence === 'tags' ? (
                                <TagSelector ref={selectRef}>
                                    <select multiple>
                                        {tagsSelect.map((items) => {
                                            return items.tags.map((tag, index) => (
                                                <option
                                                    key={index}
                                                    value={tag.name}
                                                    onClick={() => {
                                                        handleTagClick(tag.name, tag);
                                                        handleAddTag();
                                                    }}>
                                                    {tag.name}
                                                </option>
                                            ));
                                        })}
                                    </select>
                                </TagSelector>
                            ) : (
                                <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('tags')}>
                                    +Adicionar
                                </ContentDetailHeaderLabelAdd>
                            )}
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            {selectedTags.map((tagName) => (
                                <ContentDetailItemListItem>
                                    <ItemListItemSpan key={tagName}>{tagName}</ItemListItemSpan>
                                    <IoCloseCircleOutline size={15} />
                                </ContentDetailItemListItem>
                            ))}
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>Sequências</ContentDetailHeaderLabel>
                            {isSelectSequence === 'sequence' ? (
                                <div ref={selectRef}>
                                    <select>
                                        <option value="3">teste</option>
                                        <option value="3">jooj</option>
                                        <option value="3">frelf</option>
                                    </select>
                                </div>
                            ) : (
                                <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('sequence')}>
                                    +Adicionar
                                </ContentDetailHeaderLabelAdd>
                            )}
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            {selectedTags.map((tagName) => (
                                <ContentDetailItemListItem>
                                    <ItemListItemSpan>Retornar</ItemListItemSpan>
                                    <IoCloseCircleOutline size={15} />
                                </ContentDetailItemListItem>
                            ))}
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>Campanhas</ContentDetailHeaderLabel>
                            {isSelectSequence === 'campaign' ? (
                                <div ref={selectRef}>
                                    <select>
                                        <option value="3">teste</option>
                                    </select>
                                </div>
                            ) : (
                                <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('campaign')}>
                                    +Adicionar
                                </ContentDetailHeaderLabelAdd>
                            )}
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            <ContentDetailItemListItem>
                                <ItemListItemSpan>Retornar</ItemListItemSpan>
                                <IoCloseCircleOutline size={15} />
                            </ContentDetailItemListItem>
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>Campos Personalizados</ContentDetailHeaderLabel>
                            {isSelectSequence === 'fields' ? (
                                <div ref={selectRef}>
                                    <select>
                                        <option value="3">teste</option>
                                    </select>
                                </div>
                            ) : (
                                <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('fields')}>
                                    +Adicionar
                                </ContentDetailHeaderLabelAdd>
                            )}{' '}
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            <ContentDetailItemListItem>
                                <ItemListItemSpan>Retornar</ItemListItemSpan>
                                <IoCloseCircleOutline size={15} />
                            </ContentDetailItemListItem>
                        </ContentDetailItemList>
                    </ContentDetail>
                </ContainerRihtPanel>
            </ModalBox>
        </Container>
    );
}

export default OpenContactModal;
