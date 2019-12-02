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
                  fixed(width: 160, height: 160,) {
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
          <div>
            <Header>Listen to The Hum Podcasts</Header>
            <SubHeader>Daily New + Commentary</SubHeader>
            <SeeAll to='/'>All Podcasts →</SeeAll>
          </div>


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
                      <InnerContainer>
                        <PodcastImageContainer>
                          <PodImage fixed={item.node.hero.fixed}></PodImage>
                        </PodcastImageContainer>
                        <div>
                          
                          <PodcastTitle>{item.node.title}</PodcastTitle>
                          
                        </div>
                      </InnerContainer>
                      
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
  height: 315px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  
  padding-bottom: 30px;  
  ${mediaqueries.phablet`
    padding-top: 0px;
    padding-bottom: 20px;
    margin-bottom: 140px;
    display: block;
  `};
`
const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${mediaqueries.phablet`
    display: block;
`};
`
const Header = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-family: "Noe Text";
  font-size: 25px;
  font-weight: 900;
  font-style: normal;
  margin-top: 20px;
  line-height: 1.2;
  ${mediaqueries.phablet`
    font-size: 23px;
  `};
`
const SubHeader = styled.p`
  color: ${p => p.theme.colors.primary} !important;
  opacity: 0.8;
  font-family: ${p => p.theme.fonts.serif};
  padding-top: 3px;
  padding-bottom: 20px;
  font-size: 18px;
`
const SeeAll = styled(Link)`
  color: ${p => p.theme.colors.accent};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    border-bottom: 1px solid;
  }
`
const Card = styled(Link)`
  color: ${p => p.theme.colors.primary} !important;
  display: block;
  margin-right: 20px;
  margin-top: 20px;
  padding: 0px;
  background-color: ${p => p.theme.colors.cardMain};
  min-width: 150px;
  height: 250px;
  &:hover, &:focus {
    h2 {
      opacity: 0.6;
    }
  }
`
const PodcastImageContainer = styled.div`
  margin-bottom: 15px;
 
`

const PodImage = styled(Image)`
  box-shadow: 0 7px 12px -4px rgba(0, 0, 0, 0.24),
    0px 4px 8px -4px rgba(0, 0, 0, 0.28);
`
const PodcastTitle = styled.h2`
  font-family: "Noe Text";
  font-weight: 700;
  line-height: 1.2;
  font-size: 16px;
  margin-top: -2px;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

`

const PodcastExcerpt = styled.p`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.serif};
  display: none;
  font-weight: 400;
  font-size: 15px;
  padding-top: 10px;
  opacity: 0.85;
`