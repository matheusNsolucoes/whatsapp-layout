import styled from 'styled-components';

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

      font-size: 14px;
    }

    .submitButton {
      width: 100%;
      align-self: center;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      :hover {

        color: white;
      }
    }
  }
`;

export const ModalBox = styled.div`
background-color: #FFF;
max-width: 100%;
`