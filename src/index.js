import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./Store"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"
import "./styles/tailwind.css"
import Fingerprint2 from "fingerprintjs2"

Fingerprint2.get({}, function(components) {
  var values = components.map(function(component) {
    return component.value
  })
  var murmur = Fingerprint2.x64hash128(values.join(""), 31)
  console.log("Fingerprint", murmur)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)

serviceWorker.unregister()
