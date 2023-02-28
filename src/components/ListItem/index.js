import React from 'react';
import { Container } from './styles';

function ListItem(props) {
    return (
        <Container onClick={props.onClick}>
            <img src={props.image} />
            <p>{props.name}</p>
        </Container>
    );
}

export default ListItem;
