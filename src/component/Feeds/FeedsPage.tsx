import "./feedspage.css";
import { auth } from "../../App";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FeedContent from "./components/FeedContent";
import { onAuthStateChanged } from "firebase/auth";

const Feeds = () => {
  let [userLogin, setUserLogin] = useState<any>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userLogin = user;
      setUserLogin(userLogin);
    }else{
      userLogin = false;
      setUserLogin(userLogin)
    }
  });

  return (
    <section id="feeds">
      <NavBar userExist={userLogin} />
      <div>
        <SearchBar  userExist={userLogin}/>
        <FeedContent  userExist={userLogin}/>
      </div>
    </section>
  );
};

export default Feeds;
