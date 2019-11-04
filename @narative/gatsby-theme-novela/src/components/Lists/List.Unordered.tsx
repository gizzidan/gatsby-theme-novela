import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const UnorderedList = styled.ul`
  font-family: ${p => p.theme.fonts.sansSerif};
  list-style: none;
  list-style-type: disc;
  counter-reset: list;
  color: ${p => p.theme.colors.articleText};
  position: relative;
  padding: 15px 0 30px 30px;
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.p};

  width: 100%;
  max-width: ${p => p.theme.widths.regular};

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 440px;
    padding-left: 0px;
  `};

  ${mediaqueries.phablet`
    padding-left: 20px;
  `};

  li {
    position: relative;
    padding-bottom: 15px;

    ${mediaqueries.tablet`
      padding-left: 10px;
    `};

    ${mediaqueries.phablet`
      padding-left: 10px;
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
