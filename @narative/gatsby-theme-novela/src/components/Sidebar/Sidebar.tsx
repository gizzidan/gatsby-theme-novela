/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from "gatsby";
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import mediaqueries from "@styles/media";
import Headings from "@components/Headings";
import SidebarFeature from '@components/Sponsored/SidebarFeature';
import ArticleAuthors from '../../sections/article/Article.Authors';
import TopSidebar from '@components/Ads/TopSidebar';

const Sidebar = () => {
	const data = useStaticQuery(
    graphql`
      query { 
        allContentfulArticle(filter: {title: {ne: "Jim Keady: Retrospective and Lessons Learned"}, category: {ne: "sponsor content"}}, sort: {fields: date, order: DESC}, limit: 30) {
          edges {
            node {
              date(formatString: "MMM DD")
              excerpt
              slug
              title
              category 
              hero {
                sizes(maxWidth: 400, maxHeight: 400, quality: 100) {
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
		<SContainer>
			
			<SidebarFeature />
				{
					data.allContentfulArticle.edges.slice(3,8).map((item, i) => (
						item.node.hero ? (
							<div key={i}>
								<SidebarItem to={item.node.slug}>
									<STextContainer>
										<InnerContainer>
											
											<STitle>{item.node.title}</STitle>
											<SMetaData><span style={{ opacity: '0.8', }}>{item.node.author[0].name} in </span><CatLink  to={"/category/" + item.node.category.toString().replace(/\s+/g, '-')}>{item.node.category}</CatLink>
												
											</SMetaData>
										</InnerContainer>
									</STextContainer>
									<SImageContainer>
										<Image fluid={item.node.hero.sizes}></Image>
									</SImageContainer>
								</SidebarItem>
							</div>            
						) : (<div></div>)
					))
				}
			<TopSidebar />
		</SContainer>
	)
}

export default Sidebar;

export const CatLink = styled(Link) `
	color: ${p => p.theme.colors.primary} !important;
	font-weight: 500;
	text-transform: capitalize;
	border-bottom: 1px solid;
	&:hover {
		opacity: 0.6 !important;
	}
`	
export const SContainer = styled.div`
	${mediaqueries.desktop`
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
	`}
`
export const SImageContainer = styled.div`
	display: none;
	
	${mediaqueries.desktop`
		display: block !important;
	`}
`;

export const STextContainer = styled.div`
		border-bottom: 1px solid ${p => p.theme.colors.lightGrey} !important;
		padding-bottom: 25px;
	${mediaqueries.desktop`
		border-top: 1px solid ${p => p.theme.colors.lightGrey} !important;
		padding: 15px 20px;
		height: 100%;
	`}
`;

export const InnerContainer = styled.div`
	${mediaqueries.desktop`
		position: relative;
		top: 50%;
		transform: perspective(1px) translateY(-50%);
	`}
`
export const STitle = styled(Headings.h2)`
  font-size: 20px;
  line-height: 1.2 !important;
  font-family: "Suisse Int'l Condensed";
  font-weight: 700 !important;
  text-transform: uppercase;
  font-style: italic;
  padding: 0px;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 12px;
	transition: color 0.3s ease-in-out;
	&:hover {
		opacity: 0.6;
	}

  ${mediaqueries.desktop`
		font-size: 27px; 
		padding-bottom: 10px; 
  `}

	${mediaqueries.tablet`
		font-size: 18px; 
    margin-bottom: 0px;
  `}

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
	`}
	${mediaqueries.phone_small`
    font-size: 16px;
  `}
`;

export const SSlogan = styled.div`
  display: none;
  font-family: ${p => p.theme.fonts.slogan};
  font-size: 13px;
	line-height: 1.7;
  margin-top: 0px;
  margin-bottom: 5px;
  font-weight: ${p => p.theme.fontWeights.slogan};
  text-transform: uppercase;
  color: ${p => p.theme.colors.accent};

  ${mediaqueries.desktop`
		font-size: 18px;
		margin-bottom: 10px;
  `}

	${mediaqueries.tablet`
		margin-bottom: 6px;
		font-size: 14px;

  `}

	${mediaqueries.phablet`
		display: none;
    max-width: 100%;
    padding:  0;
    -webkit-line-clamp: 2;
  `}
`;

export const SMetaData = styled.div`
	font-family: ${p => p.theme.fonts.monospace};
	font-size: 14px;
	font-weight: 400;
	text-transform: none;
	padding-top: 5px;
	color: ${p => p.theme.colors.articleText} !important;
	${mediaqueries.desktop`
		font-size: 20px;
  `}

	${mediaqueries.tablet`
		font-size: 12px;
	`}
	${mediaqueries.phone_small`
    font-size: 10px;
  `}
`
export const SidebarItem = styled(Link)`
  display: block;
  padding-bottom: 10px;
  margin-bottom: 15px;
  position: relative;

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

	${mediaqueries.desktop`
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 0px;
		align-items: center;
		margin-bottom: 0px;
		padding-bottom: 0px;
    &:hover, &:focus {
      transform: none;
		}
  `}
`;