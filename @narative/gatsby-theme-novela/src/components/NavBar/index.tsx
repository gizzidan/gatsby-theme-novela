import React from "react";
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
import LogoBack from "@components/Logo/LogoBack";
import { Container, BgContainer, LogoContainer, LinkContainer, StyledLink, ToolContainer, Separator }
    from "@components/NavBarBasic";

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




export default class NavBar extends React.Component {
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
         <BgContainer style={{opacity: this.state.opacity}}/>
         <LogoContainer 
          style={{opacity: this.state.reverse}}
          to="/"
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage">
            <LogoBack/>
          </LogoContainer>
          <LogoContainer 
          style={{opacity: this.state.opacity}}
          to="/"
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage">
            <Logo/>
          </LogoContainer>
            <Separator style={{opacity: this.state.opacity}}></Separator>
            <LinkContainer style={{opacity: this.state.opacity}} >
                <StyledLink to="/">Features</StyledLink>
                <StyledLink to="/">About</StyledLink>
                    <ToolContainer style={{opacity: this.state.opacity}}>
                        <SharePageButton />
                        <DarkModeToggle />
                    </ToolContainer>
            </LinkContainer>
    </Container>
    )
  }

}
