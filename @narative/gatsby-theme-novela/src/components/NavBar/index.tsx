import React, { Fragment } from 'react'
import { useState } from "react";
import { Link } from 'gatsby';
import mediaqueries from '@styles/media';
import { useColorMode } from "theme-ui";
import Icons from '@icons';
import {IconWrapper, MoonOrSun, MoonMask, ToolTip} 
    from '@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx';
import { copyToClipboard, } from '@utils';
import Logo from "@components/Logo";
import Headroom from "react-headroom";
import MobileNav from '@components/MobileNav';
import styled from "@emotion/styled";

import { Container, BgContainer, LogoContainer, LinkContainer, StyledLink, ToolContainer, Separator, StyledLinkBig}
    from "@components/NavBarBasic";
import Burger from '@components/Burger';
import Menu from '@components/Menu';


function BurgerMenu () {
  const [open, setOpen] = useState(false);
  return (
      <Fragment>
        <Burger open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen}/>
      </Fragment>
  ) 
}

function SharePageButton() {
    const [hasCopied, setHasCopied] = useState<boolean>(false);
    const [colorMode] = useColorMode();
    const isDark = colorMode === `dark`;
    const fill = isDark ? "#fff" : "#fff";
  
    function copyToClipboardOnClick() {
      if (hasCopied) return;
  
      copyToClipboard(window.location.href);
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 1000);
    }
  
    return (
      <IconWrapper
        isDark={isDark}
        onClick={copyToClipboardOnClick}
        data-a11y="false"
        aria-label="Copy URL to clipboard"
        title="Copy URL to clipboard"
      >
        <Icons.Link fill={fill} />
        <ToolTip isDark={isDark} hasCopied={hasCopied}>
          Copied
        </ToolTip>
      </IconWrapper>
    );
  }

function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  function toggleColorMode(event) {
    event.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  }

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      data-a11y="false"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
}


export default class NavBar extends React.Component {
  state = {
    color: 'transparent',
    opacity: '0',
    logo: 'white',
    reverse: '1',
  }

  listenScrollEvent = e => {
    if (window.scrollY > 60) {
      this.setState({color: 'white', opacity: '1', logo: 'inherit', reverse: '0',})
    } else {
      this.setState({color: 'transparent', opacity: '0', logo: 'white', reverse: '1',})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  

  render (){
    return (
      <div>
     <Headroom style={{zIndex: '1000'}}>
      <Container>
         <BgContainer style={{opacity: this.state.opacity}}/>
         <LogoContainer 
          
          to="/"
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage">
            <Logo />
          </LogoContainer>
            
            <ToolContainer style={{opacity: this.state.opacity}}>
                
                <DarkModeToggle />
            </ToolContainer>
            <LowerContainer style={{opacity: this.state.opacity}}>
               <MobileNav />
            </LowerContainer>
      </Container> 
    </Headroom>
    </div>
    )
  }

}

const LowerContainer = styled("header")`
  padding-top: 0px;
  position: relative;
  width: 100vw;
  top: 0px;
  z-index: 100;
  text-align: center;
  transition: all 0.15s linear;
`;