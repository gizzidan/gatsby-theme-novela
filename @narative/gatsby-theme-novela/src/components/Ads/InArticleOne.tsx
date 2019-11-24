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
            <div>
              <AdSlot sizes={[336, 280]} adUnit="in-article-1" />
            </div>        
        </AdContainerOne>
      </DFPSlotsProvider>
    );
  }
}

const AdContainerOne = styled.div`
  margin: 0px auto;
  margin-top: -10px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
  max-width: 680px;
  ${mediaqueries.phablet`
    margin-top: 0px;
    
  `};
`

