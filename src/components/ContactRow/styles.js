import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 12px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.2s;
    box-shadow: ${theme.boxShadow};
    background-color: ${(props) => (props.selected === 'selected' ? theme.secundaryBackground : theme.mainBackground)};
    gap: 10px;
    cursor: pointer;

    :hover {
        background-color: ${(props) => (props.selected === 'not' ? theme.tertiaryBackground : '')};
    }
`;

export const ContactName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100% !important;
    max-width: 100%;
    min-width: 50%;

    p {
        margin-bottom: 0 !important;
        font-weight: 600;
    }

    small {
        overflow: hidden;
        color: ${theme.grey};
        display: inline-flex;
        align-items: center;
        gap: 5px;

        span {
            display: inline-block;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        svg {
            height: 15px;
            width: 15px;
        }
    }
`;

export const ContactPfp = styled.img`
    border-radius: 100%;
    width: 42px;
    height: 42px;
`;

export const EndColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;

    sub {
        font-size: 11px;
        color: ${theme.grey};
    }
`;

export const NewMessages = styled.div`
    border-radius: 50%;
    min-width: 20px;
    min-height: 20px;
    font-size: 11px;
    color: #fff;
    background-color: ${theme.accentColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;