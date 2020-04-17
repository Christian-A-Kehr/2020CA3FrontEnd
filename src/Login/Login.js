import React, { useState, useEffect } from "react";
import facade from "../ApiFacade";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}

function LoggedIn({ logout }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data.msg));
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function Login({ loginMsg, isLoggedIn, setLoginStatus }) {

  const logout = () => {
    facade.logout();
    setLoginStatus(false);
  };
  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => setLoginStatus(true))
      .catch((res) =>
        alert("Status code : " + res.status + " wrong username or password")
      );
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LogIn login={login} loginMsg={loginMsg} />
      ) : (
          <LoggedIn logout={logout} loginMsg={loginMsg} />
        )}
    </div>
  );
}
export default Login;
