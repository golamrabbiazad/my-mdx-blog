import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../styles"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="facebook.com" rel="noopener noreferer">
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a href="linkedin.com" rel="noopener noreferer">
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
          <a href="instagram.com" rel="noopener noreferer">
            <img src={data.instagram.publicURL} alt="instagram logo" />
          </a>
          <a href="twitter.com" rel="noopener noreferer">
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          @2021 Blogs - All right reserved!{" "}
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
