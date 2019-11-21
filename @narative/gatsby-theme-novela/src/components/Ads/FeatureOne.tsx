import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

export default class FeatureOne extends Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        sizeMapping={[{ viewport: [1024, 768], sizes: [[970, 250]] },
          { viewport: [900, 768], sizes: [[300, 250]] }]}
         >
        <FeatureContainer>
          <AdSlot sizes={[[970, 250], [300, 250]]} adUnit="feature-page-1" />
        </FeatureContainer>
      </DFPSlotsProvider>
    );
  }
}

const FeatureContainer = styled.div`
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 35px;
  text-align: center;
`