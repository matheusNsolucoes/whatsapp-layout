import React, { useEffect, useState } from "react";
import { createCampaign, getFlows, getOneFlow, getCampaigns } from "../../../services/api";
import CampaignCard from "./cards";
import CampaignHeader from "./header";
import { ContentContainer, PageContent } from "./styles";

const Campaign = () => {
    const [flow, setFlow] = useState()
    const [campaigns, setCampaigns] = useState([])

    const userToken = localStorage.getItem('userToken')

    useEffect(() => {
        const getAllCompaigns = async () => {
           const {data} = await getCampaigns(userToken)
           setCampaigns(data)
        }
        getAllCompaigns()
    }, [])
    
    // useEffect(() => {
    //     const getFlowsss = async () => {
    //         const {data} = await getOneFlow({userToken, nameFlow: 'chip'});
    //         setFlow(data)
    //         console.log(`dados do flow: ${JSON.stringify(flow)}`)
    //     }
    //     getFlowsss()
    // }, [])
    // console.log(`dados do flow2: ${JSON.stringify(flow)}`)


    // useEffect(() => {
    //     const createCampaignF = async () => {
    //         const flowJson = JSON.stringify(flow)
    //         await createCampaign('nova camp', flowJson, userToken).then(() => console.log('Salvou'))
    //     }
    //     createCampaignF()
    // }, [])



    return (
        <div>
            <CampaignHeader />
            <PageContent>
                <ContentContainer>
                {campaigns.campaigns.map((camp, index) => (
                        <CampaignCard key={index} nameCampaign={camp.name} flows={camp}/>
                    ))}
                </ContentContainer>
            </PageContent>
        </div>
    );
}

export default Campaign;