import SignUp from "./SignUp/SignUp";
import Feeds from "./Feeds/LandingPage";
import { Routes, Route } from "react-router-dom";
import About from "./landingpage/Landingpage";
import UserAccount from "./Feeds/components/NavBar/components/UserAccount";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user-account" element={<UserAccount />} />
      </Routes>
    </>
  );
};

export default Home;
