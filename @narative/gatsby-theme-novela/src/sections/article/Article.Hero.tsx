import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Headings from '@components/Headings';
import Image, { ImagePlaceholder } from '@components/Image';
import { jsx } from 'theme-ui'
import mediaqueries from '@styles/media';
import { IArticle, IAuthor } from '@types';

import ArticleAuthors from './Article.Authors';
import ArticleCategory from './Article.Category';


interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}

const ArticleHero = ({ article, authors }: ArticleHeroProps) => {
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
      </HeroImage>
      <Meta>
      <HeroSubtitle>By: <StyledLink to={authors[0].slug}>{article.author}</StyledLink>
            <span style={{ color: '#c2c2c2', padding: '5px'}}> / </span> {article.date}
            <span style={{ color: '#c2c2c2', padding: '5px'}}> / </span> 
            <StyledLink 
              style={{ fontStyle: 'italic'}} 
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
  font-size: 16px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.slogan};
  margin-bottom: 10px;
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
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
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    max-width: 90vw;
    margin: 80px auto 30px;
    padding: 0 px;
  `}
`;

const Meta = styled.div`
  position: relative;
  z-index: 10;
  margin: 60px auto 10px;
  max-width: 680px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: 507px;;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 50px auto 40px auto;
  `}

`;

const HeroHeading = styled(Headings.h1)`
  font-size: 36px;
  font-family: "${p => p.theme.fonts.header}";
  margin-bottom: 30px;
  line-height: 1.3;
  text-transform: none;
  font-weight: 600;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 34px;
  `}
`;

const HeroExcerpt = styled("p")`
  font-size: 22px;
  font-family: ${p => p.theme.fonts.sansSerif};
  margin-bottom: 40px;
  line-height: 1.4;
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
  font-family: ${p => p.theme.fonts.sansSerif};
  text-align: center;
  font-size: 16px;
  color: ${p => p.theme.colors.articleText};

  ${p => mediaqueries.phablet`
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

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  margin: 0 auto;
  

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: 100vw;
    height: 220px;

    & > div {
      height: 220px;
    }
`}
`;
