import "../styles/feedcontent.css";
import { Edit2 } from "iconsax-react";
import FeedContentHeader from "./FeedContentHeader";

const FeedContent = () => {
  return (
    <section id="feed-content">
      <div>
        <div>
          <h3>FEEDS</h3>
          <p>Explore different content you’d love </p>
        </div>
        <button>
          <Edit2 />
          <p>Post a content</p>
        </button>
      </div>
      <div>
        <FeedContentHeader />
      </div>
    </section>
  );
};

export default FeedContent;
