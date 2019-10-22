import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { Link } from "gatsby";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const ArticlesCategories = () => {
    const sectiongap = '60px';
    const gap = '35px';
    const data = useStaticQuery(
      graphql`
        query { 
          allArticle(sort: {fields: date, order: DESC}, limit: 8) {
            edges {
              node {
                date(formatString: "MM-DD-YYYY")
                excerpt
                slogan
                slug
                timeToRead
                title
                category
                hero {
                  childImageSharp {
                    fluid(maxHeight: 300, maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `
    )
      return (
        <div 
        > 
          <Label>
            The Latest</Label>
        <StyledDiv style={{
          marginBottom: sectiongap, 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: gap,
        }}> 
        
          {
            data.allArticle.edges.map((item, i) => (
              item.node.hero ? (
                <div key={i}>
                  <Item to={item.node.slug}>
                    <ImageContainer>
                      <Image
                        fluid={item.node.hero.childImageSharp.fluid}
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
                          {item.node.date} · {item.node.timeToRead} min read
                        </MetaData>
                      </TextContainer>
                    </Item>
                </div>
                
              ) : (<div></div>)
            ))
          }
          </StyledDiv>  
           <Label>Thoughts</Label>
          <StyledDiv style={{
          marginBottom: sectiongap, 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: gap,
        }}> 
       
          {
            data.allArticle.edges.map((item, i) => (
              item.node.category == 'thoughts' ? (
                <div key={i}>
                  <Item to={item.node.slug}>
                    <ImageContainer>
                      <Image
                        fluid={item.node.hero.childImageSharp.fluid}
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
                          {item.node.date} · {item.node.timeToRead} min read
                        </MetaData>
                      </TextContainer>
                    </Item>
                </div>
                
              ) : (<div style={{ display: 'none'}}></div>)
            ))
          }
          </StyledDiv>
           <Label>Culture</Label>
          <StyledDiv style={{
          marginBottom: sectiongap, 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: gap,
        }}> 
       
          {
            data.allArticle.edges.map((item, i) => (
              item.node.category == 'culture' ? (
                <div key={i}>
                  <Item to={item.node.slug}>
                    <ImageContainer>
                      <Image
                        fluid={item.node.hero.childImageSharp.fluid}
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
                          {item.node.date} · {item.node.timeToRead} min read
                        </MetaData>
                      </TextContainer>
                    </Item>
                </div>
                
              ) : (<div style={{ display: 'none'}}></div>)
            ))
          }
          </StyledDiv>
           <Label>Goings On</Label>
          <StyledDiv style={{
          marginBottom: sectiongap, 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: gap,
        }}> 
       
          {
            data.allArticle.edges.map((item, i) => (
              item.node.category == 'goings on' ? (
                <div key={i}>
                  <Item to={item.node.slug}>
                    <ImageContainer>
                      <Image
                        fluid={item.node.hero.childImageSharp.fluid}
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
                          {item.node.date} · {item.node.timeToRead} min read
                        </MetaData>
                      </TextContainer>
                    </Item>
                </div>
                
              ) : (<div style={{ display: 'none'}}></div>)
            ))
          }
          </StyledDiv>
          
        </div>
          
        
      )
    }
export default ArticlesCategories;