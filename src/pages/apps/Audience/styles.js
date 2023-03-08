import styled from 'styled-components';
import { FaTrash } from '../../../styles/Icons';
import theme from '../../../styles/theme';

export const Container = styled.div`
    padding: 16px;

    .react-paginate {
        width: 100%;
        display: flex;
        flex-direction: row;
        list-style: none;

        svg {
            color: ${theme.accentColor};
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .back {
            transform: rotate(-180deg);
        }

        li {
            transition: 0.2s;
            width: 35px;
            height: 35px;
            padding: 6px;
            text-align: center;
            border: 1px solid #dfdfdf;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 2px;

            :hover {
                background-color: ${theme.accentColor};
                color: ${theme.accentColor};

                a {
                    color: #fff !important;
                }
              
                svg {
                    color: #fff;
                }
            }
        }
    }

    .active-page {
        background-color: ${theme.accentColor};
        
        a {
            color: #fff !important;
        }
    }
`;

export const Main = styled.div`
    display: flex;
    gap: 30px;
    background-color: ${theme.secundaryBackground};
    border-radius: 4px;
    padding: 20px;
`;

export const MessageInput = styled.textarea`
    max-width: 450px;
    padding: 10px;
    border-radius: 6px;
    border: none;
    transition: all 0.2s;
    outline: none;
    min-height: 100px;
    max-height: 250px;
    background-color: ${theme.secundaryBackground};

    :focus {
        border: 3px solid ${theme.accentColor};
    }
`;

export const ContactNameInput = styled.input`
    border-radius: 6px;
    border: none;
    transition: all 0.2s;
    outline: none;

    :focus {
        border: 3px solid ${theme.accentColor};
    }
`;

export const SendMsgBtn = styled.input`
    width: 100px;
    align-self: flex-end;
    background-color: ${theme.accentColor} !important;
    color: ${theme.mainText};
    font-weight: 600;
    cursor: pointer;

    :hover {
        padding: 12px;
        background-color: ${theme.accentColorHover} !important;
    }
`;

export const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    gap: 30px;
`;

export const FirstColumn = styled.div``;

export const ContactList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ContactRow = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    background-color: ${theme.mainBackground};
    padding: 12px;
    border-radius: 6px;

    p {
        font-size: 14px;
        color: #808080;
    }

    b {
        text-transform: capitalize;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const ContactColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfilePicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 100%;
`;

export const DeleteContactBtn = styled(FaTrash)`
    width: 26px;
    height: 26px;
    padding: 6px;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
        color: ${theme.accentColorHover};
        width: 28px;
        height: 28px;
    }
`;

export const ContactOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export const ImportContacts = styled.input`
    background-color: #fff;
    width: 150px;
    height: 60px;
`;

export const TopButtons = styled.a`
    color: #000;
    cursor: pointer;
    box-shadow: ${theme.boxShadow};
    background-color: ${theme.mainBackground};
    border-radius: 8px;
    margin-right: 10px;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 6px 20px;

    svg {
        color: ${theme.accentColorHover};
    }

    :hover {
        border: 2px solid ${theme.accentColorHover};
    }
`;

export const ButtonsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const FilterButton = styled.a`
    background-color: ${theme.accentColorHover};
    color: #fff !important;
    border-radius: 8px;
    padding: 6px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 5px;
    width: fit-content;
    margin: 0 10px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.mainBackground};
    border-radius: 8px;
    padding: 6px;
    box-shadow: ${theme.boxShadow};
    min-width: 250px;

    span {
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        padding: 0 6px;
    }
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 10px;
    font-size: 12px;
`;

export const Tag = styled.td`
    padding: 0px 0.75rem !important;
`