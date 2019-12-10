import { css } from "@emotion/core";
import mediaqueries from "@styles/media";

import Portrait from "www/static/fonts/Portrait/Portrait-Regular2.woff";
import PortraitItalic from "www/static/fonts/Portrait/Portrait-Regular2Italic.woff";
import PortraitMedium from "www/static/fonts/Portrait/Portrait-Medium.woff";
import PortraitBold from "www/static/fonts/Portrait/Portrait-Bold.woff";

import FoundersMono from 'www/static/fonts/Founders Grotesk Mono/FoundersGroteskMono-Light.woff';
import FoundersMonoRegular from 'www/static/fonts/Founders Grotesk Mono/FoundersGroteskMono.woff';
import FoundersMonoMedium from 'www/static/fonts/Founders Grotesk Mono/FoundersGroteskMono-Medium.woff';

import NoeText from 'www/static/fonts/Noe Text/NoeText-Book.woff';
import NoeTextItalic from 'www/static/fonts/Noe Text/NoeText-BookItalic.woff';
import NoeTextSemi from 'www/static/fonts/Noe Text/NoeText-SemiBold.woff';
import NoeTextSemiItalic from 'www/static/fonts/Noe Text/NoeText-SemiBoldItalic.woff';
import NoeTextBold from 'www/static/fonts/Noe Text/NoeText-Bold.woff';
import NoeTextBoldItalic from 'www/static/fonts/Noe Text/NoeText-BoldItalic.woff';
import NoeTextBlack from 'www/static/fonts/Noe Text/NoeText-Black.woff';
import NoeTextBlackItalic from 'www/static/fonts/Noe Text/NoeText-BlackItalic.woff';

import NoeDisplay from 'www/static/fonts/Noe Display/NoeDisplay-Regular.woff';
import NoeDisplayItalic from 'www/static/fonts/Noe Display/NoeDisplay-RegularItalic.woff';
import NoeDisplayMedium from 'www/static/fonts/Noe Display/NoeDisplay-Medium.woff';
import NoeDisplayMediumItalic from 'www/static/fonts/Noe Display/NoeDisplay-MediumItalic.woff';
import NoeDisplayBold from 'www/static/fonts/Noe Display/NoeDisplay-Bold.woff';
import NoeDisplayBoldItalic from 'www/static/fonts/Noe Display/NoeDisplay-BoldItalic.woff';

import RepublicBook from "www/static/fonts/SangBleu/SangBleuRepublic-Book.woff";
import RepublicBookItalic from "www/static/fonts/SangBleu/SangBleuRepublic-BookItalic.woff";
import RepublicRegular from "www/static/fonts/SangBleu/SangBleuRepublic-Regular.woff";
import RepublicRegularItalic from "www/static/fonts/SangBleu/SangBleuRepublic-Italic.woff";
import RepublicBold from "www/static/fonts/SangBleu/SangBleuRepublic-Bold.woff";
import RepublicBoldItalic from "www/static/fonts/SangBleu/SangBleuRepublic-BoldItalic.woff";

import SuisseThin from "www/static/fonts/Suisse/SuisseIntl-Thin.woff";
import SuisseThinItalic from "www/static/fonts/Suisse/SuisseIntl-ThinItalic.woff";
import SuisseLight from "www/static/fonts/Suisse/SuisseIntl-Light.woff";
import SuisseLightItalic from "www/static/fonts/Suisse/SuisseIntl-LightItalic.woff";
import SuisseRegular from "www/static/fonts/Suisse/SuisseIntl-Regular.woff";
import SuisseRegularItalic from "www/static/fonts/Suisse/SuisseIntl-Italic.woff";
import SuisseMedium from "www/static/fonts/Suisse/SuisseIntl-Medium.woff";
import SuisseMediumItalic from "www/static/fonts/Suisse/SuisseIntl-MediumItalic.woff";
import SuisseBold from "www/static/fonts/Suisse/SuisseIntl-Bold.woff";
import SuisseBoldItalic from "www/static/fonts/Suisse/SuisseIntl-BoldItalic.woff";
import SuisseCondMedium from "www/static/fonts/Suisse/SuisseIntlCondensed-Medium.woff";
import SuisseCondBold from "www/static/fonts/Suisse/SuisseIntlCondensed-Bold.woff";
import SuisseCondBoldItalic from "www/static/fonts/Suisse/SuisseIntlCondensed-BoldItalic.woff";









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
  /** Founders Grotesk Mono */
  @font-face {
    font-family: "Founders Mono";
    font-weight: 300;
    font-style: normal;
    src: url(${FoundersMono}) format("woff");
  }
  @font-face {
    font-family: "Founders Mono";
    font-weight: 400;
    font-style: normal;
    src: url(${FoundersMonoRegular}) format("woff");
  }
  @font-face {
    font-family: "Founders Mono";
    font-weight: 500;
    font-style: normal;
    src: url(${FoundersMonoMedium}) format("woff");
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

   /** Noe Text */
   @font-face {
    font-family: "Noe Text";
    font-weight: 400;
    font-style: normal;
    src: url(${NoeText}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 400;
    font-style: italic;
    src: url(${NoeTextItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 500;
    font-style: normal;
    src: url(${NoeTextSemi}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 500;
    font-style: italic;
    src: url(${NoeTextSemiItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 700;
    font-style: normal;
    src: url(${NoeTextBold}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 700;
    font-style: italic;
    src: url(${NoeTextBoldItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 900;
    font-style: normal;
    src: url(${NoeTextBlack}) format("woff");
  }
  @font-face {
    font-family: "Noe Text";
    font-weight: 900;
    font-style: italic;
    src: url(${NoeTextBlackItalic}) format("woff");
  }

  /** Noe Display */
  @font-face {
    font-family: "Noe Display";
    font-weight: 400;
    font-style: normal;
    src: url(${NoeDisplay}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 400;
    font-style: italic;
    src: url(${NoeDisplayItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 500;
    font-style: normal;
    src: url(${NoeDisplayMedium}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 500;
    font-style: italic;
    src: url(${NoeDisplayMediumItalic}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 700;
    font-style: normal;
    src: url(${NoeDisplayBold}) format("woff");
  }
  @font-face {
    font-family: "Noe Display";
    font-weight: 700;
    font-style: italic;
    src: url(${NoeDisplayBoldItalic}) format("woff");
  }

   /** Republic */
   @font-face {
    font-family: "SangBleu Republic";
    font-weight: 300;
    font-style: normal;
    src: url(${RepublicBook}) format("woff");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 300;
    font-style: italic;
    src: url(${RepublicBookItalic}) format("woff");
  }
   @font-face {
    font-family: "SangBleu Republic";
    font-weight: 400;
    font-style: normal;
    src: url(${RepublicRegular}) format("woff");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 400;
    font-style: italic;
    src: url(${RepublicRegularItalic}) format("woff");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 700;
    font-style: normal;
    src: url(${RepublicBold}) format("woff");
  }
  @font-face {
    font-family: "SangBleu Republic";
    font-weight: 700;
    font-style: italic;
    src: url(${RepublicBoldItalic}) format("woff");
  }



  /** Suisse Int'l  */
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 200;
    font-style: normal;
    src: url(${SuisseThin}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 200;
    font-style: italic;
    src: url(${SuisseThinItalic}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 300;
    font-style: normal;
    src: url(${SuisseLight}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 300;
    font-style: italic;
    src: url(${SuisseLightItalic}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 400;
    font-style: normal;
    src: url(${SuisseRegular}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 400;
    font-style: italic;
    src: url(${SuisseRegularItalic}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 500;
    font-style: normal;
    src: url(${SuisseMedium}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 500;
    font-style: italic;
    src: url(${SuisseMediumItalic}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 700;
    font-style: normal;
    src: url(${SuisseBold}) format("woff");
  }
  @font-face {
    font-family: "Suisse Intl";
    font-weight: 700;
    font-style: italic;
    src: url(${SuisseBoldItalic}) format("woff");
  }
  @font-face {
    font-family: "Suisse Int'l Condensed";
    font-weight: 500;
    font-style: normal;
    src: url(${SuisseCondMedium}) format("woff");
  }
  @font-face {
    font-family: "Suisse Int'l Condensed";
    font-weight: 700;
    font-style: normal;
    src: url(${SuisseCondBold}) format("woff");
  }
  @font-face {
    font-family: "Suisse Int'l Condensed";
    font-weight: 700;
    font-style: italic;
    src: url(${SuisseCondBoldItalic}) format("woff");
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
    font-family: "Suisse Intl";
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
