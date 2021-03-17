import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Subscribe from "../components/Subscribe"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            /border-bottom: 1px solid;
          `}
        >
          See what you do, 
          when you're doing it.
          <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@davidslii/video/6940385144725343494" data-video-id="6940385144725343494"> <section> <a target="_blank" title="@davidslii" href="https://www.tiktok.com/@davidslii">@davidslii</a> <p>swinging</p> <a target="_blank" title="♬ BOOM - Tiesto" href="https://www.tiktok.com/music/BOOM-6542955494212897537">♬ BOOM - Tiesto</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div><Subscribe />
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`