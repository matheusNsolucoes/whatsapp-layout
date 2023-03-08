import React from "react";
import { useModalContext } from "../../../../modal.context";
import { Background, Container, ModalBox } from "./styles";
import {useEffect, useState} from 'react'
import { createCampaign, getFlows } from "../../../../services/api";

const CamapignModal = () => {
    const [flows, setFlows] = useState([]);
    const [flowSelect, setFlowSelect] = useState()
    const [nameCampaign, setNameCampaign] = useState()
    const {
        closeModal,
    } = useModalContext();

    const userToken = localStorage.getItem('userToken')

    useEffect(() => {
       const getAllFlowsUser = async () => {
            const {data} = await getFlows('mapas');
            setFlows(data)
        }
        getAllFlowsUser()
    }, [])

    flows.map((fl) => {
        console.log(fl)
    })

    const handleSubmit = async(e) => {
        e.preventDefault()
        flows.map(async (fl) => {
            if(fl.name === flowSelect) {
                await createCampaign(nameCampaign, fl, userToken).then((result) => {
                    console.log(JSON.stringify(result))
                })
            }
        })
    }


    return (
        <Container>
            <Background onClick={() => closeModal()}/>
            <ModalBox>
                <h1 style={{margin: '15px'}}>Crie sua Companha</h1>
                <form onSubmit={handleSubmit}>
                <input type='text' value={nameCampaign} onChange={(e) => setNameCampaign(e.target.value)} placeholder="Informe o nome da camapnha"/>
                <select onChange={(e) => setFlowSelect(e.target.value)}>
                    {flows.map((flow, index) => (
                        <option value={flow.name}>{flow.name}</option>
                    ))}
                </select>
                <button type="submit">Criar</button>
                </form>
            </ModalBox>
        </Container>
    );
}

export default CamapignModal;