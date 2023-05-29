import { css } from "@emotion/react";

export const GlobalStyles = css`
  body {
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;

    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;

    background-color: #fdf7f2;
    color: #213547;
  }

  html,
  body {
    height: 100%;
    box-sizing: border-box;
  }

  header,
  section {
    padding: 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  td {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #7d98e4;
    text-decoration: inherit;
  }

  a:hover {
    color: #f19c3a;
  }

  a.active {
    color: #f19c3a;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: #ffffff;
    background-color: #f19c3a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }

  button:focus-visible {
    border-color: #646cff;
    outline: transparent;
  }
`;
