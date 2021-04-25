import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { NavWrapper } from "../styles"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="blog-logo" />
      </Link>
    </NavWrapper>
  )
}
