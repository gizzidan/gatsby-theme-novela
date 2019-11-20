import React, { Component } from 'react';
import Ad from 'react-google-publisher-tag';
import styled from "@emotion/styled";

export default class TopSidebar extends Component {
    render() {
      const MediumRectangle = styled.div`
        margin: 0px auto;
        
        text-align: center; 
      `
      return (
        <MediumRectangle>
          <Ad collapseEmpty='true' path="/21862636432/home-top-sidebar"/>
        </MediumRectangle>
      );
    }
  }