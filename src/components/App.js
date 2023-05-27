import "../styles/App.css";
import "../styles/Toggle.css";
import Toggle from "react-toggle";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { contextUse, color } from "./Context/UseContext";
import Home from "./Home/Home";
import Login from "./Login/Login";
import NavBar from "./NavBar/NavBar";
import NotFound from "./NotFound";
import Profile from "./Profile/Profile";
import userList from "../data/userList.json";
import AuthRoute from "./AuthRoute/AuthRoute";
import ListApi from "./ApiConnect/Api";
import Title from "./Title/Title";

function App() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  const loginUser = (formData, prevRoute) => {
    const existsUser = userList.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (existsUser) {
      setUser(existsUser);
      setLoginError("");
      navigate(prevRoute || "/");
    } else {
      setUser(false);
      setLoginError("Usuario o contraseña incorrectos");
    }
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="App-header">
      <Toggle
        checked={theme}
        onChange={({ target }) => setTheme(target.checked)}
        icons={{ checked: "🔆", unchecked: "🌙" }}
        aria-label="Dark mode toggle"
      />
      <color.Provider value={theme}>
        <NavBar user={user} logoutUser={logoutUser} />
        <contextUse.Provider value={user}>
          <Routes>
            <Route path="/" element={<Home Title={Title} />} />
            <Route
              path="/profile"
              element={
                <AuthRoute
                  user={user}
                  component={<Profile user={user} Title={Title} />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  loginUser={loginUser}
                  loginError={loginError}
                  Title={Title}
                />
              }
            />
            <Route path="/character" element={<ListApi />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </contextUse.Provider>
      </color.Provider>
    </div>
  );
}

export default App;
