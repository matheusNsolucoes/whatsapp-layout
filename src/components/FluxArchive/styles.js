import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    max-width: 300px;
    border-radius: 12px;
    background-color: ${props => props.createNew == true ? "transparent" : theme.mainBackground};
    color: ${props => props.createNew == true ? "#7B8890" : "#000"};
    padding: 8px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    width: 250px;
    margin-right: 15px;
    margin-bottom: 15px;
    justify-content: space-between;
    border: ${props => props.createNew == true ? "2px dashed #7B8890" : "none"};
    box-shadow: ${theme.boxShadow};
    cursor: pointer;
    transition: all 0.05s;

    p {
        font-weight: 600;
        margin-bottom: 0px;
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    svg path {
        fill: ${props => props.createNew == true ? "#7B8890" : theme.accentColorHover};
    }

    :hover {
        border: ${props => props.createNew == true ? "2px dashed #14C38E" : "2px solid #14C38E"};
        color: ${props => props.createNew == true ? "#14C38E" : "#000"}
    }

    :hover svg path {
        fill: ${theme.accentColorHover};
    }
`;


export const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`