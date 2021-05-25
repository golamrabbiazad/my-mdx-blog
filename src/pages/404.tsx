import React from "react"
import { graphql } from "gatsby"
import { H1 } from "../styles"
import { Container, Content, FeatureImage } from "../components"

const NotFound = ({ data }) => {
  const featureImage = data.file.childImageSharp.gatsbyImageData

  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem">
          404! Not Found
        </H1>
      </Content>
    </Container>
  )
}

export const notFoundQuery = graphql`
  query NotFoundQuery {
    file(relativePath: { eq: "sorry-404.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`

export default NotFound
