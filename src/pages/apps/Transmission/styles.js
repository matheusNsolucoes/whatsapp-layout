import styled from 'styled-components';
import theme from '../../../styles/theme';

export const Container = styled.div`
    padding: 16px;
`;

export const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 50px auto;
`;

export const EmptyTableRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${theme.mainBackground};
    padding: 16px;
    border-radius: 6px;
    box-shadow: ${theme.boxShadow};
    justify-content: center;
    align-items: center;

    p {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 0px;
    }
`;

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${theme.mainBackground};
    padding: 16px;
    border-radius: 6px;
    box-shadow: ${theme.boxShadow};
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    p {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 0px;
    }

    :hover {
        border: 2px solid ${theme.accentColorHover};
    }
`;

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    justify-content: space-between;

    p {
        padding-left: 20px;
    }
`;

export const Rows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const IconsGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    svg {
        :hover {
            path {
                fill: ${theme.accentColorHover};
            }
        }
    }
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;

    p {
        max-width: 60%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
