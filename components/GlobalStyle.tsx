import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --site-color: royalblue;
    --divider-color: rgba(0, 0, 0, 0.4);
  }

  html {
    font: 100%/1.5 system-ui;
    background-color: rgb(23, 25, 35);
    color: rgb(255, 255, 255);
  }

  a {
    color: inherit;
    text-decoration-color: var(--divider-color);
    text-decoration-thickness: 2px;
  }

  a:hover {
    color: var(--site-color);
    text-decoration-color: currentcolor;
  }

  h1 {
    font-size: 48px;
  }

  h1,
  p {
    margin-bottom: 1.5rem;
  }

  code {
    font-family: 'Menlo';
  }

  .wrapper {
    max-width: 720px;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .prism-code {
    font-size: 1rem;
    padding: 2rem 1rem 1rem 1rem;
    webkit-overflow-scrolling: touch;
    background-color: rgb(1, 22, 39);
    color: rgb(214, 222, 235);
    min-width: 100%;
    margin-bottom: 0;
    margin-top: 0;
    overflow: auto;
  }

  .line-number-style {
    display: inline-block;
    width: 3em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: 0.3;
    text-align: center;
    position: relative;
  }

  .code-highlight .token-line {
    color: rgb(214, 222, 235);
    margin-left: -1rem;
    margin-right: -1rem;
    min-width: 100%;
  }

  /* .post-header h1 {
    margin-bottom: 0;
  } */

  /* .post-header {
    margin-bottom: 2rem;
  } */
  .description {
    opacity: 0.6;
  }

  .line-number-style {
    font-family: Menlo, monospace;
    display: inline-block;
    width: 3em;
    user-select: none;
    opacity: 0.3;
    text-align: center;
    position: relative;
  }

  .highlight-line .line-number-style {
    width: calc(3em - 4px);
    opacity: 0.5;
    left: -2px;
  }

  .code-highlight  .token-line {
    margin-left: -1rem;
    margin-right: -1rem;
    min-width: 100%;
    padding-right: 1rem;
  }

  .highlight-line {
    border-left: 4px solid rgb(2, 155, 206);
    background-color: rgb(2, 55, 81);
  }

  pre[class*="language-"]::before {
    background-color: #fff;
    border-radius: 0px 0px 0.25rem 0.25rem;
    color: #000;
    font-size: 12px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    left: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0px;
    font-family: monospace;
  }

  pre[class~="language-jsx"]::before {
    content: "jsx";
    background: rgb(97, 218, 251);
    color: #000;
  }

  pre[class~="language-javascript"]::before, pre[class~="language-js"]::before {
    content: "js";
    background: rgb(247, 223, 30);
    color: #000;
  }

  [data-name="live-preview"], [data-name="live-editor"] {
    font-size: 1.25rem;
  }

  [data-name="live-editor"] textarea, [data-name="live-editor"] pre {
    padding-top: 16px !important;
    padding-right: 16px !important;
    padding-bottom: 16px !important;
    padding-left: 16px !important;
  }

  .prose [class~=lead] {
      font-size: 1.25em;
      line-height: 1.6;
      margin-top: 1.2em;
      margin-bottom: 1.2em
  }

  .prose a {
    text-decoration: underline
  }

  .prose strong {
    font-weight: 600
}

.prose ol {
    counter-reset: list-counter;
    margin-top: 1.25em;
    margin-bottom: 1.25em
}

.prose ol>li {
    position: relative;
    counter-increment: list-counter;
    padding-left: 1.75em
}

.prose ol>li:before {
    content: counter(list-counter) ".";
    position: absolute;
    font-weight: 400;
    color: #718096;
    left: 0
}

.prose ul>li {
    position: relative;
    padding-left: 1.75em
}

.prose ul>li:before {
    content: "";
    position: absolute;
    background-color: #cbd5e0;
    border-radius: 50%;
    width: .375em;
    height: .375em;
    top: .6875em;
    left: .25em
}

.prose hr {
    border-color: #e2e8f0;
    border-top-width: 1px;
    margin-top: 3em;
    margin-bottom: 3em
}

.prose blockquote {
    font-weight: 500;
    font-style: italic;
    border-left-width: .25rem;
    border-left-color: #e2e8f0;
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding-left: 1em
}

.prose blockquote p:first-of-type:before {
    content: open-quote
}

.prose blockquote p:last-of-type:after {
    content: close-quote
}

.prose h1 {
    font-weight: 800;
    font-size: 2.25em;
    margin-top: 0;
    margin-bottom: .8888889em;
    line-height: 1.1111111
}

.prose h2 {
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333
}

.prose h3 {
    font-size: 1.25em;
    margin-top: 1.6em;
    margin-bottom: .6em;
    line-height: 1.6
}

.prose h3,.prose h4 {
    font-weight: 600
}

.prose h4 {
    margin-top: 1.5em;
    margin-bottom: .5em;
    line-height: 1.5
}

.prose figure figcaption {
    color: #718096;
    font-size: .875em;
    line-height: 1.4285714;
    margin-top: .8571429em
}

.prose table {
    width: 100%;
    table-layout: auto;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: .875em;
    line-height: 1.7142857
}

.prose thead {
    font-weight: 600;
    border-bottom-width: 1px;
    border-bottom-color: #cbd5e0
}

.prose thead th {
    vertical-align: bottom;
    padding-right: .5714286em;
    padding-bottom: .5714286em;
    padding-left: .5714286em
}

.prose tbody tr {
    border-bottom-width: 1px;
    border-bottom-color: #e2e8f0
}

.prose tbody tr:last-child {
    border-bottom-width: 0
}

.prose tbody td {
    vertical-align: top;
    padding: .5714286em
}

.prose {
    font-size: 1rem;
    line-height: 1.75
}

.prose p {
    margin-top: 1.25em;
    margin-bottom: 1.25em
}

.prose figure,.prose img {
    margin-top: 2em;
    margin-bottom: 2em
}

.prose figure>* {
    margin-top: 0;
    margin-bottom: 0
}

.prose h2 code {
    font-size: .875em
}

.prose h3 code {
    font-size: .9em
}

.prose ul {
    margin-top: 1.25em;
    margin-bottom: 1.25em
}

.prose li {
    margin-top: .5em;
    margin-bottom: .5em
}

.prose>ul>li p {
    margin-top: .75em;
    margin-bottom: .75em
}

.prose>ul>li>:first-child {
    margin-top: 1.25em
}

.prose>ul>li>:last-child {
    margin-bottom: 1.25em
}

.prose>ol>li>:first-child {
    margin-top: 1.25em
}

.prose>ol>li>:last-child {
    margin-bottom: 1.25em
}

.prose ol ol,.prose ol ul,.prose ul ol,.prose ul ul {
    margin-top: .75em;
    margin-bottom: .75em
}

.prose h2+*,.prose h3+*,.prose h4+*,.prose hr+* {
    margin-top: 0
}

.prose thead th:first-child {
    padding-left: 0
}

.prose thead th:last-child {
    padding-right: 0
}

.prose tbody td:first-child {
    padding-left: 0
}

.prose tbody td:last-child {
    padding-right: 0
}

/* .prose>:first-child {
    margin-top: 0
} */

.prose>:last-child {
    margin-bottom: 0
}


`;
