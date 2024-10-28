// src/components/Summary.js
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Summary = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `)

  const summary = data.site.siteMetadata?.author.summary

  return (
    <div class="summary-container">
    <h2>Summary</h2>
    <p>
      I am currently a visiting student at <a href="https://www.berkeley.edu/">UC Berkeley</a>, working on biologically constrained Recurrent Neuronal Networks. I am enrolled in the Neuro-X master's program at <a href="https://neuro-x.epfl.ch/en/">EPFL</a>. Proudly grounded in the interdisciplinary field, I made my way from biomechanics and sports science to computational neuroscience.
    </p>
    <p>
      I am passionate about using computer science to explain and understand behavior. In parallel to my scientific life, I am an outdoor enthusiast, trying to enjoy the outdoors by doing rock climbing, hiking, and biking.
    </p>
    <p>Subjects that I would like to explore in the future:</p>
    <ul>
      <li>Brain-computer interfaces</li>
      <li>Graph neuronal networks</li>
      <li>Mammalian movement control</li>
    </ul>
    <p>{summary}</p>
  </div>
  
  )
}

export default Summary
