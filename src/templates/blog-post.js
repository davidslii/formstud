import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const init_featuredImgFluid = post.featuredImage

  let featuredImgFluid = ''
  if (init_featuredImgFluid !== null) {
      featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  }

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Img fluid={featuredImgFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  }
`