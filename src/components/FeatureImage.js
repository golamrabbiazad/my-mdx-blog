import React from "react"
import Img from "gatsby-image"
import { FeatureImageWrapper } from "../styles"
import { graphql, useStaticQuery } from "gatsby"

export const FeatureImage = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "office.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <FeatureImageWrapper>
      <Img
        fluid={fluid ? fluid : data.imageSharp.fluid}
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
