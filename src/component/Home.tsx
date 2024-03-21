import SignUp from "./SignUp/SignUp";
import Feeds from "./Feeds/Feeds.tsx";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/Landingpage.tsx";
import UserAccount from "./Feeds/components/NavBar/components/UserAccount";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user-account" element={<UserAccount />} />
      </Routes>
    </>
  );
};

export default Home;
