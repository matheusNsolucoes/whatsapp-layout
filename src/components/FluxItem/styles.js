import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    background-color: ${theme.mainBackground};
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    box-shadow: ${theme.boxShadow};
    cursor: pointer;

    p {
        margin-bottom: 0px;
    }

    :hover {
        border: 2px solid ${theme.accentColorHover};
    }
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
`;
