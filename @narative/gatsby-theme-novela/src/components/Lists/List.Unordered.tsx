import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const UnorderedList = styled.ul`
  font-family: ${p => p.theme.fonts.serif};
  list-style: none;
  list-style-type: disc;
  line-height: 1.65;
  counter-reset: list;
  color: ${p => p.theme.colors.articleText};
  position: relative;
  padding: 0px 0 30px 30px;
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.p};
  width: 100%;
  max-width: 565px;

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    padding: 15px 0px 25px 0px;
  `};

  ${mediaqueries.phablet`
    line-height: 1.618;
    padding: 10px 25px 21px 45px;
    font-size: 18px;
  `};

  li {
    position: relative;
    padding-bottom: 20px;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 0px;
      font-size: 17px;
    `};

    p {
      ${mediaqueries.tablet`
        padding: 0;
      `};
    }
  }

  li > * {
    display: inline;
  }

  

    ${mediaqueries.tablet`
      left: 0;
    `};
  }
`;

export default UnorderedList;
