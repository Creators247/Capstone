import About from "./About/About";
import SignUp from "./SignUp/SignUp";
import Feeds from "./LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Home;
