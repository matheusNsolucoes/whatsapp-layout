import React from 'react';
import { Container, FirstRow } from './styles';
import { FcFolder } from 'react-icons/fc';
import { BsFolderPlus } from 'react-icons/bs';
import { SlOptionsVertical } from 'react-icons/sl';
import { Row } from 'reactstrap';

function FluxArchive(props) {
    return (
        <Container createNew={props.createNew ? true : false} onClick={props.onClick}>
            <FirstRow>
                {props.createNew ? <BsFolderPlus size={25} /> : <FcFolder size={30} />}
                <p>{props.title}</p>
            </FirstRow>
            {!props.createNew && <SlOptionsVertical />}
        </Container>
    );
}

export default FluxArchive;
