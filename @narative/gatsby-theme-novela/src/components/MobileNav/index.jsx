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
  opacity: 0.65;
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
  margin-top: 50px;
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
                                opacity: opacity, fontWeight: '500'

                                }} 
                                
                                to={"/"}>Home</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                }} 
                                to="/latest">Latest</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                }} to="/category/thoughts">Thoughts</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                
                                }} to="/category/culture">Culture</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                }} to="/category/goings-on">Goings On</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                }} to="/garden-state-of-cannabis">State of Cannabis</MobileItem>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                }} to="/election-2020">Election 2020</MobileItem>
                </ScrollContainer>
                <Dropdown>
                    <More>More ↓</More>
                    <DropdownContent>
                    <MobileItem activeStyle={{
                                opacity: opacity, fontWeight: '500'
                                }} to="/election-2020">Election 2020</MobileItem>
                    </DropdownContent>
                </Dropdown>
            </NavContainer>    
        )
    }
}

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${p => p.theme.colors.background};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 9000;
  ${MobileItem} {
    display: block;
  }
`
const Dropdown = styled.div`
  padding-left: 20px;
  position: relative;
  display: inline-block;
  &:hover {
    ${DropdownContent}{
      display: block;
    }
  }
`

const More = styled.p`

`