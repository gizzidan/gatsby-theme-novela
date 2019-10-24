import styled from '@emotion/styled';
import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
        <Label>Topics</Label>
        <MenuLink to='/latest'>Latest</MenuLink>
        <MenuLink to='/category/thoughts'>Thoughts</MenuLink>
        <MenuLink to='/category/culture'>Culture</MenuLink>
        <MenuLink to='/category/goings-on'>Goings On</MenuLink>
        <StyledDiv>
          <SecondaryLink>Home</SecondaryLink>
          <Spacer>/</Spacer>
          <SecondaryLink>About</SecondaryLink>
          <Spacer>/</Spacer>
          <SecondaryLink>Contact</SecondaryLink>
      </StyledDiv>
      </StyledMenu>
      
    )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;



const Spacer = styled.p`
  color: grey;
  padding: 0px 10px 0px 10px;
`
const StyledMenu = styled.div`
  display: flex;
  transform: ${({ open }) => open ? 'translateX(0vw)' : 'translateX(-100vw)'};
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  background: #4824ea;
  height: 100vh;
  text-align: left;
  padding: 40px;
  position: relative;
  top: 40;
  left: 0;
  transition: all 0.3s ease-in-out;
`;

const Label = styled.p`
  font-family: "GT America";
  font-weight: 500;
  text-transform: uppercase;
  color: white;
`

const MenuLink = styled(Link)`
  font-family: "Termina";
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px #fe4902;
  transition: all 0.08s linear;
  &:hover {
    text-shadow: 2px 2px 2px #fe4902,
                 2px 2px 6px black;
  }
`
const StyledDiv = styled.div`
  padding-top: 50px;
  font-weight: 400;
  font-size: 14px;
  font-family: "GT America";
  text-transform: uppercase;
  justify-Items: left;
  color: white;
  display: flex;
  width: 100%;
`
const SecondaryLink = styled(Link)`
  color: white;
`