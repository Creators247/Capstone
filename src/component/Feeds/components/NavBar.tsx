import "../styles/navbar.css";
import { auth } from "../../../App";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import {
  Save2,
  Login,
  Logout,
  Chart1,
  Hashtag,
  TrendUp,
  FtxToken,
  Briefcase,
  ProfileTick,
  Profile2User,
  Personalcard,
  DirectboxDefault,
  NotificationBing,
} from "iconsax-react";

interface props {
  userExist: (data: any) => void;
}

const NavBar: React.FC<props> = ({ userExist }: any) => {
  const Userprofile = () => {
    if (userExist.photoURL !== null) {
      return (
        <button>
          <div
            style={{
              background: `url(${userExist.photoURL}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div></div>
          </div>
          <p>Account</p>
        </button>
      );
    } else {
      return (
        <button style={{ color: "#543ee0" }}>
          <ProfileTick />
          <p>Account</p>
        </button>
      );
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <section id="nav-bar">
      <h1>CHATTER</h1>
      <section className="over-view">
        <div>
          <Briefcase />
          <h3>Overview</h3>
        </div>
        <nav>
          <button>
            <FtxToken />
            <p>Feed</p>
          </button>

          <button>
            <Save2 />
            <p>Bookmarks</p>
          </button>

          <button>
            <Profile2User />
            <p>Team blogs</p>
          </button>

          <button>
            <DirectboxDefault />
            <p>Draft</p>
          </button>

          <button>
            <Chart1 variant="Broken" />
            <p>Analytics</p>
          </button>
        </nav>
      </section>

      <section className="trending tags">
        <div >
          <TrendUp />
          <h3>Trending tags</h3>
        </div>

        <nav>
          <Link to="/">
            <Hashtag />
            <p>Programming</p>
          </Link>

          <Link to="/">
            <Hashtag />
            <p>Data science</p>
          </Link>

          <Link to="/">
            <Hashtag />
            <p>Technology</p>
          </Link>

          <Link to="/">
            <Hashtag />
            <p>Machine learning</p>
          </Link>

          <Link to="/">
            <Hashtag />
            <p>Politics</p>
          </Link>
        </nav>
      </section>

      <section className="persoanl">
        <div>
          <Personalcard />
          <h3>Personal</h3>
        </div>

        <nav>
          {userExist && <Userprofile />}

          <button>
            <NotificationBing />
            <p>Notifications</p>
          </button>

          {userExist ? (
            <button onClick={logOut}>
              <Logout color="#c50c0c" />
              <p style={{ color: "#c50c0c" }}>Log Out</p>
            </button>
          ) : (
            <Link to="/sign-up">
              <Login color="#543ee0" />
              <p style={{ color: "#543ee0" }}>Log In</p>
            </Link>
          )}
        </nav>
      </section>
    </section>
  );
};

export default NavBar;
