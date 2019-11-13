import React from 'react'
import { Link } from 'gatsby';
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

export default function Sidenav () {
    const scrollToElement = require('scroll-to-element')
    const handleLinkClick = (e, target) => {
    
        // NODE-SAFE CODE
        // Gatsby uses Node to generate our pages. 
        // Node doesn't know what a window is. 
        // Be sure to wrap any of your browser interactions
        // in some sort of node-safe if statement like this:
        
        if (typeof window !== 'undefined') {
          
          // First, are we on the home page?
          // If so, let's scroll to the desired block,
          // which was passed in as an onClick method on our <Link />.
          // If an event was also passed, we'll preventDefault()
          
          if (window.location.pathname === '/') {
            if (e) e.preventDefault()
            scrollToElement(target, {
              offset: -66, // Offset a fixed header if you please
              duration: 618,
            })
          }
        }
      }
    
      return (
        
            <div style={{ display: 'block',
                          
                            }}>
                <Guide 
                  onClick={e => handleLinkClick(e, '#latest')}
                  to={"/#latest"}>
                  Latest
                </Guide>
                <Guide 
                  onClick={e => handleLinkClick(e, '#thoughts')}
                  to={"/#thoughts"}>
                  Thoughts
                </Guide>
                <Guide 
                  onClick={e => handleLinkClick(e, '#culture')}
                  to={"/#culture"}>
                  Culture
                </Guide>
                <Guide 
                  onClick={e => handleLinkClick(e, '#goings-on')}
                  to={"/#goings-on"}>
                  Goings On
                </Guide>
  
            </div>
     
      )
  }
const SideContainer = styled("header")`
  padding-top: 80px;
  position: sticky;
  width: 165px;
  top: 0px;
  z-index: 100;
  height: 200px;
  text-align: center;
  transition: all 0.15s linear;
  ${mediaqueries.desktop_mediumlarge`
    display: none;
  `};
`;

const Guide = styled(Link)`
  margin-bottom: 20px;
  font-size: 22px;
  display: block;
  color: ${p => p.theme.colors.primary} !important;
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 500;
  &:hover {
    opacity: 0.6;
  }
`;