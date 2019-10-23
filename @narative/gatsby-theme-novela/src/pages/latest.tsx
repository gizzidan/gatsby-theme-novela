import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import mediaqueries from "@styles/media";
import NavBarBasic from "@components/NavBarBasic";
import ArticlesFullList from "../sections/articles/Articles.Full.List";


function ArticlesPage({ location, pageContext }) {

  return (
    <Layout>
      <NavBarBasic />
      <SEO pathname={location.pathname} />     
        <Section>
           <ArticlesFullList />
        </Section>
      <ArticlesGradient />
    </Layout>
  );
}

export default ArticlesPage;


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
