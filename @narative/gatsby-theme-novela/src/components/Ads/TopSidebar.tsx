import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import AdLabel from "./Label";

export default class Leaderboard extends Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        
         >
        <LeaderboardContainer>
        <AdLabel>Advertisement</AdLabel>
          <AdSlot sizes={[300, 250]} adUnit="home-top-sidebar" />
        </LeaderboardContainer>
      </DFPSlotsProvider>
    );
  }
}

const LeaderboardContainer = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;

`