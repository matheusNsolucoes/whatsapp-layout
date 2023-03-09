import React, { useEffect, useState } from 'react';
import { Container, DeleteBtn } from './styles';
import { getInfo, deleteInstance } from '../../services/api';
import { Col, Row } from 'reactstrap';
import { convertToPhone } from '../../utils/conversions';

function ListItem(props) {
    const [insInfo, setInsInfo] = useState({ username: '', userId: '' });
    const [valid, setValid] = useState(true);

    useEffect(() => {
        // pega o nome e o telefone do usuário
        const getUserInfo = async () => {
            let data = await getInfo({ userId: props.name });
            setInsInfo({
                username: data.username,
                userId: data.userPhone,
            });
        };
        getUserInfo();
    }, []);

    const DeleteNumber = async () => {
        // deleta a instância do usuário
        await deleteInstance({
            key: props.name,
            userToken: localStorage.getItem('userToken'),
        });

        setValid(!valid);
    };

    return (
        <React.Fragment>
            {valid && (
                <Container onClick={props.onClick}>
                    <img src={props.image} />
                    <Col style={{ width: '60%' }}>
                        <p>
                            {insInfo.username}
                        </p>
                        <Row style={{ marginLeft: '0px' }}>
                            <small>{convertToPhone(insInfo.userId)}</small>
                        </Row>
                    </Col>
                    <DeleteBtn onClick={() => DeleteNumber()}>x</DeleteBtn>
                </Container>
            )}
        </React.Fragment>
    );
}

export default ListItem;
