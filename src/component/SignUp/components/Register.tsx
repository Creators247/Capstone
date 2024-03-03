import "../styles/register.css"
import { useState } from "react";
import SignInWithOthers from "./SignInWithOthers";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form id="register">
      <div className="nameholder">
        <label htmlFor="first-name">
          First Name
          <input type="text" name="first-name" id="first-name" />
        </label>

        <label htmlFor="last-name">
          Last Name
          <input type="text" name="last-name" id="last-name" />
        </label>
      </div>

      <div>
        <label htmlFor="dropdown">You are joining as?</label>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="writer">Writer</option>
          <option value="reader">Reader</option>
        </select>
      </div>

      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Johndoe@gmail.com"
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
        />
      </label>

      <label htmlFor="confirm-password">
        Confirm Password
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="**********"
        />
      </label>

      <button>Create account</button>

      <SignInWithOthers />
    </form>
  );
};

export default Register;
