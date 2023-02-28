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
} from './styles';
import defaultPic from '../../../../assets/images/defaultPic.jpg';
import { getUserStatus } from '../../../../services/api';
import { IoClose, AiOutlineClockCircle, HiOutlineMail, MdAdsClick } from '../../../../styles/Icons';

function ContactInfoPage(props) {
    const [status, setStatus] = useState('');

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

    console.log(props.picture);

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
                <ContactName>{props.name}</ContactName>
                <ContactNumber>{convertToPhone(props.number)}</ContactNumber>
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
            <Options></Options>
        </Container>
    );
}

export default ContactInfoPage;
