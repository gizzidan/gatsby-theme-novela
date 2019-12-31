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
        <HeroHeading>{article.title}</HeroHeading>
        <HeroExcerpt>{article.excerpt}</HeroExcerpt>
        <Meta>
          <HeroSubtitle>By <StyledLink to={authors[0].slug}>{article.author}</StyledLink> in&nbsp;
                <StyledLink 
                  to={"/category/" + article.category.toString().replace(/\s+/g, '-')}>
                  {article.category}
                  </StyledLink>
                <span style={{ padding: '4px'}}> · </span> {article.date}
            </HeroSubtitle>
          </Meta>
      </Header>
      <HeroImage id="ArticleImage__Hero">
        {hasHeroImage ? (
          <Image src={article.hero.full} />
        ) : (
          <ImagePlaceholder />
        )}
      </HeroImage>
      <ImageCaption>{article.hero.description}</ImageCaption>
    </Hero>
  );
};

export default ArticleHero;

const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.accent};
  text-transform: capitalize;
  border-bottom: 1px solid;
  font-weight: 500;
  &:hover {
    opacity: 0.6;
  }
`
const Slogan = styled("p")`
  font-family: ${p => p.theme.fonts.slogan};
  display: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.slogan};
  margin-bottom: 15px;
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.desktop`
    
  `}

  ${mediaqueries.phablet`
    margin-bottom: 15px;
    font-size: 15px;
    max-width: 100%;
  `}
`;

const Hero = styled.div`
  margin-bottom: 30px;
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
  margin: 120px auto 35px;
  max-width: 780px;

  ${mediaqueries.desktop`
    padding-left: 53px;
    max-width: calc(507px + 53px);
    margin: 100px auto 50px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 30px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    max-width: 90vw;
    margin: 90px auto 30px;
    padding: 0 px;
  `}
`;

const Meta = styled.div`
  position: relative;
  z-index: 10;
  

  ${mediaqueries.desktop`
    
    
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 15px auto 10px auto;
   
  `}

  ${mediaqueries.phablet`
    max-width: 95vw;
  `}

`;

const HeroHeading = styled(Headings.h1)`
  font-size: 48px;
  font-family: "Noe Text";
  margin-bottom: 10px;
  line-height: 1.12;
  text-transform: none;
  font-weight: 900;
  font-style: normal;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    margin-bottom: 10px;
    font-size: 42px;
  `}

  ${mediaqueries.phablet`
    font-size: 28px;
    margin-bottom: 12px;
  `}
`;

const HeroExcerpt = styled("p")`
  font-size: 22px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  line-height: 1.5;
  font-style: normal;
  color: ${p => p.theme.colors.primary};
  font-weight: 400;

  ${mediaqueries.tablet`
    margin-bottom: 2px;
    font-size: 18px;
  `}

  ${mediaqueries.phablet`
    font-size: 18px;
    
  `}
`;

const HeroSubtitle = styled.div<{ hasCoAUthors: boolean }>`
  text-transform: none;
  font-weight: 400 !important;
  font-family: ${p => p.theme.fonts.monospace};
  text-align: left;
  font-size: 17px;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.tablet`
    
  `}

  ${mediaqueries.phablet`
    

    font-size: 14px;
    flex-direction: column;

    strong {
      display: block;
      font-weight: 500;
      margin-bottom: 5px;
    }
  `}
  ${mediaqueries.phone_small`
    font-size: 13px;
  `}
`;

const ImageCaption = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.colors.primary};
  opacity: 1;
  font-style: italic;
  padding-top: 2px;
  text-align: center;
  ${mediaqueries.tablet`
    padding-right: 0px;
  `}
  ${mediaqueries.phablet`
    font-size: 13px;
  `}
`
const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 23px;
  box-shadow: 0 28px 58px -7px rgba(0, 0, 0, 0.18),
  0 16px 32px -16px rgba(0, 0, 0, 0.20);
  
  ${mediaqueries.desktop`

  `}
  ${mediaqueries.tablet`
    max-width: 100vw;
    margin-bottom: 30px;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    margin-bottom: 30px;
    width: 100vw;
    

    & > div {
      
    }
`}
`;
