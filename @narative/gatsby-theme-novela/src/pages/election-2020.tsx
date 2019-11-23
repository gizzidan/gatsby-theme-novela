import React from "react";
import styled from "@emotion/styled";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby"
import mediaqueries from "@styles/media";
import NavBarBasic from "@components/NavBarBasic";
import Image from 'gatsby-image';
import {ImageContainer, Label, SeeAll, Item, Title, Slogan, Excerpt, MetaData, TextContainer} from '@narative/gatsby-theme-novela/src/sections/articles/Articles.List2';
import FeatureTwo from '@components/Ads/FeatureTwo';
import ScrollContainer from 'react-indiana-drag-scroll';
import { PodcastExcerpt,
  StyledDiv,
  HeadlineTitle,
  PodImage,
  ScrollImageContainer,
  Card,
  SubHeader,
  Header,
  InnerContainer,
  HeadlinesContainer,
  ArticlesGradient,
  ViewAll,
  HeroContainer,
  Grids } from '@narative/gatsby-theme-novela/src/sections/features/Headlines.Scroll.tsx';


function Election2020({ location }) {
    const sectiongap = '55px';
    const gap = '25px';
    const data = useStaticQuery(
        graphql`
          query { 
            file(relativePath: { eq: "election-2020.png" }) {
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            allContentfulArticle(filter: {category: {ne: "sponsor content"}}, sort: {fields: date, order: DESC}, limit: 30) {
              edges {
                node {
                  date(formatString: "MMM DD")
                  excerpt
                  slogan
                  slug
                  title
                  category
                  tags
                  hero {
                    sizes(maxWidth: 500, maxHeight: 300, quality: 100) {
                      ...GatsbyContentfulSizes_withWebp
                     }
                    fixed(width: 260, height: 160,) {
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
        <Layout>
          <NavBarBasic />
          <SEO pathname={location.pathname} />   
          <HeroContainer>
              <Image fluid={data.file.childImageSharp.fluid} />
            </HeroContainer>
            <Section>
              <FeatureTwo />
              <HeadlinesContainer>
                <div>
                  <Header>Recent Headlines</Header>
                  <SubHeader>Follow the Election</SubHeader>
                  <ViewAll to='/'>See All →</ViewAll>
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
                                <ScrollImageContainer>
                                  <PodImage fixed={item.node.hero.fixed}></PodImage>
                                </ScrollImageContainer>
                                <div>
                                  
                                  <HeadlineTitle>{item.node.title}</HeadlineTitle>
                                  
                                </div>
                              </InnerContainer>
                              
                                  <PodcastExcerpt>{item.node.excerpt}</PodcastExcerpt>

                              </Card>
                            </div>
                            
                          ) : (<div style={{ display: 'none'}}></div>)
                        ))
                      }

                    </ScrollContainer>
                </HeadlinesContainer>
            <Grids>
            <div style={{ 
                position: 'relative',
                display: 'flex',
                }}>
                <Label id="thoughts">CD-4</Label><SeeAll to='/category/thoughts'>See All →</SeeAll>
                </div>
            
                <StyledDiv> 
                {
                data.allContentfulArticle.edges.filter(c => c.node.tags.includes('trump')).slice(0,4).map((item, i) => (
                    item.node.hero ? (
                    <div key={i}>
                        <Item to={item.node.slug}>
                    
                        <ImageContainer>
                            <Image
                            fluid={item.node.hero.sizes}
                            />
                        </ImageContainer>
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
                                {item.node.date} · {item.node.body.childMdx.timeToRead} min read
                            </MetaData>
                            </TextContainer>
                        </Item>
                    </div>
                    
                    ) : (<div style={{ display: 'none'}}></div>)
                ))
                }
                </StyledDiv>                         
            </Grids>
            </Section>
          <ArticlesGradient />
        </Layout>
      );
  }  
  
export default Election2020;

