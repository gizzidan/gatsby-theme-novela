import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";
import Img from "gatsby-image"
import mediaqueries from "@styles/media";
import { Link } from 'gatsby';
import Section from '@components/Section';

const Featured = () => {
  const article = useStaticQuery(
    graphql`
      query        {
        contentfulArticle(title: {eq: "The Bipartisan Case for Removing Chris Smith"}) {
          title
          date
          excerpt
          category
          slug
          hero {
            sizes(maxWidth: 3000 quality: 100) {
              ...GatsbyContentfulSizes_withWebp
              }
            
          }
        }
      }
    `
  )
  return (
    <FeaturedContainer>
      <Link to={article.contentfulArticle.slug}>
      <BgImg fluid={article.contentfulArticle.hero.sizes} />
      <Overlay>
      <Section>
      <TextContainer>
        <Sub>Featured Story</Sub>
        <Title>
          <p>{article.contentfulArticle.title}</p>
        </Title>
        <Excerpt>
          <p>{article.contentfulArticle.excerpt}</p>
          <p style={{ fontSize: '40px',}}><Arrow id="arrow">&rarr;</Arrow></p>
        </Excerpt>
      </TextContainer>
      </Section>
      </Overlay>
      </Link>
    </FeaturedContainer>
  )
}

export default Featured

const Sub = styled.div`
  font-family: ${p => p.theme.fonts.monospace};
  color: white !important;
  padding-bottom: 15px;
`
const Arrow = styled.div`
  transition: all 0.1s linear;
  
`
const FeaturedContainer = styled("section")`
  overflow: hidden;
  height: 56vh;
  position: relative;
  margin: -61px auto 0px auto;
  &:hover, &:focus {
    cursor: pointer;
  }
  ${mediaqueries.desktop_mediumlarge`
    height: 70vh;
    
  `};
  
  @media screen and (max-height: 415px) {
    height: 103vh;
  }

  ${mediaqueries.phone_small`
     height: 102vh;
     
  `};
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Overlay = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  backdrop-filter: blur(0px);
  transform: translate(-50%, -50%);
  background-image: ${p => p.theme.colors.featureBackground};
  width: 101%;
  height: 101%;
`
const TextContainer = styled("div") `
  position: absolute;
  width: 40%;
  bottom: 25px;
  text-align: left;
  transition: all 0.1s linear;
  &:hover {
    p {
      color: #fff;
    }
    #arrow {
      transform: translate(7px, 0);
    }
  }
  ${mediaqueries.desktop_large`
    width: 50%;
  `}

  ${mediaqueries.desktop`
    width: 60%;
   
  `}

  ${mediaqueries.tablet`
    width: 75%;
    bottom: 5px;
   
  `}
  ${mediaqueries.phablet`
    width: 85%;
    padding: 0 0 0 0;
    
  `}
`
const Category = styled.p`
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 16px;
  line-height: 1.7;
  margin-top: 0px;
  margin-bottom: 15px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: white;


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

const Title = styled("div")`
  font-family: "SangBleu Empire";
  color: white;
  font-size: 50px;
  line-height: 1.15;
  text-transform: none;
  padding-bottom: 15px;
  font-weight: 900;
  transition: all 0.1s linear;


  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.tablet`
    font-size: 30px;
    line-height: 1.2;
  `};


  ${mediaqueries.phablet`
    font-size: 30px;
    line-height: 1.2;
  `};
`;

const Excerpt = styled("div")`
  font-family: ${p => p.theme.fonts.serif};
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 22px;
  line-height: 1.4;

  ${mediaqueries.desktop`
    font-size: 24px;
    line-height: 1.2;
  `};
  ${mediaqueries.tablet`
    font-size: 18px;
    line-height: 1.4;
  `};

  ${mediaqueries.phablet`
    font-size: 18px;
    line-height: 1.4;
  `};
`;