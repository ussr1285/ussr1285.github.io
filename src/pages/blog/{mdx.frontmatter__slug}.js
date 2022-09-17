import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider  } from "@mdx-js/react"
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Video from '../../components/video'
import ExternalLink from '../../components/externalLink'

const shortcodes = { Video, ExternalLink }

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
