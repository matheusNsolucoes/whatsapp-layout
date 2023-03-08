import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ContainerLeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid #e9e9e9;
    min-width: 250px;
    padding: 16px;
    height: 100%;
    max-width: 300px;
    position: relative;
    background-color: ${theme.mainBackground};
`;

export const ContainerLeftPanelTopPart = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ContainerLeftPanelAvatar = styled.img`
    width: 140px;
    height: 140px;
    background-size: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const ContainerLeftPanelUserDetails = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    gap: 10px;
    color: #777;
    text-align: left;
`;

export const ButtonStartChat = styled.a`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    cursor: pointer;
    vertical-align: middle;
    padding: 8px 28px;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0);
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    color: #fff !important;
    width: 100%;
    margin-top: 50px;
    background-color: ${theme.accentColorHover};
`;

export const ContainerRihtPanel = styled.div`
    padding: 20px;
    max-width: 600px;
    width: 400px;
    height: 460px;
    overflow-y: auto;
    padding-left: 20px;
`;

export const ContainerRightPanelFullName = styled.div`
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #29292f;
    padding-bottom: 12px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
`;

export const ContentDetail = styled.div`
    padding: 12px 0 16px;
    border-bottom: 1px solid #e9e9e9;
    min-height: 70px;
`;

export const ContentDetailHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 98%;
    min-height: 40px;
`;

export const ContentDetailHeaderLabel = styled.div`
    height: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #29292f;
    margin-bottom: 7px;
`;

export const ContentDetailHeaderLabelAdd = styled.span`
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    cursor: pointer;
    color: #6445e0;
`;

export const ContentDetailItemList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContentDetailItemListItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
    margin-right: 8px;
    font-size: 11px;
    color: #29292f;
    padding: 2px 4px 2px 8px;
    background-color: ${theme.accentColorHover};
    color: #fff;
    font-weight: 600;
    border-radius: 100px;

    svg {
        margin-left: 10px;
        cursor: pointer;

        :hover {
            color: ${theme.accentColorHover};
        }

        :hover path {
            fill: #fff;
        }
    }
`;

export const ItemListItemSpan = styled.p`
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0px;
    padding: 0px;
`;

export const ModalBox = styled.div`
    width: fit-content;
    background-color: ${theme.mainBackground};
    padding: 16px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
`;

export const SaveContactBtn = styled.input`
    width: 150px !important;
    justify-self: flex-end !important;
    background-color: ${theme.accentColor};
    color: #fff;
    font-weight: 600;
    margin-top: 50px !important;

    :hover {
        opacity: 0.8;
    }
`;

export const ContactNameInput = styled.input``;

export const ContactEmailInput = styled.input``;

export const TagSelector = styled.div`
    position: relative;

    select {
      position: absolute;
      right: 0;
      top: 15px;
      border-radius: 8px;
      background-color: ${theme.secundaryBackground};
      box-shadow: ${theme.boxShadow};
      padding: 12px 0;
      width: 150px;
      border: none;
      overflow: auto;
      outline: none;

      option {
        text-align: center;
        padding: 8px;
        cursor: pointer;
        transition: .2s;
        
        :hover {
          background-color: ${theme.sendImageBackground};
        }

        :active {
          background-color: black;
        }

        :focus {
          background-color: black;
        }
      }
    }
`;

export const NameInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 6px;
`