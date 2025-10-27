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
        Deep learning specialist at <a href="https://weill.ucsf.edu/">UCSF</a>, I am working on leveraging AI to improve the functional ultrasound (<a href="https://www.nature.com/articles/nmeth.1641">fUS</a>) modality.
        At the <a href="https://psychiatry.ucsf.edu/research/di-ianni-lab">Di Ianni Lab</a>, we are a team of engineers driven by the goal of advancing translational medicine—bridging cutting-edge technology with clinical applications to better understand and treat brain disorders. 
      </p>

      <p>
        Thanks to inspiring professors and collaborators, I have had the opportunity to work on a diverse array of problems and data types, including MRI, fluorescent microscopy, text, and EMG data.
        Through these projects, I have developed a strong expertise in biological data analysis.
        Overall, my academic background has provided me with a solid foundation in statistics, signal processing, biology, and computer science.
        I am currently particularly interested in <strong>Brain-Computer Interfaces</strong>, <strong>Graph Neural Networks (GNNs)</strong>, and <strong>Mammalian Movement Control</strong>.
      </p>

      <p>
        A strong believer in the potential of AI and Machine Learning for advancing human medicine and healthcare systems, I am motivated by opportunities where these technologies can be leveraged for the common good.
        Interdisciplinary by training, I am eager to collaborate with individuals from diverse backgrounds on impactful projects.
      </p>

      <p>{summary}</p>
    </div>
  )

}
export default Summary


/* <div class="summary-container"> Previous bio
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
</div> */
