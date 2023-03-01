import styled from "styled-components"
import theme from "../../styles/theme";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    transition: all 0.2s;
    width: 90%;

    input {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
      border-radius: 6px;
      transition: all 0.2s;
      border: none;
      outline: none;
      background-color: ${theme.tertiaryBackground};
      box-shadow: ${theme.boxShadow};
      font-size: 14px;
    }

    .submitButton {
      width: 100%;
      align-self: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      background-color: ${theme.sendImageBackground};

      :hover {
        background-color: ${theme.accentColor};
        color: white;
      }
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const ModalBoxs = styled.div`
  background-color: ${theme.mainBackground};
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  text-align: center;
  gap: 10px;

  h5 {
    font-weight: 600;
  }

  p {
    font-size: 13px;
    color: var(--grey);
  }
`;

export const FinishButton = styled.div`
  width: 100px;
  align-self: flex-end;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${theme.accentColor};
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;
