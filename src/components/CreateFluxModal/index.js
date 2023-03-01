import React from 'react';
import { Container, Background, ModalBoxs } from './styles';
import { useModalContext } from '../../modal.context';


function CreateFluxModal() {
    const {
        closeModal,
      } = useModalContext();
    
  return (
    <Container>
        <Background onClick={() => closeModal()} />
        <ModalBoxs>
            <h5>Criar uma Nova Pasta</h5>
        </ModalBoxs>
    </Container>
  );
}

export default CreateFluxModal;