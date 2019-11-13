import React, { useRef, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import throttle from 'lodash/throttle';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '@components/Layout';
import MDXRenderer from '@components/MDX';
import Progress from '@components/Progress';
import Section from '@components/Section';
import Subscription from '@components/Subscription';
import NavBarBasic from '@components/NavBarBasic';

import mediaqueries from '@styles/media';
import { debounce } from '@utils';

import ArticleAside from "../sections/article/Article.Aside";
import ArticleHero from "../sections/article/Article.Hero";
import ArticleControls from "../sections/article/Article.Controls";
import ArticlesNext from "../sections/article/Article.Next";
import ArticleSEO from "../sections/article/Article.SEO";
import ArticleShare from "../sections/article/Article.Share";
import { DiscussionEmbed } from 'disqus-react'
import { Twitter,Facebook,Mail,Reddit } from 'react-social-sharing'


const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
          }
        }
      }
    }
  }
`;

function Article({ pageContext, location }) {
  const sitePath = 'https://thehum.netlify.com'
  const contentSectionRef = useRef<HTMLElement>(null);

  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const results = useStaticQuery(siteQuery);
  const name = results.allSite.edges[0].node.siteMetadata.name;

  const { article, authors, mailchimp, next, category, tags } = pageContext;
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: article.slug },
  }

  useEffect(() => {
    const calculateBodySize = throttle(() => {
      const contentSection = contentSectionRef.current;

      if (!contentSection) return;

      /**
       * If we haven't checked the content's height before,
       * we want to add listeners to the content area's
       * imagery to recheck when it's loaded
       */
      if (!hasCalculated) {
        const debouncedCalculation = debounce(calculateBodySize);
        const $imgs = contentSection.querySelectorAll('img');

        $imgs.forEach($img => {
          // If the image hasn't finished loading then add a listener
          if (!$img.complete) $img.onload = debouncedCalculation;
        });

        // Prevent rerun of the listener attachment
        setHasCalculated(true);
      }

      // Set the height and offset of the content area
      setContentHeight(contentSection.getBoundingClientRect().height);
    }, 20);

    calculateBodySize();
    window.addEventListener("resize", calculateBodySize);

    return () => window.removeEventListener("resize", calculateBodySize);
  }, []);

  return (
    <Layout>
      <NavBarBasic />
      <ArticleSEO article={article} authors={authors} location={location} />
      <ArticleHero article={article} authors={authors} category={category} tags={tags} />
      <ArticleAside contentHeight={contentHeight}>
        <Progress contentHeight={contentHeight} />
      </ArticleAside>
      
      <ArticleBody ref={contentSectionRef}>
        <MDXRenderer content={article.body}>
          <ArticleShare />
        </MDXRenderer>
       
        <BottomContainer>
          <Tags>
          <span style={{ fontWeight: '500' }}>Tags: </span>
          {
         article.tags.map((tag, i) => (
            tag ? (
              <div key={i}>
                <Tag to={"/tag/" + tag.toString().replace(/\s+/g, '-')}>#{tag}</Tag>                 
              </div>
              
            ) : (<div></div>)
          ))
        }
          </Tags>
          <SocialContainer>
            <Twitter solid medium message="Checkout this article from The Hum" link={sitePath + '/' + article.slug}/>
            <Facebook solid medium link={sitePath + '/' + article.slug}/>
            <Mail solid medium subject="Checkout this article from The Hum" link={sitePath + '/' + article.slug}/>
          </SocialContainer>
          <DiscussionEmbed {...disqusConfig}/>
        </BottomContainer>
      </ArticleBody>
      {mailchimp && article.subscription && <Subscription />}
      {next.length > 0 && (
        <NextArticle narrow>
          <FooterNext>More articles from {name}</FooterNext>
          <ArticlesNext articles={next} />
          <FooterSpacer />
        </NextArticle>
      )}
    </Layout>
  );
}

export default Article;

const MobileControls = styled.div`
  position: relative;
  padding-top: 60px;
  transition: background 0.2s linear;
  text-align: center;

  ${mediaqueries.tablet_up`
    display: none;
  `}
`;

const ArticleBody = styled.article`
  position: relative;
  padding: 30px 0 35px;
  padding-left: 0px;
  transition: background 0.2s linear;

  ${mediaqueries.desktop`
    padding-left: 53px;
  `}
  
  ${mediaqueries.tablet`
    padding: 0px 0 0px;
  `}

  ${mediaqueries.phablet`
    padding: 0px 0;
  `}
`;

const NextArticle = styled(Section)`
  display: block;
`;

const FooterNext = styled.h3`
  position: relative;
  opacity: 0.25;
  margin-bottom: 100px;
  font-weight: 400;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 60px;
  `}

  &::after {
    content: '';
    position: absolute;
    background: ${p => p.theme.colors.grey};
    width: ${(910 / 1140) * 100}%;
    height: 1px;
    right: 0;
    top: 11px;

    ${mediaqueries.tablet`
      width: ${(600 / 1140) * 100}%;
    `}

    ${mediaqueries.phablet`
      width: ${(400 / 1140) * 100}%;
    `}

    ${mediaqueries.phone`
      width: 90px
    `}
  }
`;

const FooterSpacer = styled.div`
  margin-bottom: 65px;
`;

const BottomContainer = styled.div`
  width: 630px;
  margin: 10px auto;
  ${mediaqueries.phablet`
    width: 90vw;
  `};
`
const SocialContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  margin: auto;
  display: flex;
`;
const Tags = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${p => p.theme.colors.primary};  
  display: flex;
  padding-bottom: 100px;
  
`;
const Tag = styled(Link)`
  color: #131516 !important;
  line-height: 0;
  background: ${p => p.theme.colors.tagBackground};
  padding: 4px 8px;
  padding-bottom: 7px;
  border-radius: 3px;
  margin-left: 15px;
  transition: all 0.04s linear;
  &:hover {
    opacity: 0.6;
  }
`;

