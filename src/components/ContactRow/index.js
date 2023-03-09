import React from 'react';
import { Container, ContactName, ContactPfp, EndColumn, NewMessages } from './styles';
import { BsCheckAll } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import defaultPic from '../../assets/images/defaultPic.jpg';

function ContactRow(props) {
    return (
        <Container onClick={props.onClick} selected={props.selectedNumber === props.number ? 'selected' : 'not'}>
            {console.log(props.result[0])}
            <ContactPfp
                src={props.pfp !== null ? props.pfp : defaultPic}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = defaultPic;
                }}
            />
            <ContactName>
                <p>{props.name}</p>
                {props.result !== [] && (
                    <small>
                        {(props.result[0]?.type === 'text' && (
                            <span>
                                <BsCheckAll /> {props.result[0]?.message}
                            </span>
                        )) ||
                            (props.result[0]?.type === 'file' && (
                                <>
                                    <AiFillCamera /> Imagem
                                </>
                            )) ||
                            (props.result[0]?.type == 'quotedText' && (
                                <span>
                                    <BsCheckAll /> {props.result[0]?.message}
                                </span>
                            ))}
                    </small>
                )}
            </ContactName>
            <EndColumn>
                <sub>{props.result[0]?.date}</sub>
                {props.result[0]?.unreadMessages > 0 && <NewMessages>{props.result[0]?.unreadMessages}</NewMessages>}
            </EndColumn>
        </Container>
    );
}

export default ContactRow;
