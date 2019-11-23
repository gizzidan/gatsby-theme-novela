import styled from "@emotion/styled";
import { css } from "@emotion/core";

import mediaqueries from "@styles/media";

/**
 * Example:
 * <Heading.h1>Lorem Ipsum</Heading.h1>
 */

const commonStyles = p => css`
  font-weight: 400;
  color: ${p.theme.colors.articleText};
`;

const h1 = styled.h1`
  font-size: 52px;
  line-height: 1.15;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;

const h2 = styled.h2`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-size: 26px;
  line-height: 1.2;
  font-weight: 500 !important;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 21px;
  `};

  ${mediaqueries.tablet`
    font-size: 25px;
    line-height: 1.4;
  `};

  ${mediaqueries.phablet`
    font-size: 25px;
  `};
`;

const h3 = styled.h3`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 500 !important;
  ${commonStyles};

  ${mediaqueries.tablet`
    font-size: 22px;
  `};

  ${mediaqueries.phablet`
    font-size: 20px;
  `};
`;

const h4 = styled.h4`
  text-align: center;
  font-family: "F Grotesk";
  font-size: 36px;
  text-transform: uppercase;
  padding-top: 15px;
  padding-bottom: 50px;
  font-weight: 500 !important;
  line-height: 1.3;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 24px;
    padding-bottom: 30px !important;

  `};
`;

const h5 = styled.h5`
  font-size: 18px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 16px;
  `};
`;

const h6 = styled.h6`
  font-size: 16px;
  line-height: 1.45;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 14px;
  `};
`;

export default {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};
