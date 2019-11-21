import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

export default class Leaderboard extends Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        
         >
        <LeaderboardContainer>
          <AdSlot sizes={[320, 50]} adUnit="home-top-sidebar" />
        </LeaderboardContainer>
      </DFPSlotsProvider>
    );
  }
}

const LeaderboardContainer = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
`