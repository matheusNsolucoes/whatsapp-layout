import React, { useEffect, useState } from 'react';
import { convertToPhone } from '../../../../utils/conversions';
import {
    Container,
    HeaderContainer,
    ContactName,
    ContactInfo,
    ContactPfp,
    ContactNumber,
    Time,
    Description,
    Options,
    CloseHeader,
    Info,
    EditName,
    EditContactName,
    EditInput,
} from './styles';
import defaultPic from '../../../../assets/images/defaultPic.jpg';
import { getUserStatus, updateGroupName } from '../../../../services/api';
import { IoClose, AiOutlineClockCircle, HiOutlineMail, MdAdsClick, FaPen, BsCheck2 } from '../../../../styles/Icons';
import axios from 'axios';
import ParticipantsRow from '../../../../components/ParticipantsRow';

function ContactInfoPage(props) {
    const [status, setStatus] = useState('');
    const [isEditing, setEditing] = useState(false);
    const [newSubject, setNewSubject] = useState(props.name);

    useEffect(() => {
        const getStatus = async () => {
            let data = await getUserStatus({
                userId: props.userIns,
                contactNumber: props.number,
            });
            setStatus(data.data.status);
        };
        getStatus();
    }, [props.number]);

    useEffect(() => {
        if (props.isGroup == true) {
        }
    }, []);

    const finishEdit = async () => {
        updateGroupName({ newSubject: newSubject, userId: props.userIns, groupId: props.number });
        setEditing(false);
    };

    return (
        <Container>
            <CloseHeader>
                <IoClose size={25} onClick={props.closeView} />
            </CloseHeader>
            <HeaderContainer>
                <ContactPfp
                    src={props.picture}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = defaultPic;
                    }}
                />
                {props.isGroup ? (
                    <EditName>
                        {isEditing ? (
                            <EditInput>
                                <EditContactName
                                    type="text"
                                    defaultValue={newSubject}
                                    onChange={(e) => setNewSubject(e.target.value)}
                                />
                                <BsCheck2 size={25} onClick={() => finishEdit(false)} />
                            </EditInput>
                        ) : (
                            <>
                                <ContactName>{newSubject}</ContactName>
                                <FaPen className="editName" size={25} onClick={() => setEditing(!isEditing)} />
                            </>
                        )}
                    </EditName>
                ) : (
                    <ContactName>{props.name}</ContactName>
                )}

                <ContactNumber>
                    {props.isGroup == true ? (
                        <p>Grupo · {props.participants.length} Participantes</p>
                    ) : (
                        convertToPhone(props.number)
                    )}
                </ContactNumber>
            </HeaderContainer>
            <ContactInfo>
                <Time></Time>
                <small>Recado</small>
                <Description>{status}</Description>
                <Info>
                    <AiOutlineClockCircle size={20} fill="var(--grey)" />
                    <label> Inscrito em:</label> {props.subscriptionTime}
                </Info>
                <Info>
                    <HiOutlineMail size={20} />
                    <label> Email:</label> {props.email ? props.email : <b>Não informado!</b>}
                </Info>
                <Info>
                    <MdAdsClick size={20} />
                    <label> Interações:</label>{' '}
                    {props.interactions ? props.interactions : <b>Você nunca interagiu com esse contato!</b>}
                </Info>
            </ContactInfo>
            <Options>
                {props.isGroup == true && (
                    <>
                        <p>{props.participants.length} Participantes:</p>
                        {props.participants.map((member, index) => {
                            return <ParticipantsRow participantNumber={member.id} userId={props.userIns} key={index} />;
                        })}
                    </>
                )}
            </Options>
        </Container>
    );
}

export default ContactInfoPage;
