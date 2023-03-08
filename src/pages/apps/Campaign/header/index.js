import React, {useEffect, useState} from "react";
import { ButtonCreate, ButtonDownload, ButtonsContainer, Container, ContentHeader, LeftSide, SearchInput, Title } from "./styles";
import {BsDownload} from 'react-icons/bs'
import {GoDiffAdded} from 'react-icons/go'
import { useModalContext } from "../../../../modal.context";
import * as XLSX from 'xlsx';
import { getCampaigns } from "../../../../services/api";

function CampaignHeader() {
    const [compaigns, setCompaigns] = useState([])
    const {
        modalState: { visible },
        openModal,
      } = useModalContext();

      const usertoken = localStorage.getItem('userToken')

      useEffect(() => {
        const getCampaignsForReport = async () => {
            const {data} = await getCampaigns(usertoken);

            setCompaigns(data);
        }
       getCampaignsForReport()
      }, [])

    //   let nameCampaign = ''

    //   compaigns.map((co) => {
    //     nameCampaign = co
    //   })
    //oi

    // console.log(`no header: ${JSON.stringify(compaigns)}`)

    //   const report = {
    //     name: 

    //   }
// vai
      const handleReport = async () => {
        // Cria uma planilha usando a biblioteca XLSX
        const spreadsheet = XLSX.utils.json_to_sheet(compaigns);
    
        // Cria um livro de trabalho e adiciona a planilha a ele
        const contact = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(contact, spreadsheet, 'Relatorio');
    
        // Converte o livro de trabalho em um ArrayBuffer (array de bytes)
        const sheet = XLSX.write(contact, { type: 'array', bookType: 'xlsx' });
    
        // Cria um objeto Blob a partir do ArrayBuffer
        const blob = new Blob([sheet], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'relatorio.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    
      }
    
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
                    <ButtonDownload onClick={handleReport}>
                        <BsDownload />
                        <span>Baixe o relatório</span>
                    </ButtonDownload>
                    <ButtonCreate onClick={() => openModal()}>
                        <GoDiffAdded />
                        <span>Criar</span>
                    </ButtonCreate>
                </ButtonsContainer>
            </ContentHeader>
        </Container>
    );
}

export default CampaignHeader;