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
        <h2><u>Bio</u></h2>
        <p>
            I am currently a visiting student at <a href="https://bouchardlab.lbl.gov/">UC Berkeley</a>, working on biologically constrained Recurrent Neuronal Networks (RNN) under the supervision of <a href="https://biosciences.lbl.gov/profiles/kristofer-e-bouchard/">K. Bouchard</a>.
            Fascinated by the complex machinery that represents the brain, I am pursuing my engineering education in the Neuro-X master's program at <a href="https://neuro-x.epfl.ch/en/">EPFL</a>.
        </p>
        <p>
            Thanks to thriving professors and collaborators, I had the chance to work on a diverse array of problems and data types, including MRI data, fluorescent microscopy, text data, and EMG.
            Through those different projects, I developed a specialized expertise in biological data analysis. 
            In general, my academic career provided me a solid foundation in statistics, signal processing, biology, and computer science.
            I am currently particularly interested in the fields of <strong>Brain-computer Interfaces</strong>, <strong>Graph Neural Networks (GNN)</strong>, and <strong>Mammalian Movement Control</strong>.
        </p>
        <p>
          A strong believer in the potential of AI/Machine Learning for human medicine and health systems in general, I am looking for interesting issues where AI/Machine Learning could be leveraged for the common good.
          Interdisciplinary by training, I am eager to collaborate with individuals from diverse backgrounds on impactful projects.
        </p>
       
        <p>{summary}</p>
    </div>
)
}




export default Summary
