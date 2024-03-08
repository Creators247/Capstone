import "../styles/navbar.css";
import { Link } from "react-router-dom";
import {
  Save2,
  Logout,
  Chart1,
  Hashtag,
  TrendUp,
  Profile,
  FtxToken,
  Briefcase,
  Profile2User,
  Personalcard,
  DirectboxDefault,
  NotificationBing,
} from "iconsax-react";

const NavBar = () => {
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
        <div>
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
          <button>
            <Profile />
            <p>Account</p>
          </button>

          <button>
            <NotificationBing />
            <p>Notifications</p>
          </button>

          <button>
            <Logout color="#ff0000" />
            <p style={{ color: "red" }}>Log Out</p>
          </button>
        </nav>
      </section>
    </section>
  );
};

export default NavBar;
