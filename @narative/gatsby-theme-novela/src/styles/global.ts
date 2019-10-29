import { css } from "@emotion/core";

import Portrait from "www/static/fonts/Portrait/Portrait-Regular2.woff";
import PortraitItalic from "www/static/fonts/Portrait/Portrait-Regular2Italic.woff";
import PortraitMedium from "www/static/fonts/Portrait/Portrait-Medium.woff";
import PortraitBold from "www/static/fonts/Portrait/Portrait-Bold.woff";

import UntitledSerifRegular from "www/static/fonts/Untitled Serif/UntitledSerif-Regular.woff";
import UntitledSerifBold from "www/static/fonts/Untitled Serif/UntitledSerif-Bold.woff";

import SectraBook from "www/static/fonts/GT Sectra/GT-Sectra-Book.woff";
import SectraBookItalic from "www/static/fonts/GT Sectra/GT-Sectra-Book-Italic.woff";
import SectraRegular from "www/static/fonts/GT Sectra/GT-Sectra-Regular.woff";
import SectraRegularItalic from "www/static/fonts/GT Sectra/GT-Sectra-Regular-Italic.woff";
import SectraMedium from "www/static/fonts/GT Sectra/GT-Sectra-Medium.woff";
import SectraMediumItalic from "www/static/fonts/GT Sectra/GT-Sectra-Medium-Italic.woff";
import SectraBold from "www/static/fonts/GT Sectra/GT-Sectra-Bold.woff";
import SectraBoldItalic from "www/static/fonts/GT Sectra/GT-Sectra-Bold-Italic.woff";

import SectraFine from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Regular.woff";
import SectraFineItalic from "www/static/fonts/GT Sectra/GT-Sectra-Fine-Regular-Italic.woff";

import PressuraBold from "www/static/fonts/GT Pressura/gt-pressura-bold.woff";

import TerminaDemi from "www/static/fonts/Termina/Termina-Demi.woff";
import TerminaMedium from "www/static/fonts/Termina/Termina-Medium.woff";

import GTConReg from "www/static/fonts/GT America/GTAmerica-CondensedRegular.woff";
import GTConRegItalic from "www/static/fonts/GT America/GTAmerica-CondensedRegularItalic.woff";
import GTConMed from "www/static/fonts/GT America/GTAmerica-CondensedMedium.woff";
import GTExtBlack from "www/static/fonts/GT America/GTAmerica-ExtendedBlack.woff";

import Ogg from "www/static/fonts/Ogg/Ogg-Roman.woff";

import LarishAlte from "www/static/fonts/Larish Alte/LarishAlte-SemiBold.woff";





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

   /** Portrait */
   @font-face {
    font-family: "Portrait";
    font-weight: 400;
    font-style: normal;
    src: url(${Portrait}) format("woff");
  }
  @font-face {
    font-family: "Portrait";
    font-weight: 400;
    font-style: italic;
    src: url(${PortraitItalic}) format("woff");
  }
  @font-face {
    font-family: "Portrait";
    font-weight: 600;
    font-style: normal;
    src: url(${PortraitMedium}) format("woff");
  }
  @font-face {
    font-family: "Portrait";
    font-weight: 700;
    font-style: normal;
    src: url(${PortraitBold}) format("woff");
  }

    /** GT Pressura */
    @font-face {
    font-family: "Pressura";
    font-weight: 700;
    font-style: normal;
    src: url(${PressuraBold}) format("woff");
  }

   /** GT Sectra */
   @font-face {
    font-family: "Sectra";
    font-weight: 300;
    font-style: normal;
    src: url(${SectraBook}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 300;
    font-style: italic;
    src: url(${SectraBookItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 400;
    font-style: normal;
    src: url(${SectraRegular}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 400;
    font-style: italic;
    src: url(${SectraRegularItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 500;
    font-style: normal;
    src: url(${SectraMedium}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 500;
    font-style: italic;
    src: url(${SectraMediumItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 700;
    font-style: normal;
    src: url(${SectraBold}) format("woff");
  }
  @font-face {
    font-family: "Sectra";
    font-weight: 700;
    font-style: italic;
    src: url(${SectraBoldItalic}) format("woff");
  }
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 400;
    font-style: normal;
    src: url(${SectraFine}) format("woff");
  }
  @font-face {
    font-family: "Sectra Fine";
    font-weight: 400;
    font-style: italic;
    src: url(${SectraFineItalic}) format("woff");
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

  /** Larish Alte */
  @font-face {
    font-family: "Larish Alte";
    font-weight: 500;
    font-style: normal;
    src: url(${LarishAlte}) format("woff");
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
    font-family: "GT America";
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
