import { NodeResizer } from '@reactflow/node-resizer';
import React from 'react';
import { Handle, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import { BsWhatsapp } from '../../../styles/Icons';
import { Container, Header, WhatsappLogo, Text, MiniChat, Message, ContentDiv } from './styles';
import { useDispatch } from 'react-redux';
import { changeNode, undoChange } from '../../../redux/flows/nodeSlice';
import { CiImageOn } from 'react-icons/ci';
import { RxVideo } from 'react-icons/rx';
import { FiFile } from 'react-icons/fi';
import { MdOutlineKeyboardVoice } from 'react-icons/md';

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ContetntSquare = ({ selected, data, id }) => {
    const dispatch = useDispatch();

    if (selected) {
        dispatch(changeNode({ id, type: 'content' }));
    } else {
        dispatch(undoChange());
    }

    return (
        <Container /* onClick={handleClick} */>
            <Header>
                <WhatsappLogo>
                    <BsWhatsapp size={25} fill="#FFF" />
                </WhatsappLogo>
                <Text>
                    <p>enviar whatsapp</p>
                    <sub>Conteúdo</sub>
                </Text>
            </Header>
            <MiniChat className="text-center mt-6">
                {data && (
                    <>
                        {data.range ? (
                            <>
                                {data.range.map((con) => {
                                    return (
                                        <Message>
                                            Digitando em {con.value} seg...{' '}
                                            <sub>
                                                {new Date().toLocaleTimeString('pt-BR', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                })}
                                            </sub>
                                        </Message>
                                    );
                                })}
                            </>
                        ) : (
                            <div></div>
                        )}
                        {data.image ? (
                            <>
                                {data.image.map((img) => {
                                    return (
                                        <Message>
                                            Imagem
                                            <CiImageOn />
                                            <sub>
                                                {new Date().toLocaleTimeString('pt-BR', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                })}
                                            </sub>
                                        </Message>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                        {data.video ? (
                            <>
                                {data.video.map((conn) => {
                                    return (
                                        <Message>
                                            Video Salvo
                                            <RxVideo />
                                            <sub>
                                                {new Date().toLocaleTimeString('pt-BR', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                })}
                                            </sub>
                                        </Message>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                        {data.file ? (
                            <>
                                {data.file.map((conn) => {
                                    return (
                                        <Message>
                                            Arquivo Salvo
                                            <FiFile />
                                            <sub>
                                                {new Date().toLocaleTimeString('pt-BR', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                })}
                                            </sub>
                                        </Message>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                        {data.audio ? (
                            <>
                                {data.audio.map((conn) => {
                                    return (
                                        <Message>
                                            Auidio Salvo
                                            <MdOutlineKeyboardVoice />
                                            <sub>
                                                {new Date().toLocaleTimeString('pt-BR', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                })}
                                            </sub>
                                        </Message>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                        {data.text ? (
                            <>
                                {data.text.map((conn) => {
                                    return (
                                        <Message>
                                            {conn.value}{' '}
                                            <sub>
                                                {new Date().toLocaleTimeString('pt-BR', {
                                                    hour: 'numeric',
                                                    minute: 'numeric',
                                                })}
                                            </sub>
                                        </Message>
                                    );
                                })}
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </MiniChat>
            <NodeResizer
                minHeight={200}
                minWidth={200}
                isVisible={selected}
                lineClassName="border-blue-400"
                handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
            />
            <Handle
                id="right"
                type="source"
                position={Position.Right}
                className="-right-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
            />

            <Handle
                id="left"
                type="source"
                position={Position.Left}
                className="-left-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
            />

            <Handle
                id="top"
                type="source"
                position={Position.Top}
                className="-top-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
            />

            <Handle
                id="bootom"
                type="source"
                position={Position.Bottom}
                className="-bottom-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80"
            />
        </Container>
    );
};

export default ContetntSquare;
