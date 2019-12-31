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
  line-height: 1.3;
  ${commonStyles};

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.2;
  `};
`;

const h2 = styled.h2`
  font-family: "Suisse Intl";
  font-size: 24px;
  line-height: 1.35;
  font-style: normal;
  padding-bottom: 10px;
  font-weight: 500 !important;
  ${commonStyles};

  ${mediaqueries.desktop`
    
  `};

  ${mediaqueries.tablet`

  `};

  ${mediaqueries.phablet`
    font-size: 22px;
    padding-bottom: 5px !important;
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
  font-family: "Suisse Intl";
  font-size: 35px;
  text-transform: uppercase;
  font-style: normal;
  padding-top: 15px;
  padding-bottom: 50px;
  font-weight: 700 !important;
  line-height: 1.25;
  ${commonStyles};

  ${mediaqueries.phablet`
    font-size: 23px;
    padding-top: 10px !important;
    padding-bottom: 25px !important;

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
