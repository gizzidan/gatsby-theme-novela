import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const OrderedList = styled.ol`
  font-family: ${p => p.theme.fonts.serif};
  list-style: none;
  counter-reset: list;
  color: ${p => p.theme.colors.articleText};
  position: relative;
  padding: 0px 0 28px 0px;
  margin: 0 auto;
  transition: ${p => p.theme.colorModeTransition};
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
    padding: 10px 0px 21px 25px;
    font-size: 19px;
  `};

  li {
    position: relative;
    padding-bottom: 10px;

    ${mediaqueries.tablet`
      padding-left: 30px;
    `};

    ${mediaqueries.phablet`
      padding-left: 30px;
      font-size: 19px;
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

  li::before {
    width: 3rem;
    display: inline-block;
    position: absolute;
    color: ${p => p.theme.colors.articleText};
  }

  li::before {
    counter-increment: list;
    content: counter(list) ".";
    font-weight: 400;
    position: absolute;
    left: -3rem;
    top: -0.3rem;
    font-size: 2rem;

    ${mediaqueries.tablet`
      left: 0;
    `};
  }
`;

export default OrderedList;
