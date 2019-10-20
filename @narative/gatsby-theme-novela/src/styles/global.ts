import { css } from "@emotion/core";

import GCopernicusM from "www/static/fonts/Galaxie Copernicus/GalaxieCopernicus-Medium.otf";

import UntitledSerifRegular from "www/static/fonts/Untitled Serif/UntitledSerif-Regular.woff";
import UntitledSerifBold from "www/static/fonts/Untitled Serif/UntitledSerif-Bold.woff";

import UntitledLight from "www/static/fonts/Untitled Sans/UntitledSans-Light.woff";
import UntitledRegular from "www/static/fonts/Untitled Sans/UntitledSans-Regular.woff";
import UntitledMedium from "www/static/fonts/Untitled Sans/UntitledSans-Medium.woff";

import FoundersRegular from "www/static/fonts/Founders Grotesk/FoundersGrotesk-Regular.otf";
import FoundersMedium from "www/static/fonts/Founders Grotesk/FoundersGrotesk-Medium.otf";
import FoundersBold from "www/static/fonts/Founders Grotesk/FoundersGrotesk-Bold.otf";

import LarishAlte from "www/static/fonts/Larish Alte/LarishAlte-SemiBold.woff";

import Value from "www/static/fonts/Value Serif/Value-Serif.woff";




export const globalStyles = css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  @font-face {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  /** Galaxie Copernicus */
  @font-face {
    font-family: "G Copernicus";
    font-weight: 500;
    font-style: normal;
    src: url(${GCopernicusM});
  }

    /** Untitled Serif */
  @font-face {
    font-family: "Untitled Serif";
    font-weight: 400;
    font-style: normal;
    src: url(${UntitledSerifRegular}) format("woff");
  }
   @font-face {
    font-family: "Untitled Serif";
    font-weight: 700;
    font-style: normal;
    src: url(${UntitledSerifBold}) format("woff");
  }

  /** Untitled Sans */
  @font-face {
    font-family: "Untitled";
    font-weight: 300;
    font-style: normal;
    src: url(${UntitledLight}) format("woff");
  }
  @font-face {
    font-family: "Untitled";
    font-weight: 400;
    font-style: normal;
    src: url(${UntitledRegular}) format("woff");
  }
   @font-face {
    font-family: "Untitled";
    font-weight: 500;
    font-style: normal;
    src: url(${UntitledMedium}) format("woff");
  }

  /** Founders Grotesk */
  @font-face {
    font-family: "Founders Grotesk";
    font-weight: 400;
    font-style: normal;
    src: url(${FoundersRegular}) format("open-type");
  }
   @font-face {
    font-family: "Founders Grotesk";
    font-weight: 500;
    font-style: normal;
    src: url(${FoundersMedium}) format("open-type");
  }
  @font-face {
    font-family: "Founders Grotesk";
    font-weight: 700;
    font-style: normal;
    src: url(${FoundersBold}) format("open-type");
  }


  /** Larish Alte */
  @font-face {
    font-family: "Larish Alte";
    font-weight: 500;
    font-style: normal;
    src: url(${LarishAlte}) format("woff");
  }

   /** Value Serif */
   @font-face {
    font-family: "Value Serif";
    font-weight: 500;
    font-style: normal;
    src: url(${Value}) format("woff");
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: "Untitled";
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  input,
  textarea,
  select,
  button {
    font-family: "-apple-system", "BlinkMacSystemFont", "San Francisco",
      "Helvetica Neue", "Helvetica", "Ubuntu", "Roboto", "Noto", "Segoe UI",
      "Arial", sans-serif;
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type="number"] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
`;
