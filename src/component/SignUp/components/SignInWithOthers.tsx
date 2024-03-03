import "../styles/signinwithothers.css";

const SignInWithOthers = () => {
  const signInHoverout = (e: any) => {
    e.target.previousElementSibling.style.width = "10%";
  };

  const signInHoverin = (e: any) => {
    e.target.previousElementSibling.style.width = "80%";
  };

  return (
    <div id="SignInWithOthers">
      <button type="button">
        <img src="../../../google.png" alt="google-logo" />
        <p>Sign up with google</p>
      </button>
      <button
        onMouseOver={signInHoverout}
        onMouseOut={signInHoverin}
        type="button"
      >
        <img src="../../../linkedin.png" alt="linkedin-logo" />
        <p>Sign up with Linkedin</p>
      </button>
    </div>
  );
};

export default SignInWithOthers;
