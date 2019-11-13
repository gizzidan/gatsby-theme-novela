import React from 'react';
import { Link } from 'gatsby';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from '@emotion/styled';
import mediaqueries from "@styles/media";

const opacity = "1";

const MobileItem = styled(Link)`
  font-size: 16px;
  display: flex;
  color: ${p => p.theme.colors.primary};
  opacity: 0.6;
  padding: 6px 25px 5px 0px;
  font-weight: 400;
  &:nth-last-child(1) {
    padding-right: 0px;
  }
  &:hover {
    opacity: 1;
  }
  ${mediaqueries.tablet`
    &:nth-last-child(1) {
      padding-right: 90px;
    }
  `};
  ${mediaqueries.phablet`
    font-size: 15px;
    &:nth-last-child(1) {
      padding-right: 35px;
    }
  `};

`;

const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  background: ${p => p.theme.colors.background};
  align-items: center;
  position: relative;
  padding: 6px 35px 6px 35px;
  white-space: nowrap;
  margin-top: 55px;
  transition: all 0.15s linear;
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0px;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255,255,255,0), ${p => p.theme.colors.background} 60% );
    width: 18%;
  }
  ${mediaqueries.phablet`
    padding: 5px 35px 5px 35px;
  `};
`;
export default class MobileNav extends React.Component {
    state = {
        color: 'transparent',
        opacity: '0',
        logo: 'white',
        reverse: '-55px',
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 150) {
          this.setState({color: 'white', opacity: '1', logo: 'inherit', reverse: '0px',})
        } else {
          this.setState({color: 'transparent', opacity: '0', logo: 'white', reverse: '-55px',})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() {
        return(
            <NavContainer>
                <ScrollContainer 
                    nativeMobileScroll='true'
                    hideScrollbars='true'
                    horizontal='true' 
                    style={{ display: 'flex', overflowX: 'auto'}}
                    >
                    <MobileItem activeStyle={{
                                opacity: opacity,

                                }} 
                                
                                to={"/"}>Home</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity,
                                }} 
                                to="/latest">Latest</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity,
                                }} to="/category/thoughts">Thoughts</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity,
                                
                                }} to="/category/culture">Culture</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity,
                                }} to="/category/goings-on">Goings On</MobileItem>
                    <MobileItem>State of Cannabis</MobileItem>
                    <MobileItem>Election 2020</MobileItem>
                </ScrollContainer>
            </NavContainer>    
        )
    }
}

