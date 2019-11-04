import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`
  transition: ${p => p.theme.colorModeTransition};
  margin: 15px auto 50px;
  opacity: 0.95;
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.serif};
  font-style: italic;
  border-left: 5px solid ${p => p.theme.colors.accent};
  

  ${mediaqueries.tablet`
    margin: 10px auto 35px;
  `};

  & > p {
    font-family: ${p => p.theme.fonts.sansSerif};
    
    padding-bottom: 0;
    padding-left: 30px;
    width: 100%;
    margin: 0 auto;
    font-size: 21px;
    line-height: 1.618;
    font-weight: 400;

    ${mediaqueries.tablet`
      font-size: 18px;
      
    `};

    ${mediaqueries.phablet`
      font-size: 19px;
      padding-left: 30px;
    `};
  }
`;

export default Blockquote;
