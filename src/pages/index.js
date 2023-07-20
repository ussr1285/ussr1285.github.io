import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { linkText, articleStyle } from '../components/layout.module.css'

const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="Main">
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
    allMdx(sort: {fields: [frontmatter___date, frontmatter___slug], order: [DESC, DESC]}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default IndexPage
