import styled from '@emotion/styled';
import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import mediaqueries from "@styles/media";

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
  color: #c4c2cf;
  font-family: "Sectra";
  font-size: 18px;
  padding: 0px 10px 0px 10px;
`
const StyledMenu = styled.div`
  width: 33vw;
  display: flex;
  transform: ${({ open }) => open ? 'translateX(0vw)' : 'translateX(-100vw)'};
  flex-direction: column;
  justify-content: center;
  z-index: 4000;
  background: #3f3d4c;
  height: 100vh;
  text-align: left;
  padding: 40px;
  position: relative;
  top: 40;
  left: 0;
  transition: all 0.3s ease-in-out;
  ${mediaqueries.phablet`
    width: 100vw;
  `}
`;

const Label = styled.p`
  font-family: "Sectra";
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 10px;
  font-style: italic;
  text-transform: uppercase;
  color: white;
`

const MenuLink = styled(Link)`
  font-family: "Portrait";
  font-weight: 600;
  font-size: 54px;
  color: white;
  text-transform: uppercase;
  text-shadow: 2px 2px 1px #1c50b8;
  transition: all 0.08s linear;
  &:hover {
    text-shadow: 2px 2px 2px #6492f0,
                 1px 1px 10px #e1dfe6;
  }
`
const StyledDiv = styled.div`
  padding-top: 20px;
  font-size: 14px;
  font-family: "GT America";
  text-transform: uppercase;
  justify-Items: left;
  display: flex;
  width: 100%;
`
const SecondaryLink = styled(Link)`
  font-family: "Sectra";
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  &:hover {
    border-bottom: 1px solid;
  }
`