import styled from "styled-components";
import theme from '../../../../styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${theme.mainBackground};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  color: ${theme.grey};
  font-size: 14px;
  margin-top: 10px;

  label {
    margin-bottom: 0;
    margin-right: 15px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px;
  height: 40%;
  padding-top: 50px;
  background-color: ${theme.secundaryBackground};
`;

export const ContactName = styled.p`
  padding-bottom: 0 !important;
  margin-bottom: 0;
  padding-top: 0.5rem;
  font-size: 1.5rem;
`;

export const ContactInfo = styled.div`
  background-color: ${theme.secundaryBackground};
  width: 100%;
  padding: 20px;

  small {
    color: ${theme.grey};
    margin-bottom: 10px;
  }
`;
export const ContactPfp = styled.img`
  width: auto;
  height: 80%;
  border-radius: 50%;
`;
export const ContactNumber = styled.small`
  color: ${theme.grey};
`;
export const Time = styled.div``;
export const Description = styled.div`
  margin-bottom: 2.5rem;
`;

export const Options = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.secundaryBackground};
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const CloseHeader = styled.div`
  background-color: ${theme.sendImageBackground};
  width: 100%;
  height: 60px;
  padding: 16px;

  svg {
    cursor: pointer;
    color: ${theme.grey};
  }
`;
