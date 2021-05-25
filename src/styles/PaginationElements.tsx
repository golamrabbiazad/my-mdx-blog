import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(1) {
    color: ${props =>
      props.theme.isFirst
        ? props.theme.colors.dark3
        : props.theme.colors.dark1};
    pointer-events: ${props => (props.theme.isFirst ? "none" : "auto")};
    cursor: ${props => (props.theme.isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    color: ${props =>
      props.theme.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.theme.isLast ? "none" : "auto")};
    cursor: ${props => (props.theme.isLast ? "default" : "pointer")};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
export const PaginationElements = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-decoration: none;
  font-weight: 400;
  margin: 0 2rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`