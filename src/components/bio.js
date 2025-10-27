/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio-container">
      <div className="bio-image">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic_new.jpg"
          width={350}
          height={250}
          quality={95}
          alt="Profile picture"
        />
      </div>
      <div className="bio-content">
        <p>
          <a href="mailto:edouard.koehn@gmail.com">
            <img src="https://img.icons8.com/material-outlined/30/000000/mail.png" alt="Email icon" />
          </a>
          <a href="https://github.com/edouardkoehn">
            <img src="https://img.icons8.com/material-outlined/30/000000/github.png" alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/edouard-koehn-25420a202/">
            <img src="https://img.icons8.com/material-outlined/30/000000/linkedin.png" alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/edouardkoehn/edouardkoehn.github.io/blob/main/src/images/CV_EdouardKoehn.pdf">
            <img src="https://img.icons8.com/material-outlined/30/000000/document.png" alt="Resume" />
          </a>
          <br></br>
          <strong>Deep Learning specialist</strong> @ <a href="https://diiannilab.ucsf.edu/home">Di Ianni Lab, UCSF</a>
          <br></br>
          <strong>Neuroengineering graduate from  </strong> @ <a href="https://www.epfl.ch/fr/">NeuroX EPFL</a></p>
          <br></br>
          Berkeley, California
          <br></br>
        </div>
    </div>
    
  )
}

export default Bio
