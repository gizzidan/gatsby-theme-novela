/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import { Title, AuthorLink, Slogan, Excerpt, MetaData, ListItem, TextContainer} 
    from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List2";

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 2;
  `}
`;

const HomeFeature = () => {
    const data = useStaticQuery(
      graphql`
        query { 
          allContentfulArticle(filter: {title: {eq: "A Sample Sponsored Post to See Why You Should Use This Service"}},
                               sort: {fields: date, order: DESC}, limit: 30) {
            edges {
              node {
                date(formatString: "MMM DD")
                excerpt
                slogan
                slug
                title
                category 
                hero {
                  sizes(maxWidth: 500, maxHeight: 300, quality: 100) {
                    ...GatsbyContentfulSizes_withWebp
                   }  
                }
                body {
                  childMdx {
                    timeToRead
                  }
                }
                author {
                  name
                  fields {
                    slug
                  }
                }
              }
            }
          }
        }
      `
    )
      return (
        <div>
          {
            data.allContentfulArticle.edges.slice(0,1).map((item, i) => (
              item.node.hero ? (
                <div key={i}>
                  <ListItem to={item.node.slug}>
                  <Sponsored>
                      <SponsoredLabel>Sponsored</SponsoredLabel>
                      <Image
                        fluid={item.node.hero.sizes}
                      />
                    </Sponsored>            
                      <TextContainer>
                      <Slogan>
                          <p>{item.node.slogan}</p>
                        </Slogan>
  
                        <Title>
                          {item.node.title}
                        </Title>
                        <Excerpt>
                          {item.node.excerpt}
                        </Excerpt>
                        <MetaData>
                         By <AuthorLink to={item.node.author[0].fields.slug}>{item.node.author[0].name}</AuthorLink>
                        </MetaData>
                      </TextContainer>
                    </ListItem>
                </div>
                
              ) : (<div></div>)
            ))
          }
         </div>
      )
    }
  
  export default HomeFeature;

const Sponsored = styled.div`
  position: relative;
  transition: transform 0.3s var(--ease-out-quad),
  box-shadow 0.3s var(--ease-out-quad);

  

  ${mediaqueries.tablet`
    margin-bottom: 0px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0px;
    box-shadow: none;
    
  `}
`;

const SponsoredLabel = styled.div`
  position: absolute;
  margin: 5px 5px 0px 0px;
  padding: 8px;
  font-size: 14px;
  border-radius: 1px;
  background-color: white;
  color: #131516;
  top: 0;
  right: 0;
  z-index: 100;
`