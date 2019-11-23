import React, { Fragment } from 'react'
import { useState } from "react";
import { Link } from 'gatsby';
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import { useColorMode } from "theme-ui";
import Icons from "@icons";
import {IconWrapper, MoonOrSun, MoonMask, ToolTip} 
    from "@narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx";
import { copyToClipboard, } from "@utils";
import Logo from "@components/Logo";
import Menu from '@components/Menu';
import Burger from '@components/Burger';
import Headroom from 'react-headroom';
import MobileNav from '@components/MobileNav'

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

export const Container = styled("header")`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 50px;
  display: flex;
  text-align: center;
  transition: all 0.15s linear;
`;

export const BgContainer = styled("header")`
  border-bottom: 1px solid;
  border-color: ${a => a.theme.colors.navBorder};
  background-color: ${a => a.theme.colors.navBackground};
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  transition: all 0.15s linear;
`;


export const LinkContainer = styled("div")`
  display: none;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  line-height: 0px;
  position: absolute;
  color: white;
  width: 100%;
  max-width: 1470px;
  z-index: 1000;
  padding: 0 4rem;
  align-items: left;
  text-align: left;
  ${mediaqueries.desktop_xlarge`
     text-align: center;

  `}
  ${mediaqueries.desktop`
    display: none;
  `}
`;

export const StyledLink = styled(Link)`
    color: ${a => a.theme.colors.navbar};
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    margin-right: 20px;
    transition: all 0.15s ease;

    &:hover {
        opacity: 0.6;
        transition: all 0.15s ease;
        
    }
`;

export const StyledLinkBig = styled(Link)`
    color: ${a => a.theme.colors.navbar};
    border-bottom: 1px solid rgba(255,255,255,0.2);
    font-size: 15px;
    font-weight: 700;
    margin-right: 20px;
    transition: all 0.15s ease;
    &:hover {
        opacity: 0.6;
        transition: all 0.15s ease;
        
    }
    
`;

export const ToolContainer = styled("div")`
    top: 50%;
    transform: translate(0,-50%);
    position: absolute;
    z-index: 1000;
    margin-top: 0px;
    display: flex;
    right: 20px;
    ${mediaqueries.tablet`
      right: 15px;
    `}
`


export const LogoContainer = styled(Link)`
    z-index: 4000;
    top: 50%;
    left: 30px;
    font-family: "F Grotesk";
    font-size: 26px;
    font-weight: 400;
    color: #fff;
    position: absolute;
    transform: translate(0,-50%);
    transition: all 0.15s ease;
    &:hover {
        ${a => a.theme.colors.accent};
        transition: all 0.15s ease;
        
    }
    ${mediaqueries.tablet`
      font-size: 22px;
      left: 16px;
    `}
    ${mediaqueries.phone_small`
      font-size: 18px;
    `}
`;

export const Separator = styled("div")`
    z-index: 1000;
    font-size: 50px;
    height: 54px;
    border-left: 1px solid;
    border-color: ${a => a.theme.colors.lightGrey};
    position: absolute;
    right: 82px;
        ${mediaqueries.tablet`
            display: none;
        `}
    
`


export default class NavBarBasic extends React.Component {
  
  render (){
    return (
      <div>
      <Headroom style={{ zIndex: '1000'}}>
        <Container>
          <BgContainer/>
            <LogoContainer 
            to="/"
            data-a11y="false"
            title="Navigate back to the homepage"
            aria-label="Navigate back to the homepage">
            <Logo/>
            </LogoContainer>
            <LinkContainer >
              </LinkContainer>
            <ToolContainer >
               
               <DarkModeToggle />
            </ToolContainer>
          <LowerContainer>
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