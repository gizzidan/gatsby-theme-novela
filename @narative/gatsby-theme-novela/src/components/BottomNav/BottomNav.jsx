import styled from '@emotion/styled';
import React from 'react';
import Burger from '@components/Burger'

const BottomNav = () => {
    return (
      <StyledDiv>
				<Item>
					<p>Copy</p>
				</Item>
				<Item>
					<p>Mode</p>
				</Item>
				<Item>
					<p>Culture</p>
				</Item>
      </StyledDiv>
    )
}

export default BottomNav;

const StyledDiv = styled.div`
 
  justify-Items: center;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  display: grid;
  z-index: 1000;
  width: 100vw;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 40px;
  background-color: white;
  color: grey;
  border-top: 1px solid grey;
`

const Item = styled.div`
	margin-left: -5px;
	padding-top: 15px;
	font-size: 14px;
`