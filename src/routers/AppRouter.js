import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import NotFoundPage from "../components/NotFoundPage"
import LoginPage from "../components/LoginPage"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

export const history = createBrowserHistory()

const AppRouter = () => (
  <BrowserRouter>
    <>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </BrowserRouter>
)

export default AppRouter
