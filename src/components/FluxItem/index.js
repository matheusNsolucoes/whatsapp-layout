import React from 'react';
import { Container, Middle } from './styles';
import { SlOptionsVertical } from 'react-icons/sl';
import { convertoToFullStringDate } from '../../utils/conversions';

function FluxItem(props) {
    return (
        <Container>
            <p>{props.fluxName}</p>
            <Middle>
                <p>{props.executions}</p>
                <p>{props.ctr}</p>
                <p>{convertoToFullStringDate(props.createdAt)}</p>
            </Middle>
            <SlOptionsVertical />
        </Container>
    );
}

export default FluxItem;
