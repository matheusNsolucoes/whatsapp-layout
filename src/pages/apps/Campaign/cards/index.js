import React from "react";
import { 
    ButtonEdit, 
    ButtonLink, 
    ButtonRoot, 
    CardFooter, 
    CardHeader, 
    CardIcon, 
    CardIconLink, 
    CardIcons, 
    CardInfo, 
    CardInfoBlock, 
    CardInfoData, 
    CardName,
    CardNameFlow, 
    Container, 
    LabelButton 
} from "./styles";
import {BiTrash} from 'react-icons/bi';
import {FiEdit, FiLink} from 'react-icons/fi';


function CampaignCard({nameCampaign}) {
    return (
        <Container>
            <CardHeader>
                <CardName>
                    <span>{nameCampaign}</span>
                    <CardNameFlow>
                        Não entrou relatorio
                    </CardNameFlow>
                </CardName>
                <CardIcons>
                    <ButtonEdit>
                        <LabelButton>
                            <FiEdit />
                        </LabelButton>
                        <ButtonRoot />
                    </ButtonEdit>
                    <ButtonEdit>
                        <LabelButton>
                            <BiTrash />
                        </LabelButton>
                        <ButtonRoot />
                    </ButtonEdit>
                </CardIcons>
            </CardHeader>
            <CardIcon>
                <CardIconLink>
                    <FiLink/>
                </CardIconLink>
            </CardIcon>
            <CardFooter>
                <CardInfo>
                    <CardInfoBlock>
                        <CardInfoData>Participantes:</CardInfoData>
                    </CardInfoBlock>
                    <CardInfoBlock>
                        <CardInfoData>Execuções:</CardInfoData>
                    </CardInfoBlock>
                    <CardInfoBlock>
                        <CardInfoData>ctr:</CardInfoData>
                    </CardInfoBlock>
                </CardInfo>
                <ButtonLink>
                    Copiar Link
                </ButtonLink>
            </CardFooter>
        </Container>
    );
}

export default CampaignCard;