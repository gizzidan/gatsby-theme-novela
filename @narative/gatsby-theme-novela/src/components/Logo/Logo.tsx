import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";
import mediaqueries from "@styles/media";

const Logo = () => {
  const [colorMode] = useColorMode();
  const fill = colorMode === "dark" ? "#fff" : "#000";
  return (
    <LogoContainer>
      <svg width="100"
        height="100" version="1.1" id="Layer_1" 
	 viewBox="0 0 200 200">

		<path d="M11.4,34.7c0.1-3.8-1.2-4.5-3.1-3.4c-1.5,0.8-2.9,2.4-3,4.2c0,1,0.2,1.4,1.1,1.8c1.3,0.4,4.9,1.2,6.2,3.1
			c1.2,1.6,1.7,4.7,1.1,9.6c-1,8.9-3.4,10.8-6.6,7.4c-3.2-3.5-5.5-8.5-5.7-12.5c1,0.3,2,0.5,3,0.8c0,3.2,1.2,5.4,3,6.6
			c1.3,0.9,2.9,0.4,3.1-2.8c0.2-2.1-0.3-3.4-1.6-4.4c-1.4-1.2-4.5-2.9-5.6-4c-0.9-1.1-1.4-2.1-1.4-3.8c0-3.1,2.7-7.8,6.6-10.9
			c4.3-3.4,7.5-1.2,6.7,7.2C13.9,33.9,12.6,34.3,11.4,34.7z" fill={fill} />
		<path  d="M15,63.6c0.1-14.6,4.5-29.1,4.6-43.7c1.4-0.8,2.8-1.5,4.1-2.3c0.2,6.3-0.7,12.5-1.8,18.8
			c2.5-0.3,5.1-0.6,7.7-0.9c1.6-7.3,2.7-14.5,1.8-21.8c1.3-0.6,2.6-1.2,3.9-1.8c3.9,19.9-10.4,39.7-6.5,59.6
			c-1.3-0.6-2.6-1.2-3.8-1.8c-1-8.1,0.5-16.2,2.4-24.3c-2.3-0.2-4.6-0.3-6.9-0.5c-1.3,7-2.4,14-2.2,21C17.1,65.1,16,64.3,15,63.6z"
			fill={fill}/>
		<path  d="M34.8,42c6.4-17.3,7.6-33.6,11.3-36C51.9,4,64.6,20,53.6,42c-2.4,6.4-6.3,15.9-7.1,23.5
			C45.2,73,47,78.7,42.2,77.4C35.1,75.4,27.8,61.9,34.8,42z M49.5,41.8c5.8-14.5,3.6-24.3-0.3-23.5c-3.5,0.8-5.8,10.5-10.2,23.6
			c-2.9,7.7-4.5,22.2,0.4,23.3C42.3,66,43.7,56,49.5,41.8z" fill={fill}/>
		<path  d="M66.4,3.1C69.2,2.8,81,9.2,78.7,24.4C76.6,34.9,71.2,42.1,67.6,45c0.1,0.9,0.2,2.5,0.1,3.6
			c-1.1,7.5-4.4,22.6,6.8,32.1c-1.7,0-3.3-0.1-5-0.2c-8.2-7.3-8.4-19.2-7.1-26.8c0.3-3.3,0-4.7-1.5-4.7c-0.9,0-1.7,0-2.6-0.1
			c-3.5,10.2-5.3,20.5,1.9,30.7c-1.5-0.2-3.1-0.4-4.6-0.7C39.3,54.2,74.2,29.3,57.9,4.4C60.7,3.8,63.5,3.4,66.4,3.1z M66.6,16.7
			c0.6,6.8-1.4,13.5-3.9,20.3c0.9,0,1.8,0,2.7,0c1.4,0,2.4-0.1,3.2-0.5c1.7-0.8,4-3.9,5.5-10.1c1.4-6.4-0.5-10.2-2.4-10
			C70,16.4,68.3,16.5,66.6,16.7z" fill={fill}/>
		<path  d="M76.4,80.8c-21-26,21-52.1,0-78.1c5,0,10.2,0.4,15.6,1c3.2,4.5,4.6,8.9,5,13.4c-3.5-0.3-7-0.5-10.5-0.6
			c0.6,5.7-0.8,11.3-2.7,17c3.3,0,6.5,0.1,9.7,0.2c-1.5,4.3-3.3,8.7-4.9,13c-3.3,0.1-6.7,0.1-10,0.1C76,53.5,74,60.2,74.7,67
			c3.7-0.1,7.4-0.3,11.1-0.6c0.3,4.5,1.8,8.9,4.9,13.4C86.2,80.4,81.4,80.8,76.4,80.8z" fill={fill}/>
		<path  d="M109.8,27.5c1.3-7.8-0.8-10.8-2.7-11.2c-1.6-0.3-2.5,1.9-3.2,7.3c-0.4,2.8-0.5,4.6,0.1,6.2
			c0.9,2.4,3.8,5.9,4.4,9.4c0.6,3.1-0.4,8.3-2.1,16.4c-3.1,14.3-1.3,22.2-5.1,23.4c-3.1,1.3-15.8-6.7-11.5-24.4
			c1.5-0.3,2.9-0.6,4.4-1c-2.3,9.8,0.8,13.6,3.1,13.1c1.9-0.3,3.5-3.5,4.6-9.8c0.8-4.1,0.7-6.4-0.5-8c-1.4-1.8-4.2-5.3-3.9-9.8
			c0.1-3.8,1.4-8.3,2.5-14.9c2.2-13.3-2-21.1,3.1-20.1c5.2,1.2,13.5,9.5,10.5,23.3C112.3,27.6,111,27.6,109.8,27.5z" fill={fill}/>
		<path  d="M110,74.4c-7.4-21.8,13.3-43.6,6-65.4c1.4,0.5,2.8,1,4.2,1.5c5.4,20.8-11.8,41.6-6.4,62.4
			C112.5,73.5,111.3,74,110,74.4z" fill={fill}/>
		<path  d="M131.4,15.9c5.2,3.5,6.4,14.2,4.6,25.9c-1.9,12.2-5,22.3-11,25.9c-2.6,1.3-5.2,2.5-7.6,3.6
			c-3.8-19.8,10.3-39.5,6.5-59.3C126.6,13.2,129.1,14.5,131.4,15.9z M127.8,23.8c-1,12-5.6,24-6.6,36c1.2-0.3,2.4-0.7,3.5-1
			c3.1-1,5.5-5,7.5-16.6c2-10.9,1-16.1-1.7-17.3C129.7,24.5,128.8,24.1,127.8,23.8z" fill={fill}/>
		<path  d="M137,61.1c0.4-12.9,3.1-25.8,3.5-38.7c3.6,3,6.8,6.3,10.3,9.9c0,1.1,0,2.2,0,3.3c-2.6-1.7-5.1-3.3-7.6-4.7
			c-0.2,2.4-0.4,4.9-0.6,7.3c2.6,0.4,5.1,0.9,7.6,1.4c0,1.1,0,2.3,0,3.4c-2.6,0.3-5.3,0.6-8.1,0.9c-0.3,2.9-0.5,5.8-0.7,8.7
			c3.4-1.5,6.6-3.1,9.6-4.9c0,1.1,0,2.2,0,3.2C146.8,54.7,142,58,137,61.1z" fill={fill}/>
</svg>

      
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
