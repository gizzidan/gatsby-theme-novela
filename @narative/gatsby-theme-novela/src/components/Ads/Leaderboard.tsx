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
        sizeMapping={[{ viewport: [1024, 768], sizes: [[728, 90]] },
          { viewport: [900, 768], sizes: [[320, 50]] }]}
         >
        <div>
          <AdSlot sizes={[[728, 90], [320, 50]]} adUnit="home_top_leaderboard" />
        </div>
      </DFPSlotsProvider>
    );
  }
}