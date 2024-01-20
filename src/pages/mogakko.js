import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { linkText, articleStyle } from '../components/layout.module.css'

const Mogakko = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="Mogakko">
        <ul>
          {
            data.allMdx.nodes.map((node) => (
              <article className={articleStyle} key={node.id}>
                <h2>
                  <Link to={`/blog/${node.frontmatter.slug}`} className={linkText}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            ))
          }
        </ul>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { category: { eq: "모각코" } } }
      sort: { fields: [frontmatter___date, frontmatter___slug], order: [DESC, DESC] }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          slug
          category 
        }
        id
        excerpt
      }
    }
  }
`;


export const Head = () => <Seo title="Mogakko" />

export default Mogakko
