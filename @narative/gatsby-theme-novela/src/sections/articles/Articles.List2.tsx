import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import { Link } from "gatsby";
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import styled from "@emotion/styled";
import { css } from "@emotion/core";


const ArticlesList2 = () => {
  const data = useStaticQuery(
    graphql`
      query { 
        allArticle(limit: 8) {
          edges {
            node {
              date(formatString: "MM-DD-YYYY")
              excerpt
              slogan
              slug
              timeToRead
              title
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '20px',
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
      </div>
    )
  }

export default ArticlesList2;

const Item = styled(Link)`
  
  text-align: left;
  position: relative;
  display: block;
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
    color: ${p => p.theme.colors.accent};
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
    border-radius: 5px;
  }

  ${mediaqueries.phablet`
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
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `}
`;

const TextContainer = styled("div")`
  background-color: ${p => p.theme.colors.card};
  position: relative;
  height: 260px;
  padding: 30px 0px 10px 0px;
  ${mediaqueries.phablet`
    padding: 20px 0px 20px 0px;
  `}
`;

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;


const Title = styled(Headings.h2)`
  font-size: 22px;
  line-height: 1.3;
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 500;
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
    padding: 0px 20px 0;
    margin-bottom: 0px;
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
  color: ${p => p.theme.colors.accent};


  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    font-size: 13px;
    margin-bottom; 15px;
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 10px;
    -webkit-line-clamp: 2;
  `}
`;

const Excerpt = styled.p`
  ${limitToTwoLines};
  font-size: 15px;
  line-height: 1.618;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 300;
  color: ${p => p.theme.colors.primary};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}


  ${mediaqueries.phablet`
    margin-bottom; 15px;
    max-width: 100%;
    padding:  0 20px;
    -webkit-line-clamp: 3;
  `}
`;

const MetaData = styled.div`
  font-family: ${p => p.theme.fonts.slogan};
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  font-style: italic;
  color: ${p => p.theme.colors.primary};
  

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  10px 20px 10px;
  `}
`;

