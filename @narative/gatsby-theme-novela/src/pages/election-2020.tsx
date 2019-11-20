import React from "react";
import styled from "@emotion/styled";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import { useStaticQuery, graphql } from "gatsby"
import mediaqueries from "@styles/media";
import NavBarBasic from "@components/NavBarBasic";
import Image from 'gatsby-image';
import {StyledDiv, ImageContainer, Label, SeeAll, Item, Title, Slogan, Excerpt, MetaData, TextContainer} from '@narative/gatsby-theme-novela/src/sections/articles/Articles.List2.tsx';


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
              
            <Grids>
            <div style={{ 
                position: 'relative',
                display: 'flex',
                }}>
                <Label id="thoughts">CD-4</Label><SeeAll to='/category/thoughts'>See All →</SeeAll>
                </div>
            
                <StyledDiv style={{
                marginBottom: sectiongap, 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gridGap: gap,
                 }}> 
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

const Grids = styled.div`
  margin-top: 80px;
  ${mediaqueries.desktop`
    margin-top: 50px;
  `}
  ${mediaqueries.phablet`
    margin-top: 40px;
 `}
`
const HeroContainer = styled.div`
  width: 100vw !important;
  ${mediaqueries.desktop`
    
 `}
  ${mediaqueries.phablet`
    margin-top: 43px;
    
    
 `}
`

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;