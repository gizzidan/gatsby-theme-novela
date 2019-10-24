import { css } from "@emotion/core";

import GCopernicusM from "www/static/fonts/Galaxie Copernicus/GalaxieCopernicus-Medium.otf";

import UntitledSerifRegular from "www/static/fonts/Untitled Serif/UntitledSerif-Regular.woff";
import UntitledSerifBold from "www/static/fonts/Untitled Serif/UntitledSerif-Bold.woff";

import UnionRegular from "www/static/fonts/Union/Union-Regular.otf";
import UnionRegularItalic from "www/static/fonts/Union/Union-Italic.otf";
import UnionBold from "www/static/fonts/Union/Union-BoldItalic.otf";

import FuturaLight from "www/static/fonts/Futura/Futura-Light.woff";
import FuturaBook from "www/static/fonts/Futura/Futura-Book.woff";
import FuturaMedium from "www/static/fonts/Futura/Futura-Medium.woff";
import FuturaMediumItalic from "www/static/fonts/Futura/Futura-Medium-Italic.woff";
import FuturaLTMedium from "www/static/fonts/Futura/FuturaLT.woff";
import FuturaLTMediumItalic from "www/static/fonts/Futura/Futura-Oblique.woff";

import TerminaDemi from "www/static/fonts/Termina/Termina-Demi.woff";
import TerminaMedium from "www/static/fonts/Termina/Termina-Medium.woff";

import GTConReg from "www/static/fonts/GT America/GTAmerica-CondensedRegular.woff";
import GTConRegItalic from "www/static/fonts/GT America/GTAmerica-CondensedRegularItalic.woff";
import GTConMed from "www/static/fonts/GT America/GTAmerica-CondensedMedium.woff";
import GTExtBlack from "www/static/fonts/GT America/GTAmerica-ExtendedBlack.woff";

import Roslindale from "www/static/fonts/Roslindale/RoslindaleVariableDisplay-Regular.woff2";

import Ogg from "www/static/fonts/Ogg/Ogg-Roman.woff";

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

   /** Roslindale */
  @font-face {
    font-family: "Roslindale";
    src: url(${Roslindale}) format("woff2-variations");
  }

   /** Ogg */
  @font-face {
    font-family: "Ogg";
    font-weight: 400;
    font-style: normal;
    src: url(${Ogg}) format("true-type");
  }

   /** Termina */
   @font-face {
    font-family: "Termina";
    font-weight: 600;
    font-style: normal;
    src: url(${TerminaDemi}) format("woff");
  }
  @font-face {
    font-family: "Termina";
    font-weight: 500;
    font-style: normal;
    src: url(${TerminaMedium}) format("woff");
  }

   /** Futura */
  @font-face {
    font-family: "Futura";
    font-weight: 300;
    font-style: normal;
    src: url(${FuturaLight}) format("woff");
  }
  @font-face {
    font-family: "Futura";
    font-weight: 400;
    font-style: normal;
    src: url(${FuturaBook}) format("woff");
  }
  @font-face {
    font-family: "Futura";
    font-weight: 500;
    font-style: normal;
    src: url(${FuturaMedium}) format("woff");
  }
  @font-face {
    font-family: "Futura LT";
    font-weight: 500;
    font-style: normal;
    src: url(${FuturaLTMedium}) format("woff");
  }
  @font-face {
    font-family: "Futura";
    font-weight: 500;
    font-style: italic;
    src: url(${FuturaMediumItalic}) format("woff");
  }
  @font-face {
    font-family: "Futura LT";
    font-weight: 500;
    font-style: italic, oblique;
    src: url(${FuturaLTMediumItalic}) format("woff");
  }

    /** GT America */
  @font-face {
    font-family: "GT America Cond";
    font-weight: 400;
    font-style: normal;
    src: url(${GTConReg}) format("woff");
  }
  @font-face {
    font-family: "GT America Cond";
    font-weight: 400;
    font-style: italic;
    src: url(${GTConRegItalic}) format("woff");
  }
  @font-face {
    font-family: "GT America Cond";
    font-weight: 500;
    font-style: normal;
    src: url(${GTConMed}) format("woff");
  }
  @font-face {
    font-family: "GT America Ext";
    font-weight: 900;
    font-style: normal;
    src: url(${GTExtBlack}) format("woff");
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

  /** Union */
  @font-face {
    font-family: "Union";
    font-weight: 400;
    font-style: normal;
    src: url(${UnionRegular}) format("true-type");
  }
   @font-face {
    font-family: "Union";
    font-weight: 400;
    font-style: italic;
    src: url(${UnionRegularItalic}) format("true-type");
  }
   @font-face {
    font-family: "Union";
    font-weight: 700;
    font-style: normal;
    src: url(${UnionBold}) format("true-type");
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
    font-family: "Apercu";
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
