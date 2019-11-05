import styled from "@emotion/styled";
import mediaqueries from "@styles/media";


const Paragraph = styled.p`
  line-height: 1.68;
  font-size: ${p => p.theme.fontSizes.p};
  color: ${p => p.theme.colors.articleText};
  font-family: ${p => p.theme.fonts.sansSerif};
  transition: ${p => p.theme.colorModeTransition};
  margin: 0 auto 42px;
  width: 100%;
  font-weight: 400;
  max-width: 610px;

  b {
    font-weight: 800;
  }

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px;
  `};

  ${mediaqueries.phablet`
    font-size: 18px;
    padding: 0 20px;
  `};
`;

export default Paragraph;
