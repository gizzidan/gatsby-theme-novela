import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { Link } from "gatsby";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import styled from "@emotion/styled";
import { css } from "@emotion/core";


const ArticlesFullList = () => {
  const sectiongap = '60px';
  const gap = '25px';
  const data = useStaticQuery(
    graphql`
      query { 
        allContentfulPost(sort: {fields: date, order: DESC}, limit: 32) {
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
            }
          }
        }
      }
    `
  )
    return (
      <Container>
        <Label>The Latest</Label>
        <StyledDiv style={{
            marginBottom: sectiongap, 
            display: 'grid',
            justifyItems: 'center',
            gridTemplateColumns: '1fr',
            gridGap: gap,
        }}>
        {
          data.allContentfulPost.edges.map((item, i) => (
            item.node.hero ? (
              <div key={i}>
                <Item to={item.node.slug}>  
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
              
            ) : (<div></div>)
          ))
        }
        </StyledDiv> 
      </Container>
        
      
    )
  }

export default ArticlesFullList;

const StyledDiv = styled.div`

`
const Container = styled.section`
  
`;



const Label = styled.h2`
  color: ${p => p.theme.colors.primary};
  -webkit-text-fill-color: transparent; 
  -webkit-text-stroke: 1.5px ${p => p.theme.colors.primary};
  font-family: "Portrait";
  font-weight: 600;
  text-transform: none;
  font-size: 150px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-top: 50px;
  ${mediaqueries.desktop`
    font-size: 100px;
  `};

  ${mediaqueries.phablet`
    -webkit-text-stroke-width: 1px;
    font-size: 70px;
    font-weight: 500;
    line-height: 1.3;
  `};
`;


const Item = styled(Link)`
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  text-align: left;
  position: relative;
  display: block;
  width: 450px;
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

const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  

  ${mediaqueries.tablet`
    height: 200px;
    margin-bottom: 10px;
  `}

  ${mediaqueries.phablet`
    overflow: hidden;
    margin-bottom: 0px;
    box-shadow: none;
    
  `}
`;

const TextContainer = styled("div")`
  position: relative;
  padding: 20px 0px 10px 0px;
  ${mediaqueries.phablet`
    padding: 20px 0px 20px 0px;
  `}
`;

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


const Title = styled(Headings.h2)`
  font-size: 22px;
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

const Slogan = styled.p`
  ${limitToTwoLines};
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 14px;
  line-height: 1.7;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  letter-spacing: 1px;
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

const Excerpt = styled.p`
  font-family: ${p => p.theme.fonts.serif};
  ${limitToTwoLines};
  font-size: 17px;
  letter-spacing: -.005em;
  font-style: italic;
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

export const MetaData = styled.div`
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
