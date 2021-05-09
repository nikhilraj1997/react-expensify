import { render } from "react-dom"
import { Provider } from "react-redux"
import "normalize.css"

import AppRouter, { history } from "./routers/AppRouter"
import configureStore from "./store/"
import { startSetExpenses } from "./store/actions/expenses"
import { login, logout } from "./store/actions/auth"
import "./styles/styles.scss"
import "react-dates/lib/css/_datepicker.css"
import firebase from "./firebase/firebase"
import LoadingPage from "./components/LoadingPage"

const store = configureStore()

const withStore = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    render(withStore, document.getElementById("app"))
    hasRendered = true
  }
}

render(<LoadingPage />, document.getElementById("app"))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === "/") {
        history.push("/dashboard")
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push("/")
  }
})
