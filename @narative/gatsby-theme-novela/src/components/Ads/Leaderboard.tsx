import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';
import AdLabel from "./Label";

export default class Leaderboard extends React.Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        sizeMapping={[{ viewport: [1024, 768], sizes: [[728, 90]] },
          { viewport: [980, 690], sizes: [[320, 50]] }]}
         >
        <LeaderboardContainer>
        <AdLabel>Advertisement</AdLabel>
          <AdSlot sizes={[[320, 50]]} adUnit="home-top-leaderboard" />
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