import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "app"

import "assets/scss/black-dashboard-react.scss"
import "assets/demo/demo.css"
import "assets/css/nucleo-icons.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper"
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper"

import { ApiProvider } from 'api/api'

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <ApiProvider>
          <App />
        </ApiProvider>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
)
