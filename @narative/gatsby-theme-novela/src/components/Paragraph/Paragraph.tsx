import styled from "@emotion/styled";
import mediaqueries from "@styles/media";


const Paragraph = styled.p`
  line-height: 1.69;
  font-size: ${p => p.theme.fontSizes.p};
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.serif};
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto 36px;
  width: 100%;
  font-weight: 400;
  max-width: 630px;

  a {
    color: ${p => p.theme.colors.accent} !important;
    border-bottom: 1px solid;
    transition: all 0s linear;
    &:hover {
      text-decoration: none !important;
      opacity: 0.6 !important;
    }
  }

  b {
    font-weight: 800;
  }

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
  `};

  ${mediaqueries.phablet`
    line-height: 1.65;
    font-size: 17px;
    padding: 0 20px;
    margin: 0 auto 24px;
  `};


`;

export default Paragraph;
