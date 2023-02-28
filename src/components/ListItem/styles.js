import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px;
    gap: 10px;
    transition: .2s;
    cursor: pointer;

    :hover {
        background-color: ${theme.secundaryBackground};
    }

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    p {
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
`;
