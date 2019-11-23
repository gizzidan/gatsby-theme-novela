import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import AdLabel from "./Label";
import mediaqueries from "@styles/media";

export default class InArticleOne extends Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        
         >
        <AdContainerOne>
            <AdLabel>Advertisement</AdLabel>
          <AdSlot sizes={[336, 280]} adUnit="in-article-1" />
        </AdContainerOne>
      </DFPSlotsProvider>
    );
  }
}

const AdContainerOne = styled.div`
  margin: 0px auto;
  margin-bottom: 30px;
  text-align: center;
  ${mediaqueries.phablet`
    margin-top: 0px;
  `};
`

