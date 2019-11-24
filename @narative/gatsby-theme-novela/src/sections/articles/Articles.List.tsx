import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Headings from "@components/Headings";
import Image, { ImagePlaceholder } from "@components/Image";

import mediaqueries from "@styles/media";
import { IArticle } from "@types";

import { GridLayoutContext } from "./Articles.List.Context";

/**
 * Tiles
 * [LONG], [SHORT]
 * [SHORT], [LONG]
 * [SHORT], [LONG]
 *
 * or ------------
 *
 * Rows
 * [LONG]
 * [LONG]
 * [LONG]
 */

export interface ArticlesListProps {
  articles: IArticle[];
  alwaysShowAllDetails?: boolean;
}

interface ArticlesListItemProps {
  article: IArticle;
  narrow?: boolean;
}

function ArticlesList({ articles, alwaysShowAllDetails }: ArticlesListProps) {
  if (!articles) return null;
  const sectiongap = '60px';
  const gap = '25px';

  /**
   * We're taking the flat array of articles [{}, {}, {}...]
   * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
   * This makes it simpler to create the grid we want
   */
  const articlePairs = articles.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);


  return (
    <div style={{
      marginBottom: sectiongap, 
      display: 'grid',
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
      gridGap: gap,
  }}>
      {articles.map((item, i) => {

        return (
          <div
            key={i}
            
          >
            <ListItem article={item}/>
          </div>
        );
      })}
    </div>
  );
}

export default ArticlesList;

const ListItem = ({ article }: ArticlesListItemProps) => {
  if (!article) return null;
  

  return (
    <div style={{
      display: 'grid',
      justifyItems: 'center',
      gridTemplateColumns: '1fr',
          }}>
      <Item to={article.slug} data-a11y="false"> 
       <Image style={{ margin: '0 0 1em 1em', float: 'right', width: '90px', height: '90px'}} src={article.hero.regular}></Image>
        <TextContainer>
          <Slogan>
            <p>{article.slogan}</p>
          </Slogan>
          <Title >
            {article.title}
          </Title>
          <Excerpt>
            {article.excerpt}
          </Excerpt>
          <MetaData>
            <AuthorLink to={"/authors/"+article.author.toString().replace(/\s+/g, '-').toLowerCase()}>{article.author}</AuthorLink> · {article.date}
          </MetaData>
        </TextContainer>
      </Item>
    </div>
      
  );
};


const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

export const AuthorLink = styled(Link)`
  color: black;
  font-weight: 500;
  color: ${p => p.theme.colors.articleText};
  &:hover {
    border-bottom: 1px solid;
  }
`

const TextContainer = styled("div")`
  width: 100%;
  padding: 0px 0px 30px 0px;
  ${mediaqueries.phablet`
    padding: 0px 0px 20px 0px;
  `}
`;

const Slogan = styled.p`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 5px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};


  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    font-size: 14px;
    max-width: 100%;
    padding: 0px;
    margin-bottom: 5px;
    -webkit-line-clamp: 2;
  `}
`;


const Item = styled(Link)`
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  display: block;
  text-align: left;
  position: relative;
  width: 550px;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.28s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover, &:focus {
    transform: translateY(-1px);
  }


  &:hover h2,
  &:focus h2 {
   
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
    
  }

  ${mediaqueries.phablet`
    grid-template-columns: 1fr;
    padding-bottom: 10px;
    width: 90vw;
    &:hover {
      transform: none;
      box-shadow: initial;
    }

   
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 22px;
  line-height: 1.25 !important;
  font-family: "Noe Text";
  font-weight: 900 !important;
  text-transform: none;
  margin-bottom: 5px;
  transition: color 0.3s ease-in-out;
  &:hover {
    opacity: 0.5;
  }

  ${mediaqueries.desktop`
    margin-bottom: 0px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
  `}

  ${mediaqueries.phablet`
    font-size: 21px;  
    padding: 0px;
    margin-bottom: 7px;
    -webkit-line-clamp: 3;
  `}
`;

const Excerpt = styled.p`
  font-family: ${p => p.theme.fonts.serif};
  font-size: 18px;
  font-style: normal;
  line-height: 1.4;
  margin-bottom: 10px !important;
  font-weight: 400;
  opacity: 0.75;
  color: ${p => p.theme.colors.primary} !important;

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}


  ${mediaqueries.phablet`
    font-size: 17px;
    margin-bottom: 5px;
    max-width: 100%;
    padding:  0;
    -webkit-line-clamp: 2;
  `}
`;

export const MetaData = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 500;
  font-size: 15px;
  text-transform: none;
  font-style: normal;
  opacity: 0.8;
  color: ${p => p.theme.colors.articleText};
  

  ${mediaqueries.phablet`
    font-size: 16px;
    max-width: 100%;
  `}
`;