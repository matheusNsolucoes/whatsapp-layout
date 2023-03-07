import React from "react";
import CampaignCard from "./cards";
import CampaignHeader from "./header";
import { ContentContainer, PageContent } from "./styles";

const Campaign = () => {
    return (
        <div>
            <CampaignHeader />
            <PageContent>
                <ContentContainer>
                    <CampaignCard />
                    <CampaignCard />
                </ContentContainer>
            </PageContent>
        </div>
    );
}

export default Campaign;