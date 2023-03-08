import React from "react";
import { ButtonCreate, ButtonDownload, ButtonsContainer, Container, ContentHeader, LeftSide, SearchInput, Title } from "./styles";
import {BsDownload} from 'react-icons/bs'
import {GoDiffAdded} from 'react-icons/go'
import { useModalContext } from "../../../../modal.context";

function CampaignHeader() {
    
    return (
        <Container>
            
            <ContentHeader>
                <LeftSide>
                    <Title>
                        <span>Campanhas</span>
                        <SearchInput type="text" placeholder="Pesquisar por nome de campanha"/>
                    </Title>
                </LeftSide>
                <ButtonsContainer>
                    <ButtonDownload>
                        <BsDownload />
                        <span>Baixe o relatório</span>
                    </ButtonDownload>
                    <ButtonCreate>
                        <GoDiffAdded />
                        <span>Criar</span>
                    </ButtonCreate>
                </ButtonsContainer>
            </ContentHeader>
        </Container>
    );
}

export default CampaignHeader;