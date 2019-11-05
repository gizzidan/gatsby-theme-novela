import styled from '@emotion/styled';
import { css } from "@emotion/core";
import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import mediaqueries from "@styles/media";
import { useStaticQuery, graphql } from "gatsby"
import ScrollContainer from 'react-indiana-drag-scroll'


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

const Podcast = () => {
    const data = useStaticQuery(
      graphql`
        query { 
          allContentfulArticle(sort: {fields: date, order: DESC}, limit: 7) {
            edges {
              node {
                date(fromNow: true)
                excerpt
                slogan
                slug
                title
                category 
                hero {
                  fixed(width: 70, height: 70,) {
                    ...GatsbyContentfulFixed_withWebp
                   }  
                }
                body {
                  childMdx {
                    timeToRead
                  }
                }
                author {
                  name
                }
              }
            }
          }
        }
      `
    )
      return (
        <PodcastContainer>
          <Header>Checkout Our Podcasts</Header>
          
            <ScrollContainer 
              nativeMobileScroll='true'
              hideScrollbars='false'
              horizontal='true' 
              style={{ display: 'flex', overflowX: 'auto', paddingBottom: '15px'}}>

              {
                data.allContentfulArticle.edges.map((item, i) => (
                  item.node.hero ? (
                    <div key={i}>
                      <Card to={item.node.slug}>
                      <div style={{ display: 'flex'}}>
                        <PodcastImageContainer>
                          <Image fixed={item.node.hero.fixed}></Image>
                        </PodcastImageContainer>
                        <div>
                          <PodcastTitle>{item.node.title}</PodcastTitle>
                          <PodcastMeta>{item.node.date}</PodcastMeta>
                        </div>
                      </div>
                        
                          <PodcastExcerpt>{item.node.excerpt}</PodcastExcerpt>
                        
                      </Card>
                    </div>
                    
                  ) : (<div style={{ display: 'none'}}></div>)
                ))
              }
            </ScrollContainer>

        </PodcastContainer>
    )
}

export default Podcast;


const PodcastContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: block;
  justify-content: center;
  align-items: center;
  ${mediaqueries.phablet`
    padding-top: 20px;
    padding-bottom: 70px;
  `};
`
const Header = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-family: "Portrait";
  font-size: 32px;
  font-weight: 500;
  font-style: italic;
`

const Card = styled(Link)`
  color: ${p => p.theme.colors.primary} !important;
  display: block;
  margin-right: 20px;
  margin-top: 20px;
  padding: 15px;
  background-color: ${p => p.theme.colors.cardMain};
  min-width: 320px;
  height: 155px;
  border: 1px solid ${p => p.theme.colors.lightGrey};
`
const PodcastImageContainer = styled.div`
  
 
`
const PodcastTitle = styled.h2`
  ${limitToTwoLines}; 
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 500;
  font-size: 16px;
  padding-left: 15px;
  margin-top: -2px;

`
const PodcastMeta = styled.h2`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 300;
  font-size: 13px;
  padding-left: 15px;

`
const PodcastExcerpt = styled.p`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 400;
  font-size: 14px;
  padding-top: 10px;
  

`