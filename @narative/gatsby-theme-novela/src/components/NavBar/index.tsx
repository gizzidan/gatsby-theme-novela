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

const Container = styled("header")`
  background-color: ${a => a.theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 60px;
  display: flex;
  text-align: center;
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.grey};
  transition: ${p => p.theme.colorModeTransition}, transform 0.45s ease;
`;



const LinkContainer = styled("div")`
  top: 50%;
  transform: translate(0,-50%);
  line-height: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  right: 22px;
    ${mediaqueries.tablet`
        display: none;
      `}
`;

const StyledLink = styled(Link)`
    color: ${a => a.theme.colors.navbar};
    font-size: 18px;
    padding-left: 20px;
    font-weight: 400;
    transition: all 0.15s ease;

    &:hover {
        opacity: 0.6;
        transition: all 0.15s ease;
        
    }
`;

const ToolContainer = styled("div")`
    padding-left: 35px;
    margin-top: 0px;
    display: flex;
`

const Logo = styled(Link)`
    color: ${a => a.theme.colors.primary};
    line-height: 0px;
    font-size: 30px;
    font-weight: 400;
    left: 22px;
    top: 50%;
    position: absolute;
    transition: all 0.15s ease;
    &:hover {
        ${a => a.theme.colors.accent};
        transition: all 0.15s ease;
        
    }
`;

const Separator = styled("div")`
    font-size: 50px;
    height: 59px;
    border-left: 1px solid;
    border-color: ${a => a.theme.colors.grey};
    position: absolute;
    right: 130px;
        ${mediaqueries.tablet`
            display: none;
        `}
    
`

const NavBar = () => (
    <Container>
        <Logo to="/">SHORESIDE</Logo>
            <Separator></Separator>
            <LinkContainer>
                <StyledLink to="/">Features</StyledLink>
                <StyledLink to="/">About</StyledLink>
                    <ToolContainer>
                        <SharePageButton />
                        <DarkModeToggle />
                    </ToolContainer>
            </LinkContainer>
    </Container>
);

export default NavBar;