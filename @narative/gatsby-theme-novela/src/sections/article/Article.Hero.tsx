import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql } from 'gatsby';
import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';
import mediaqueries from '@styles/media';
import { IArticle, IAuthor } from '@types';

import ArticleAuthors from './Article.Authors';
import ArticleCategory from './Article.Category';


interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}



const ArticleHero = ({ article, authors }: ArticleHeroProps) => {
  const query = graphql`
    {
      contentfulArticle {
        hero {
          title
        }
      }
    }
  `;
  const hasHeroImage =
    Object.keys(article.hero.full).length !== 0 &&
    article.hero.full.constructor === Object;

  return (
    <Hero>
      <Header>
        <Slogan>
            {article.slogan}
        </Slogan>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroExcerpt>{article.excerpt}</HeroExcerpt>
      </Header>
      <HeroImage id="ArticleImage__Hero">
        {hasHeroImage ? (
          <Image src={article.hero.full} />
        ) : (
          <ImagePlaceholder />
        )}
        <ImageCaption>{article.hero.description}</ImageCaption>
      </HeroImage>
      <Meta>
      <HeroSubtitle>By: <StyledLink to={authors[0].slug}>{article.author}</StyledLink>
            <span style={{ color: '#c2c2c2', padding: '5px'}}> / </span> {article.date}
            <span style={{ color: '#c2c2c2', padding: '5px'}}> / </span> 
            <StyledLink 
              
              to={"/category/" + article.category.toString().replace(/\s+/g, '-')}>
              {article.category}
              </StyledLink>
        </HeroSubtitle>
        </Meta>
    </Hero>
  );
};

export default ArticleHero;

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.articleText};
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.articleText};
  text-transform: capitalize;
`
const Slogan = styled("p")`
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 18px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.slogan};
  margin-bottom: 15px;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.desktop`
    
  `}

  ${mediaqueries.phablet`
    margin-bottom: 15px;
    font-size: 15px;
    max-width: 100%;
  `}
`;

const Hero = styled.div`'
  ${p => mediaqueries.phablet`
    &::before {
      content: "";
      width: 100%;
      height: 20px;
      background: ${p.theme.colors.primary};
      position: absolute;
      left: 0;
      top: 0;
      transition: ${p.theme.colorModeTransition};
    }

    &::after {
      content: "";
      width: 100%;
      height: 10px;
      background: ${p.theme.colors.background};
      position: absolute;
      left: 0;
      top: 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      transition: ${p.theme.colorModeTransition};
    }
  `}
`;

export const ArticleMeta = styled.div`
  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  text-align: left;
  position: relative;
  z-index: 10;
  margin: 100px auto 50px;
  max-width: 680px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 80px auto 50px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    max-width: 90vw;
    margin: 55px auto 30px;
    padding: 0 px;
  `}
`;

const Meta = styled.div`
  position: relative;
  z-index: 10;
  margin: 50px auto 0px;
  max-width: 680px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: 507px;;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 40px auto 30px auto;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`

  `}

`;

const HeroHeading = styled(Headings.h1)`
  font-size: 54px;
  font-family: ${p => p.theme.fonts.serifFine};
  margin-bottom: 20px;
  line-height: 1.1;
  text-transform: none;
  font-weight: 700;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 34px;
  `}

  ${mediaqueries.phablet`
    font-size: 30px;
    line-height: 1.1;
    margin-bottom: 12px;
  `}
`;

const HeroExcerpt = styled("p")`
  font-size: 22px;
  font-family: ${p => p.theme.fonts.sansSerif};
  margin-bottom: 40px;
  line-height: 1.6;
  font-style: normal;
  color: ${p => p.theme.colors.articleText};
  font-weight: 400;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 18px;
  `}

  ${mediaqueries.phablet`
    font-size: 18px;
  `}
`;

const HeroSubtitle = styled.div<{ hasCoAUthors: boolean }>`
  letter-spacing: -0.4px;
  text-transform: none;
  font-weight: 400 !important;
  font-family: ${p => p.theme.fonts.monospace};
  text-align: center;
  font-size: 17px;
  color: ${p => p.theme.colors.articleText};

  ${mediaqueries.tablet`

  `}

  ${p => mediaqueries.phablet`
    letter-spacing: -0.2px;
    padding: 0 4px;
    font-size: 15px;
    flex-direction: column;

    ${p.hasCoAUthors &&
      `
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          top: -10px;
          bottom: -10px;
          border: 1px solid ${p.theme.colors.horizontalRule};
          opacity: 0.5;
          border-radius: 5px;
        }
    `}


    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
`;

const ImageCaption = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: 14px;
  font-weight: 300;
  color: ${p => p.theme.colors.primary};
  opacity: 1;
  padding-top: 10px;
  text-align: center;
  ${mediaqueries.tablet`
    padding-right: 0px;
  `}
  ${mediaqueries.phablet`
    font-size: 12px;
  `}
`
const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  margin: 0 auto;
  

  ${mediaqueries.tablet`
    max-width: 100vw;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: 100vw;
    

    & > div {
      
    }
`}
`;
