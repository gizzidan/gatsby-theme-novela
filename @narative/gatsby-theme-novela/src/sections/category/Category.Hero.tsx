import React from 'react';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const CategoryHero = ({ category }) => {
  return (
    <Hero>
      <Label>{category}</Label>
    </Hero>
  );
};

export default CategoryHero;

const Hero = styled.section`
  
`;

const Label = styled.h2`
  color: ${p => p.theme.colors.primary};
  -webkit-text-fill-color: transparent; 
  -webkit-text-stroke: 1.5px ${p => p.theme.colors.primary};
  font-family: "Portrait";
  font-weight: 600;
  text-transform: capitalize;
  font-size: 150px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-top: 50px;
  ${mediaqueries.desktop`
    font-size: 100px;
  `};

  ${mediaqueries.phablet`
    -webkit-text-stroke-width: 1px;
    font-size: 74px;
    font-weight: 500;
    line-height: 1.3;
  `};
`;

const Subheading = styled.div`
  margin: 0 auto;
  max-width: 450px;
  color: ${p => p.theme.colors.grey};
  font-size: 18px;
  font-family: ${p => p.theme.fonts.sansSerif};
  line-height: 1.4;
  text-align: center;
  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;