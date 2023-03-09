import React, { useEffect, useState } from "react";
import { useModalContext } from "../../../modal.context";
import { createCampaign, getFlows, getOneFlow, getCampaigns } from "../../../services/api";
import CampaignCard from "./cards";
import CampaignHeader from "./header";
import CamapignModal from "./modal";
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

    const {
        modalState: { visible },
        openModal,
      } = useModalContext();

    return (
        <div>
            <CampaignHeader />
            <PageContent>
                <ContentContainer>
                {visible ? (
                    <CamapignModal />
                ): (
                  <>
                    {campaigns.map((camp, index) => (
                        <CampaignCard key={index} nameCampaign={camp.name} flows={camp.flow}/>
                    ))}
                  </>  
                )}
                
                </ContentContainer>
            </PageContent>
        </div>
    );
}

export default Campaign;