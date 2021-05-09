import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { FeatureImageWrapper } from "../styles"
import { graphql, useStaticQuery } from "gatsby"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "office.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  return (
    <FeatureImageWrapper>
      <GatsbyImage
        image={fixed ? fixed : data.file.childImageSharp.gatsbyImageData}
        alt="cover image"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeatureImageWrapper>
  )
}
