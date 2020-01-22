import styled from "@emotion/styled";
import mediaqueries from "@styles/media";


export const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 10px auto 52px;
  color: ${p => p.theme.colors.articleText};
  font-style: normal;
  padding-left: 35px;
  max-width: 630px;
  

  ${mediaqueries.tablet`
    margin: 0px auto 40px;
    max-width: 90vw;
    padding-left: 15px;
  `};
  ${mediaqueries.phablet`
    margin: 10px auto 35px;
    max-width: 90vw;
    padding-left: 15px;
  `};

  & > p {
    font-family: "${p => p.theme.fonts.sansSerif}";
    background: ${p => p.theme.colors.blockquote};
    padding: 30px;
    width: 100%;
    margin: 0 auto;
    font-size: 19px;
    line-height: 1.618;
    font-style: normal;
    font-weight: 300;

    ${mediaqueries.tablet`
      font-size: 17px;
      
    `};

    ${mediaqueries.phablet`
      
    `};
  }
  & > .source {
    padding-top: 0px;
    margin-top: -7px;
    text-align: left;
    text-transform: none;
    font-style: normal !important;
   
    font-weight: 500;
    font-family: "Suisse Int'l Condensed";
    ${mediaqueries.tablet`
      font-size: 17px;
      
    `};
  }
`;

export default Blockquote;
