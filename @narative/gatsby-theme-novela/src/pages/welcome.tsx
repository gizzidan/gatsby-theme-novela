import React from "react";
import styled from "@emotion/styled";
import { Global } from '@emotion/core';
import { globalStyles } from '@styles';
import { Link } from "gatsby"
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import mediaqueries from "@styles/media";
import LandingSub from "@components/LandingSub";
import LogoLanding from "@components/Logo/LogoLanding";
import background from "www/static/images/cave.jpeg";
import Logo from "@components/Logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Welcome({ location }) {
  
  return ( 
    <div>
      <SEO pathname={location.pathname} />     
      <Global styles={globalStyles} />
      <LogoContainer>
        <Logo />
      </LogoContainer>
        <Hero>
          <TextContainer>
            <Heading><p>Coming Soon!</p></Heading>  
            <LandingSub />
            <Social>
              <SocialItem href="https://facebook.com/thehumdaily"><FontAwesomeIcon icon={['fab', 'facebook']} /></SocialItem>
              <SocialItem href="https://instagram.com/thehumdaily"><FontAwesomeIcon icon={['fab', 'instagram']} /></SocialItem>
              <SocialItem href="https://twitter.com/thehumdaily"><FontAwesomeIcon icon={['fab', 'twitter']} /></SocialItem>
            </Social>
          </TextContainer>
        </Hero>
    </div>
  );
}  

export default Welcome;

const Social = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const SocialItem = styled.a`
  display: flex;
  padding: 0px 20px 0px 20px;
  font-size: 38px;
  color: #fff;
  transition: all 0.1s;
  &:hover {
    color: #4524EA;
  }
`

const Hero = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(63,61,136, 0), rgba(63,61,76, 0)), 
              url(${background}) no-repeat center center;
  background-size: cover;
  padding: 0 10px;
`

const LogoContainer = styled.div`
    z-index: 1000;
    display: flex;
    align-items: center;
    transform: translate(-50%);
    font-family: "Suisse Intl";
    font-size: 26px;
    font-weight: 400;
    color: black;
    left: 50%;
    top: 00px;
    margin: 0 auto;
    position: absolute;
    transition: all 0.15s ease;
    &:hover {
        ${a => a.theme.colors.accent};
        transition: all 0.15s ease;
        
    }
    ${mediaqueries.phablet`
      font-size: 22px;
    `};
    ${mediaqueries.phone_small`
      font-size: 18px;
    `};
`;

const TextContainer = styled.div`
  position: relative;
  margin: 50vh auto;
  width: 1200px;
  transform: translate(0%,-50%);
  ${mediaqueries.desktop`
    width: 100%;
  `};
`
const Heading = styled.div`
  text-align: center;
  font-size: 68px;
  padding-bottom: 10px;
  line-height: 1.2;
  color: #fff;
  font-style: italic;
  font-family: "Suisse Int'l Condensed";
  text-transform: uppercase;
  font-weight: 700;
  
  ${mediaqueries.tablet`
    padding-bottom: 30px;
    font-size: 59px;
    line-height: 1.2;
  `};
  ${mediaqueries.phablet`
    padding-bottom: 35px;
    font-size: 38px;
    line-height: 1.3;
  `};
  ${mediaqueries.phone_small`
    padding-bottom: 40px;
    font-size: 23px;
    line-height: 1.3;
  `};
`

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

const Label = styled.h2`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  font-weight: 500;
  text-transform: none;
  font-size: 30px;
  padding-bottom: 20px;
  text-align:left;
  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;
