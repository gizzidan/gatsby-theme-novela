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
    const fill = isDark ? "#fff" : "#000";
  
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
  height: 55px;
  display: flex;
  text-align: center;
  transition: ${p => p.theme.colorModeTransition}, all 0.30s ease;
`;

export const BgContainer = styled("header")`
  border-bottom: 1px solid;
  border-color: ${a => a.theme.colors.lightGrey};
  background-color: ${p => p.theme.colors.background};
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  transition: ${p => p.theme.colorModeTransition}, all 0.30s ease;
`;





export const LinkContainer = styled("div")`
  z-index: 1000;
  top: 50%;
  transform: translate(0,-50%);
  line-height: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  left: 22px;
    ${mediaqueries.tablet`
        display: none;
      `}
`;

export const StyledLink = styled(Link)`
    color: ${a => a.theme.colors.navbar};
    font-size: 18px;
    padding-left: 20px;
    font-weight: 500;
    letter-spacing: -0.01em;
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
    right: 15px;
`


export const LogoContainer = styled(Link)`
    z-index: 1000;
    top: 95%;
    left: 50%;
    position: absolute;
    transform: translate(-39%,-50%);
    transition: all 0.15s ease;
    &:hover {
        ${a => a.theme.colors.accent};
        transition: all 0.15s ease;
        
    }
`;

export const Separator = styled("div")`
    z-index: 1000;
    font-size: 50px;
    height: 54px;
    border-left: 1px solid;
    border-color: ${a => a.theme.colors.lightGrey};
    position: absolute;
    right: 130px;
        ${mediaqueries.tablet`
            display: none;
        `}
    
`


export default class NavBarBasic extends React.Component {
  state = {
    opacity: '0',
    reverse: '1'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 150) {
      this.setState({opacity: '1', reverse: '0'})
    } else {
      this.setState({opacity: '0', reverse: '1'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render (){
    return (
      <Container>
         <BgContainer/>
          <LogoContainer 
          to="/"
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage">
            <Logo/>
          </LogoContainer>
          <div> <BurgerMenu /></div>
            <Separator ></Separator>
            <LinkContainer >
      
            </LinkContainer>
            <ToolContainer >
              <SharePageButton />
               <DarkModeToggle />
            </ToolContainer>
    </Container>
    )
  }

}
