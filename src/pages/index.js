import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Subscribe from "../components/Subscribe"
import TO from "../TO.jpg"
import bsqut1 from "../images/bsquat1.jpg"
import bsqut2 from "../images/bsquat2.jpg"
import kbswing2 from "../images/kbswing2.jpg"
import topswing from "../images/top-swing.png"

export function AirtableUI() {
  return (
    <form action="/api/airtable" method="POST">
      <h2 style={{ marginBottom: `16px` }}>Add person to Airtable</h2>
      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
          Name:
        </label>
        <input name="name" id="name" />
      </div>
      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="email"
        >
          Email:
        </label>
        <input name="email" id="email" type="email" />
      </div>
      <div style={{ marginBottom: `24px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="message"
        >
          Message:
        </label>
        <textarea name="message" id="message" />
      </div>
      <div>
        <button>Submit new person</button>
      </div>
    </form>
  )
 } 
 
export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            color: blue;
            display: inline-block;
            /border-bottom: 1px solid;
          `}
        >
          See what you do, 
          when you're doing it.
          <img src={kbswing2} alt="1" />
          <img src={topswing} alt="kb swing" />
          <img src={bsqut1} alt="2" />
          <p></p>
          <p></p>
          <p>Features</p>
          <h2 css={css`
            color: black;
            display: inline-block;
            /border-bottom: thin solid;
          `}
          >
          <p>* Only need your phone for Video Analysis</p>
          <p>* Track Your Progress</p>
          <p>* Share With Your Trainer</p>
          
          <p></p>
          <p></p>
          <p>Details</p>
          <h2 css={css`
            color: blue;
            display: inline-block;
            border-bottom: 1x solid;
          `}
          ></h2>
          <p>Stop training blind when it comes to your form
Your movements analyzed to provide corrective feedback
Track your progress with video comparisons
Post-workout fatigue/form analysis
Send your video to your coach/trainer
Your trainer will be notified of unsafe form/technique issues
</p>
</h2>
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
      <img src={TO} alt="Terrell Owens on the Star" />
      <img src="https://www.dropbox.com/s/xenjutw6lvb3wmd/D%20-%20DJI_20210419_154259_170_video_exported_41486.jpg?dl=0" alt="squat" />
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
