import React, { Component } from "react";
import styled from "@emotion/styled";

export default class PatreonButton extends Component {
    componentDidMount() {
      const script = document.createElement("script");
  
      script.src = "https://c6.patreon.com/becomePatronButton.bundle.js";
      script.async = true;
  
      document.body.appendChild(script);
    }
    render() {
      return (
        <Patreon>
          <a href="https://www.patreon.com/bePatron?u=27097526" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
        </Patreon>
      );
      
    } 
  }
  
const Patreon = styled.div`
  padding-right: 20px;
  text-align: center;
`