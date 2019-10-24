import styled from '@emotion/styled';
import { bool,func } from 'prop-types';
import React from 'react';

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
  position: absolute;
  top: 16px;
  left: 22px;
  display: flex;
  flex-direction: column;
  width: 10px;
  height: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 4000;

  &:focus {
    outline: none;
  }

  div {
    width: 25px;
    margin: 2.5px;
    height: 3px;
    background: ${({ open }) => open ? '#fff' : p => p.theme.colors.primary};
    border-radius: 10px;
    transition: all 0.10s linear;
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