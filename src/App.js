import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from './Components/AdminPage/AdminPage';
import HomePage from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login';
import ProjectPage from './Components/ProjectPage/ProjectPage';
import Footer from './Components/Footer/Footer';
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/projects">
            <ProjectPage></ProjectPage>
          </Route>
          <Route path="/log-in">
            <Login></Login>
          </Route>
          <Router path="/admin">
            <AdminPage></AdminPage>
          </Router>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
