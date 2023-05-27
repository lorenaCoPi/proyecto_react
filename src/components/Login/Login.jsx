import { useState } from "react";
import { useLocation } from "react-router-dom";
import { color } from "../Context/UseContext";
import { useContext } from "react";
import LogIn from "../Button/Button";

const initial_state = {
  email: "",
  password: "",
};

const Login = ({ loginUser, loginError, Title }) => {
  const location = useLocation();
  const { state } = location;
  const [formData, setFormData] = useState(initial_state);

  const theme = useContext(color);

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (ev) => {
    ev.preventDefault();
    loginUser(formData, state ? state.prevRoute : null);
    setFormData(initial_state);
  };

  return (
    <>
      <div className={theme ? "light" : "dark"}>
        <div className="body_login">
          <Title />
          <form onSubmit={submitForm}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={changeInput}
                value={formData.email}
              />
            </label>
            <label htmlFor="pass">
              Contraseña
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Contraseña"
                onChange={changeInput}
                value={formData.password}
              />
            </label>
            <div>
              <LogIn />
            </div>
            {loginError ? (
              <div style={{ color: "red" }}>{loginError}</div>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
