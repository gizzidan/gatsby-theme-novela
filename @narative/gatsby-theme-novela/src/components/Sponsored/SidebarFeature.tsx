/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';
import {limittoTwoLines, SidebarItem, STextContainer, InnerContainer, SSlogan, STitle, SMetaData, CatLink, SImageContainer } 
        from '@components/Sidebar/Sidebar';

const Sidebar = () => {
	const data = useStaticQuery(
    graphql`
      query { 
        allContentfulArticle(filter: {title: {eq: "A Sample Sponsored Post to See Why You Should Use This Service"}},
                            sort: {fields: date, order: DESC}, limit: 30) {
          edges {
            node {
              date(formatString: "MMM DD")
              excerpt
              slogan
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
              }
            }
          }
        }
      }
    `
  )
	return (
		<div>
				{
					data.allContentfulArticle.edges.map((item, i) => (
						item.node.hero ? (
							<div key={i}>
								<SidebarItem to={item.node.slug}>
									<STextContainer>
										<InnerContainer>
											<SSlogan>{item.node.slogan}</SSlogan>
											<STitle>{item.node.title}</STitle>
											<SMetaData>{item.node.author[0].name} in&nbsp;
												<CatLink 
													to={"/category/" + item.node.category.toString().replace(/\s+/g, '-')}
													>
													{item.node.category}
												</CatLink>
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
		</div>
	)
}

export default Sidebar;