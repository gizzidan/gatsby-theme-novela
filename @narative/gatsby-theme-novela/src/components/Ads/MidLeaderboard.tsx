import styled from "@emotion/styled";
import React, { Component } from 'react';
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

export default class MidLeaderboard extends Component {
  render() {
    return (
      <DFPSlotsProvider 
        singleRequest={true}
        dfpNetworkId="21862636432" 
        collapseEmptyDivs
        sizeMapping={[{ viewport: [1024, 768], sizes: [[728, 90]] },
          { viewport: [900, 768], sizes: [[320, 50]] }]}
         >
        <LeaderboardContainer>
          <AdSlot sizes={[[728, 90], [320, 50]]} adUnit="home-middle-leaderboard" />
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