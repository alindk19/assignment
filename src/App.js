import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import NavBar from "./components/NavBar/NavBar";
import RecruiterHome from "./components/RecruiterHome/RecruiterHome";
import PostJob from "./components/PostJob/PostJob";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/home">
            <RecruiterHome />
          </Route>
          <Route exact path="/post">
            <PostJob />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
