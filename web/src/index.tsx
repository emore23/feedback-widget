// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Intefaces
import App from './Components/Interfaces/App'

// Styles
import GlobalStyle from './Styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>
)
