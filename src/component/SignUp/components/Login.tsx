import "../styles/login.css";
import SignInWithOthers from "./SignInWithOthers";

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

      <div>
        <button>Log in</button>
        
        <SignInWithOthers />
      </div>
    </form>
  );
};

export default Login;
