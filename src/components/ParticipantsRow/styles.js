import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 12px;
    cursor: pointer;
    width: 100%;
    align-items: center;

    :hover {
        background-color: ${theme.sendImageBackground};
    }
`

export const ContactPfp = styled.img`
    border-radius: 100%;
    width: 42px;
    height: 42px;
`;