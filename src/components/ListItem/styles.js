import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px;
    gap: 10px;
    transition: 0.2s;
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
        margin-bottom: 0px;
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;

        small {
            margin-left: 2rem;
        }
    }

    span {
        white-space: nowrap;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0px;
        padding-bottom: 0px;
        font-size: 11px;
    }
`;

export const DeleteBtn = styled.div`
    padding: 6px;
`;
