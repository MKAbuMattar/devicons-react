import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './style/Style'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
