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
  const gap = '30px';

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
      <Item to={article.slug} data-a11y="false"> 
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
            {article.date} · {article.timeToRead} min read
          </MetaData>
        </TextContainer>
      </Item>
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

const TextContainer = styled("div")`
  padding: 0px 0px 30px 0px;
  ${mediaqueries.phablet`
    padding: 20px 0px 20px 0px;
  `}
`;

const Slogan = styled.div`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 16px;
  line-height: 1.7;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};


  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    font-size: 13px;
    max-width: 100%;
    padding:  0;
    margin-bottom: 5px;
    -webkit-line-clamp: 2;
  `}
`;


const Item = styled(Link)`
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  text-align: left;
  position: relative;
  display: block;
  width: 550px;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.28s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover, &:focus {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px -20px rgba(0, 0, 0, 0.27),
      0 10px 20px -20px rgba(0, 0, 0, 0.3);
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
    width: 90vw;
    &:hover {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;

const Title = styled(Headings.h2)`
  font-size: 26px;
  line-height: 1.3;
  font-family: ${p => p.theme.fonts.serif};
  font-weight: 500 !important;
  text-transform: none;
  margin-bottom: -10px;
  transition: color 0.3s ease-in-out;

  ${mediaqueries.desktop`
    margin-bottom: 0px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;  
  `}

  ${mediaqueries.phablet`
    font-size: 20px;  
    padding: 0px;
    margin-bottom: -5px;
    -webkit-line-clamp: 3;
  `}
`;

const Excerpt = styled.div`
  font-family: ${p => p.theme.fonts.serif};
  ${limitToTwoLines};
  font-size: 18px;
  font-style: italic;
  letter-spacing: -.005em;
  line-height: 1.618;
  margin-top: 15px;
  margin-bottom: 5px !important;
  font-weight: 300;
  color: ${p => p.theme.colors.primary} !important;

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}


  ${mediaqueries.phablet`
    margin-bottom: 10px;
    max-width: 100%;
    padding:  0;
    -webkit-line-clamp: 2;
  `}
`;

const MetaData = styled.div`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 400;
  font-size: 15px;
  text-transform: none;
  font-style: normal;
  color: ${p => p.theme.colors.primary};
  

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  10px 0px 10px;
  `}
`;
