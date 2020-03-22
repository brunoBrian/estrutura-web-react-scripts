import { createGlobalStyle } from 'styled-components';

import { device } from './device';

export const GlobalStyles = createGlobalStyle`
  *, *:after {
    font-family: 'Ubuntu', sans-serif;
    margin: 0px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, textarea, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Ubuntu', sans-serif;
  }
  
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 50%;
    
    @media ${device.tablet} {
      font-size: 62.5%;
    }
  }
  
  body {
    line-height: 1;
    font-size: 1.6rem;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote {
    &:before, &:after {
      content: '';
      content: none;
    } 
  }
  
  q {
    &:before, &:after {
      content: '';
      content: none;
    }
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  
  a {
    text-decoration: none;
    color: initial;
  }
  
  button {
    border: 0;
    outline: none;
  }
  
  input {
    display: block;
  }
`;
