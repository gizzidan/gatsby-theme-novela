import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";
import Img from "gatsby-image"
import mediaqueries from "@styles/media";
import { Link } from 'gatsby';

const Featured = () => {
  const article = useStaticQuery(
    graphql`
      query        {
        contentfulArticle(title: {eq: "It is Our Moral Duty to Boo The President"}) {
          title
          date
          excerpt
          category
          slug
          hero {
            sizes(quality: 100) {
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
      <Overlay></Overlay>
      <TextContainer>
        
        <Title>
          <p>{article.contentfulArticle.title}</p>
        </Title>
        <Excerpt>
          <p>{article.contentfulArticle.excerpt}</p>
          <p style={{ fontSize: '40px',}}><Arrow id="arrow">&rarr;</Arrow></p>
        </Excerpt>
      </TextContainer>
      </Link>
    </FeaturedContainer>
  )
}

export default Featured

const Arrow = styled.div`
  transition: all 0.1s linear;
  
`
const FeaturedContainer = styled("section")`
  overflow: hidden;
  height: 58vh;
  position: relative;
  margin: -61px auto 0px auto;
  &:hover, &:focus {
    cursor: pointer;
  }
  ${mediaqueries.desktop`
    
  `};

  ${mediaqueries.phablet`
    
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
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to bottom, rgba(17, 17, 20, 0.1), rgba(28, 28, 38, 0.93));
  width: 100%;
  height: 100%;
`
const TextContainer = styled("div") `
  position: absolute;
  top: 69%;
  left: 50%;
  width: 1470px;
  padding: 0 4rem;
  padding-right: 700px;
  transform: translate(-50%,-50%);
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
    width: 100vw;
    top: 74%;
    padding: 0 4rem;
  `}

  ${mediaqueries.desktop`
    width: 80vw;
    top: 74%;
    padding: 0 2rem;
  `}

  ${mediaqueries.tablet`
    width: 80vw;
    padding: 0 4rem;
    top: 72%;
  `}
  ${mediaqueries.phablet`
    width: 100vw;
    padding: 0 2rem;
    top: 72%;
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
  font-family: ${p => p.theme.fonts.serifFine};
  color: white;
  font-size: 50px;
  line-height: 1.1;
  text-transform: none;
  padding-bottom: 15px;
  font-weight: 700;
  transition: all 0.1s linear;


  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.2;
  `};
`;

const Excerpt = styled("div")`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 24px;
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
    font-size: 17px;
    line-height: 1.4;
  `};
`;