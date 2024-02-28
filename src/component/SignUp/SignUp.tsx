import "./signup.css";
import { useState, useEffect } from "react";

interface props {
  collectDataFromSignUpHeader: (data: any) => void;
}

const Login = () => {
  return (
    <form id="log-in">
      <label htmlFor="Email">
        Email address
        <input
          type="email"
          name=""
          id="Email"
          placeholder="Johndoe@gmail.com"
        />
      </label>

      <label htmlFor="Password">
        Password
        <input type="password" name="" id="Password" placeholder="**********" />
      </label>

      <button>Log in</button>
    </form>
  );
};

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const signInHoverout = (e: any) => {
    e.target.previousElementSibling.style.width = "10%";
  };
  const signInHoverin = (e: any) => {
    e.target.previousElementSibling.style.width = "80%";
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

      <div className="button-holder">
        <button type="button">
          <img src="../../../google.png" alt="google-logo" />
          <p>Sign up with google</p>
        </button>
        <button onMouseOver={signInHoverout} onMouseOut={signInHoverin} type="button">
          <img src="../../../linkedin.png" alt="linkedin-logo" />
          <p>Sign up with Linkedin</p>
        </button>
      </div>
    </form>
  );
};

const SignUpHeader: React.FC<props> = ({ collectDataFromSignUpHeader }) => {
  let [greeting, setGreeting] = useState(true);

  const showLogInComponent = () => {
    greeting = false;
    setGreeting(greeting);
    let right =
      document.getElementById("sign-up-header")?.firstElementChild
        ?.lastElementChild?.firstElementChild;
    right?.classList.add("right");
    collectDataFromSignUpHeader(false);
  };

  const showRegisterComponent = () => {
    greeting = true;
    setGreeting(greeting);
    let left =
      document.getElementById("sign-up-header")?.firstElementChild
        ?.lastElementChild?.firstElementChild;
    if (left?.classList.length !== 0) {
      left?.classList.remove("right");
      left?.classList.add("left");
    }
    collectDataFromSignUpHeader(true);
  };

  return (
    <div id="sign-up-header">
      <section>
        <div>
          <p onClick={showRegisterComponent}>REGISTER</p>
          <p onClick={showLogInComponent}>LOG IN</p>
        </div>
        <div>
          <div></div>
        </div>
      </section>
      <h1>{greeting ? "Register as a Writer/Reader" : "Welcome back"}</h1>
    </div>
  );
};

const SignUp = () => {
  const [data, setData] = useState(true);

  const observer = (data: any) => {
    setData(data);
  };
  return (
    <section id="sign-up">
      <section className="a">
        <div>
          <div>
            <h4>CATTER</h4>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
          </div>
        </div>
      </section>
      <section className="b">
        <div>
          <SignUpHeader collectDataFromSignUpHeader={observer} />
          {data ? <Register /> : <Login />}
        </div>
      </section>
    </section>
  );
};

export default SignUp;
