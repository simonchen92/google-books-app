import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/RegisterScreen";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/register">
              <RegisterScreen />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
