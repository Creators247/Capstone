import "../styles/feedcontent.css";
import { Edit2 } from "iconsax-react";
import { auth } from "../../../App.tsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import FeedContentHeader from "./FeedContentHeader";

interface props {
  renderComponent: {
    renderPostEditor: () => void;
    renderFeeds: (e: any) => void;
    renderDraft: (e: any) => void;
    renderBookMark: (e: any) => void;
    renderTeamBlogs: (e: any) => void;
    renderAnalytics: (e: any) => void;
    renderNotification: (e: any) => void;
  };
}

const FeedContent: React.FC<props> = ({ renderComponent }: any) => {
  let [userLogin, setUserLogin] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userLogin = user;
        setUserLogin(userLogin);
      } else {
        userLogin = null;
        setUserLogin(userLogin);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const HandlePost = () => {
    if (userLogin) if (renderComponent) renderComponent.renderPostEditor();
  };

  return (
    <section id="feed-content">
      <div>
        <div>
          <h3>FEEDS</h3>
          <p>Explore different content you’d love </p>
        </div>
        <button onClick={HandlePost}>
          <Edit2 />
          <p>Post a content</p>
        </button>
      </div>
      <div>
        <FeedContentHeader />
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
        <p>great</p>
      </div>
    </section>
  );
};

export default FeedContent;
