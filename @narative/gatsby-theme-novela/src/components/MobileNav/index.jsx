import React, { Component } from 'react';
import { Link } from 'gatsby';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from '@emotion/styled';
import mediaqueries from "@styles/media";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const opacity = "1";
const dropdownOpacity = "0.9";

const MobileItem = styled(Link)`
  font-size: 16px;
  display: flex;
  color: ${p => p.theme.colors.primary};
  opacity: 0.7;
  padding: 6px 25px 5px 0px;
  font-weight: 400;
  &:nth-last-child(1) {
    padding-right: 0px;
  }
  &:hover {
    opacity: 1;
  }
  ${mediaqueries.tablet`
    padding: 13px 20px 13px 0px;
    &:nth-last-child(1) {
      padding-right: 90px;
    }
    &:hover {
      opacity: 1;
    }
  `};
  ${mediaqueries.phablet`
    &:nth-last-child(1) {
      padding-right: 35px;
    }
  `};

`;

const MenuHeader = styled.p `
  font-size: 14px;
  display: flex;
  color: ${p => p.theme.colors.primary};
  opacity: 1;
  padding: 17px 25px 5px 15px;
  font-weight: 700;
  text-transform: uppercase;
  &:nth-last-child(1) {
    padding-right: 0px;
  }
  &:hover {
    opacity: 1;
  }
  ${mediaqueries.tablet`
    padding: 17px 20px 5px 0px;
    margin-bottom: -2px;
    &:nth-last-child(1) {
      padding-right: 90px;
    }
    &:hover {
      opacity: 0.65;
    }
  `};
  ${mediaqueries.phablet`
    &:nth-last-child(1) {
      padding-right: 35px;
    }
  `};

  `

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
    background-image: ${p => p.theme.colors.navGradient};
    width: 30%;
  }
  ${mediaqueries.phablet`
    padding: 0px 20px 0px 20px;
  `};
`;

const DropdownContent = styled.div`
  font-size: 16px !important;
  position: absolute;
  padding: 10px;
  background-color: ${p => p.theme.colors.background};
  min-width: 160px;
  z-index: 9000;
  box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.1);
  ${MobileItem}{
    display: block;
    padding: 6px 16px;
    text-align: left;
  }
  ${MenuHeader} {
    text-align: left;
    display: block;
  }
  
  ${mediaqueries.tablet`
    position: fixed;
    right: 0px;
    margin-top: 5px;
    ${MobileItem}, ${MenuHeader} {
      text-align: right;
    }
  `};
  ${mediaqueries.phablet`
  `};
`
const More = styled.p`
    color: ${p => p.theme.colors.primary} !important;
    opacity: 0.65;
    font-size: 22px;
    &:hover {
      opacity: 1;
    }
  `

const Dropdown = styled.button`
  padding-left: 20px;
  position: relative;
  display: inline-block;
  z-index: 10000;
`


class DropdownMenu extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  render () {
    return (
      <Dropdown>
        <More onClick={this.showMenu}><FontAwesomeIcon icon={faEllipsisH}/></More>
        {
          this.state.showMenu
            ? (
                <DropdownContent ref={(element) => {
                  this.dropdownMenu = element;
                  }}
                  >
          
                  <MenuHeader>Features</MenuHeader>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/garden-state-of-cannabis">Garden State of Cannabis</MobileItem>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/election-2020">Election 2020</MobileItem>  
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/">Feature Three</MobileItem> 


                  <MenuHeader>Sections</MenuHeader>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/">Things To Do</MobileItem>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} 
                              to="/latest">Latest</MobileItem>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/category/thoughts">Thoughts</MobileItem>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              
                              }} to="/category/culture">Culture</MobileItem>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/category/goings-on">Goings On</MobileItem>
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/">Hear the Hum</MobileItem>
                  
    
                  <MenuHeader>Resources</MenuHeader>

                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/">Contact</MobileItem>  
                  <MobileItem activeStyle={{
                              opacity: dropdownOpacity, fontWeight: '500'
                              }} to="/">Calendar</MobileItem>                      
                </DropdownContent>
                )
                : (
                  null
                )
            }
      </Dropdown>
    );
  }
}


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
              <DropdownMenu />
          </NavContainer>    
      )
  }
}
