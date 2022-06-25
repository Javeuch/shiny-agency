import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home"
import Survey from "./pages/Survey"
import Header from "./components/Header"
import Error from "./components/Error"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/survey">
        <Survey />
      </Route>
      <Route path="/survey/:questionNumber">
        <Survey />
      </Route>
      <Route>
        <Error />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
