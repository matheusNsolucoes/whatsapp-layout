import React, { useCallback, useState } from "react";
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
import {FiEdit, FiLink, FiCheck, FiX} from 'react-icons/fi';
import { deleteCampaign, updateCampaigns } from "../../../../services/api";


function CampaignCard({nameCampaign, flows}) {
    const [edit, setEdit] = useState(false); // estado que indica se a tag está em modo de edição
    const [editedName, setEditedName] = useState(null); // estado que guarda a tag que está em edição
    const [inputValue, setInputValue] = useState(""); // estado que guarda o valor do input da tag em edição

    const userToken = localStorage.getItem('userToken')

    const handleEditClick = (name) => {
    setEdit(true);
    setEditedName(name);
    setInputValue(name);
    };

    const handleCancelClick = async() => {
    setEdit(false);
    setEditedName(null);
    setInputValue("");
    };

    const handleSaveClick = async () => {
        setEdit(false);
        setEditedName(null);
        setInputValue("");
        await updateCampaigns(nameCampaign, userToken, inputValue)
    };

    const handleDelete = async () => {
        await deleteCampaign(nameCampaign, userToken)
    }

    return (
    <Container>
        <CardHeader>
        <CardName>
            {edit && editedName === nameCampaign ? (
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            ) : (
            <CardNameFlow>{nameCampaign}</CardNameFlow>
            )}
        </CardName>
        <CardIcons>
            {!edit && (
            <ButtonEdit onClick={() => handleEditClick(nameCampaign)}>
                <LabelButton>
                <FiEdit />
                </LabelButton>
                <ButtonRoot />
            </ButtonEdit>
            )}
            {edit ? (
            <>
                <ButtonEdit onClick={handleSaveClick}>
                <LabelButton>
                    <FiCheck />
                </LabelButton>
                <ButtonRoot />
                </ButtonEdit>
                <ButtonEdit onClick={handleCancelClick}>
                <LabelButton>
                    <FiX />
                </LabelButton>
                <ButtonRoot />
                </ButtonEdit>
            </>
            ): (
                <ButtonEdit onClick={handleDelete}>
                    <LabelButton>
                        <BiTrash />
                    </LabelButton>
                    <ButtonRoot />
                </ButtonEdit>
            )}
            
        </CardIcons>
        </CardHeader>
        <CardIcon>
        <CardIconLink>
            <FiLink />
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
        <ButtonLink>Copiar Link</ButtonLink>
        </CardFooter>
    </Container>
    );

}

export default CampaignCard;