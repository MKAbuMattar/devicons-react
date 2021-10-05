import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Montserrat");

*{
    scroll-behavior: smooth;
}

body {
  word-wrap: break-word;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  color: #2e2e2e;
}

#search-list {
  padding: 60px;
  max-width: 800px;
  margin: auto;
}

#search-list input {
  line-height: 2;
  font-size: 18px;
  height: auto;
  padding-left: 20px;
}

.cards {
  margin: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  margin-top: -1px;
  line-height: 2;
  font-size: 140px;
  background: white;
  border-radius: 10px;
  width: 48%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.info {
  padding:20px 20px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
}

.title {
  color: darkblue;
  margin-bottom: 5px;
}

.hljs {
  display: block;
  overflow-x: auto;
  padding: .5em;
  background: #282a36;
  border-radius: 0 0 10px 10px !important;
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

`
