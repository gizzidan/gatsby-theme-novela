import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import mediaqueries from "@styles/media";
import NavBar from "@components/NavBar";

import ArticlesFeatured from "../sections/articles/Articles.Featured";
import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList2 from "../sections/articles/Articles.List2";
import MobileNav from '@components/MobileNav';


function ArticlesPage({ location, pageContext }) {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <NavBar />
      <ArticlesFeatured /> 
      <SEO pathname={location.pathname} />
      <Section>
           <ArticlesList2 />
           <ArticlesGradient />   
      </Section>
    </Layout>
  );
}

export default ArticlesPage;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 165px 1255px;
  grid-gap: 20px;
  max-width: 1490px;
  margin: 0 auto;
  ${mediaqueries.desktop_mediumlarge`
    grid-gap: 0px;
    display: block;
    max-width: 1190px;
    padding: 0 40px;
  `};
  ${mediaqueries.desktop`
    display: block;
    max-width: 850px;
  `};
  ${p =>
    p.narrow
      ? mediaqueries.tablet`
          padding: 0 2rem;
          max-width: 527px;
        `
      : mediaqueries.tablet`
          padding: 0 1.618rem;
          max-width: 567px;
        `}
  ${mediaqueries.phablet`
    max-width: 100%;
    
  `};
  ${mediaqueries.phone_small`
    padding: 0 10px;
  `};
`

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

const Label = styled.h2`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: ${p => p.theme.colors.primary};
  font-weight: 500;
  text-transform: none;
  font-size: 30px;
  padding-bottom: 20px;
  text-align:left;
  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;
