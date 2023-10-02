import React from "react";
import { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const extractUserNameFormEmail = (mail) => {
    if (mail.includes("@")) {
      let splitedString = mail.split("@");
      console.log(splitedString);
      return splitedString[0];
    }
    return "";
  };
  const handleEmailChange = (event) => {
    let mail = event.target.value;
    console.log(mail);
    let uname =
      user.username != "" ? user.username : extractUserNameFormEmail(mail);

    setUser({
      ...user,
      username: uname,
      email: mail,
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          id="email"
          placeholder="Email Adress"
          value={user.email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="text"
          id="username"
          placeholder="User Name"
          value={user.username}
        />
        <br />
        <input
          type="text"
          id="Password"
          placeholder="Password"
          value={user.password}
        />
        <br />
        <input
          type="text"
          id="passwordConfirm"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// console.log(user);
export default Registration;
