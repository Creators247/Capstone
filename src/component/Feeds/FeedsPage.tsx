import "./feedspage.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import FeedContent from "./components/FeedContent";

const Feeds = () => {
  return (
    <section id="feeds">
      <NavBar />
      <div>
        <SearchBar />
        <FeedContent />
      </div>
    </section>
  );
};

export default Feeds;
