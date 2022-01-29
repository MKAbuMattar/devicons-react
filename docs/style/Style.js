import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #2e2e2e;
}

::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background-color: #071013;
}

::-webkit-scrollbar-thumb {
    background-color: #44575f;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: .5em;
  background: #282a36;
  border: 0;
}

.hljs-keyword,
.hljs-link,
.hljs-literal,
.hljs-section,
.hljs-selector-tag {
  color: #8be9fd
}

.hljs-function .hljs-keyword {
  color: #ff79c6
}

.hljs,
.hljs-subst {
  color: #f8f8f2
}

.hljs-addition,
.hljs-attribute,
.hljs-bullet,
.hljs-name,
.hljs-string,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable,
.hljs-title,
.hljs-type,
.hljs-variable {
  color: #f1fa8c
}

.hljs-comment,
.hljs-deletion,
.hljs-meta,
.hljs-quote {
  color: #6272a4
}

.hljs-doctag,
.hljs-keyword,
.hljs-literal,
.hljs-name,
.hljs-section,
.hljs-selector-tag,
.hljs-strong,
.hljs-title,
.hljs-type {
  font-weight: 700
}

.hljs-emphasis {
  font-style: italic
}

@keyframes animate-arrow-wave {
  0%   { opacity: 0.2; }
  25%  { opacity: 0.2; }
  50%  { opacity: 0.2; }
  75%  { opacity: 1.0; }
  100% { opacity: 0.2; }
}

`
