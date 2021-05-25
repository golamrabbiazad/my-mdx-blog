import styled from "styled-components"

export const P = styled.p`
  margin: ${props => (props.theme.margin ? props.theme.margin : 0)};
  font-size: ${props => {
    switch (props.theme.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.125rem"
    }
  }};

  line-height: ${props => {
    switch (props.theme.size) {
      case "medium":
        return "1.4375rem"
      case "small":
        return "1.375rem"
      case "xSmall":
        return "1.125rem"
      default:
        return "1.4375rem"
    }
  }};

  text-decoration: ${props =>
    props.theme.textDecoration ? props.theme.textDecoration : "none"};

  font-weight: ${props => {
    switch (props.theme.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};

  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};

  text-align: ${props =>
    props.theme.textAlign ? props.theme.textAlign : "left"};
`
export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 2.2rem;

  color: ${props => {
    switch (props.theme.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};

  font-weight: 400;
  text-align: ${props =>
    props.theme.textAlign ? props.theme.textAlign : "left"};
  margin: ${props => (props.theme.margin ? props.theme.margin : 0)};
`
export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.875rem;

  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};

  font-weight: 400;
  text-align: ${props =>
    props.theme.textAlign ? props.theme.textAlign : "left"};
  margin: ${props => (props.theme.margin ? props.theme.margin : 0)};
`
