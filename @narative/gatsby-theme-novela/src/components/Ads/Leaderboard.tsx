import React, { Component } from 'react';
import Ad from 'react-google-publisher-tag';
import styled from "@emotion/styled";

export default class Leaderboard extends Component {
    render() {
      const LeaderboardContainer = styled.div`
        margin: 0px auto;
        margin-top: 25px;
        text-align: center;
        
      `
      return (
        <LeaderboardContainer id="application">
          <Ad collapseEmpty='true' path="/21862636432/home_top_leaderboard"/>
        </LeaderboardContainer>
      );
    }
  }