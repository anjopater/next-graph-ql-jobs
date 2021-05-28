import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
      font-size: 16px;
    }
    @media screen and (min-width: 320px) {
      html {
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
      }
    }
    @media screen and (min-width: 1000px) {
      html {
        font-size: 22px;
      }
    }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const InnerStyles = styled.div``;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
