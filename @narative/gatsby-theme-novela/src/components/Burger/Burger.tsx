import styled from '@emotion/styled';
import { bool,func } from 'prop-types';
import React from 'react';
import mediaqueries from "@styles/media";


const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;


const StyledBurger = styled.button`
  position: fixed;
  top: 16px;
  right: 30px;
  display: flex;
  flex-direction: column;
  
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 8000;
  ${mediaqueries.tablet`
      right: 38px;
    `}

  &:focus {
    outline: none;
  }

  div {
    width: 25px;
    margin: 2.5px;
    height: 3px;
    background: ${({ open }) => open ? '#4524ea' : p => p.theme.colors.navbar};
    border-radius: 10px;
    transition: all 0.20s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;