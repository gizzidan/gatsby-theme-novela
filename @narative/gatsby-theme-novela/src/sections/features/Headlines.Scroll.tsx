import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import merge from 'lodash/merge';
import { limitToTwoLines } from '@narative/gatsby-theme-novela/src/sections/articles/Articles.List2';


export const Grids = styled.div`
  margin-top: 50px;
  ${mediaqueries.desktop`
    margin-top: 50px;
  `}
  ${mediaqueries.phablet`
    margin-top: 50px;
 `}
`
export const HeroContainer = styled.div`
  width: 1366px;
  margin: auto;
  padding: 0 4rem;
  margin-top: 44px;
  ${mediaqueries.desktop`
    width: 850px;
 `}
 ${mediaqueries.tablet`
    width: 100vw;
    padding: 0;
 `}
  ${mediaqueries.phablet`
   margin-top: 48px;
   
 `}
`
export const ViewAll = styled(Link)`
  color: ${p => p.theme.colors.accent};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    border-bottom: 1px solid;
  }
`

export const ArticlesGradient = styled.div`
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


export const HeadlinesContainer = styled.div`
  width: 100%;
  height: 290px;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  padding-bottom: 0px;  
  ${mediaqueries.desktop`
    grid-template-columns: 200px 4fr;
    grid-gap: 0px;
  `};
  ${mediaqueries.phablet`
    padding-top: 0px;
    margin-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 80px;
    display: block;
  `};
`
export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${mediaqueries.phablet`
    display: block;
`};
`
export const Header = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-family: "Noe Text";
  font-size: 25px;
  font-weight: 900;
  font-style: normal;
  margin-top: 20px;
  line-height: 1.2;
  ${mediaqueries.phablet`
    font-size: 23px;
  `};
`
export const SubHeader = styled.p`
  color: ${p => p.theme.colors.primary} !important;
  opacity: 0.8;
  font-family: ${p => p.theme.fonts.serif};
  padding-top: 3px;
  padding-bottom: 20px;
  font-size: 18px;
`

export const Card = styled(Link)`
  color: ${p => p.theme.colors.primary} !important;
  display: block;
  margin-right: 14px;
  margin-top: 20px;
  padding: 0px;
  background-color: ${p => p.theme.colors.cardMain};
  max-width: 260px;
  &:hover, &:focus {
    h2 {
      opacity: 0.6;
    }
  }
`
export const ScrollImageContainer = styled.div`
  margin-bottom: 15px;
  
 
`

export const PodImage = styled(Image)`
  box-shadow: 0 7px 12px -4px rgba(0, 0, 0, 0.24),
    0px 4px 8px -4px rgba(0, 0, 0, 0.28);
`
export const HeadlineTitle = styled.h2`
  font-family: "Suisse Int'l Condensed";
  font-weight: 700;
  line-height: 1.2;
  font-size: 20px;
  margin-top: -2px;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

`

export const PodcastExcerpt = styled.p`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.serif};
  display: none;
  font-weight: 400;
  font-size: 15px;
  padding-top: 10px;
  opacity: 0.85;
`

export const StyledDiv = styled.div`
  margin-bottom: 55px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  ${mediaqueries.tablet`
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
 `}
`