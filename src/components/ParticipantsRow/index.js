import React, { useEffect, useState } from 'react';
import { getContactPic } from '../../services/api';
import { Container, ContactPfp } from './styles';
import defaultPic from '../../assets/images/defaultPic.jpg';
import { convertToPhone } from '../../utils/conversions';

function ParticipantsRow(props) {
    const userId = props.userId;
    const participantNumber = props.participantNumber;
    const [picture, setPicture] = useState();

    useEffect(() => {
        const savePicture = async () => {
            let data = await getContactPic({
                contactNumber: participantNumber,
                userId: userId,
            });

            setPicture(data.data);
        };
        savePicture();
    }, []);

    return (
        <Container>
            <ContactPfp
                src={picture ? picture : defaultPic}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = defaultPic;
                }}
            />
            {convertToPhone(participantNumber)}
        </Container>
    );
}

export default ParticipantsRow;
