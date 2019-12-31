import React from "react";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby"
import NavBarBasic from "@components/NavBarBasic";
import Image from 'gatsby-image';
import {AuthorLink, ImageContainer, Label, SeeAll, Item, Title, Slogan, Excerpt, MetaData, TextContainer} from '@narative/gatsby-theme-novela/src/sections/articles/Articles.List2';
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
        <Layout>
          <NavBarBasic />
          <SEO pathname={location.pathname} title="Election 2020" image={data.file.childImageSharp.fluid}/>   

         
           
            <HeroContainer>
              <Image fluid={data.file.childImageSharp.fluid} />
            </HeroContainer>
            <Section>
              <HeadlinesContainer>
                <div>
                  <Header>Recent Headlines</Header>
                  <SubHeader>Follow the Election</SubHeader>
                  <ViewAll to='/tag/election-2020'>See All →</ViewAll>
                    </div>


                    <ScrollContainer 
                      nativeMobileScroll='true'
                      hideScrollbars='false'
                      horizontal='true' 
                      style={{ display: 'flex', overflowX: 'auto', paddingBottom: '15px'}}>

                      {
                        data.allContentfulArticle.edges.filter(c => c.node.tags.includes('election 2020')).slice(0,4).map((item, i) => (
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
                <FeatureTwo />
            <Grids>
            <div style={{ 
                position: 'relative',
                display: 'flex',
                }}>
                <Label id="national-news">National News</Label><SeeAll to='/tag/national-news'>See All →</SeeAll>
                </div>
            
                <StyledDiv> 
                {
                data.allContentfulArticle.edges.filter(c => c.node.tags.includes('national news')).slice(0,4).map((item, i) => (
                    item.node.hero ? (
                    <div key={i}>
                        <Item to={item.node.slug}>
                    
                        <ImageContainer>
                            <Image
                            fluid={item.node.hero.sizes}
                            />
                        </ImageContainer>
                            <TextContainer>
                         
                            
                            <Title>
                                {item.node.title}
                            </Title>
                            <Excerpt>
                                {item.node.excerpt}
                            </Excerpt>
                            <MetaData>
                               <AuthorLink to={item.node.author[0].fields.slug}>{item.node.author[0].name}</AuthorLink> · {item.node.date}
                           </MetaData>
                            </TextContainer>
                        </Item>
                    </div>
                    
                    ) : (<div style={{ display: 'none'}}></div>)
                ))
                }
                </StyledDiv>   
            <div style={{ 
                position: 'relative',
                display: 'flex',
                }}>
                <Label id="nj-4">NJ-4</Label><SeeAll to='/tag/nj-4'>See All →</SeeAll>
                </div>
            
                <StyledDiv> 
                {
                data.allContentfulArticle.edges.filter(c => c.node.tags.includes('nj-4')).slice(0,4).map((item, i) => (
                    item.node.hero ? (
                    <div key={i}>
                        <Item to={item.node.slug}>
                    
                        <ImageContainer>
                            <Image
                            fluid={item.node.hero.sizes}
                            />
                        </ImageContainer>
                            <TextContainer>
                           
                            
                            <Title>
                                {item.node.title}
                            </Title>
                            <Excerpt>
                                {item.node.excerpt}
                            </Excerpt>
                            <MetaData>
                               <AuthorLink to={item.node.author[0].fields.slug}>{item.node.author[0].name}</AuthorLink> · {item.node.date}
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

