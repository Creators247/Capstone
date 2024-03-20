import { Eye, Like, MessageAdd } from "iconsax-react";
import "../styles/interact.css";
import { useEffect, useState } from "react";

interface props {
  user: any;
  blog: any;
}

const Interact: React.FC<props> = ({ user, blog }) => {
  let [comment, setComment] = useState<boolean>(false);

  const LikeButton = () => {
    let [liked, setLiked] = useState<boolean>(false);

    const handleLike = async () => {
      if (liked) {
      } else {
      }
    };

    blog.likes.map((likes: any) => {
      if (user.uid == likes) {
        liked = true;
        setLiked(liked);
      } else {
        liked = false;
        setLiked(liked);
      }
    });

    return (
      <>
        {liked ? (
          <button style={{ color: "#543ee0" }} onClick={handleLike}>
            <sup>{blog.likes.length + 1}</sup>
            <Like /> Likes
          </button>
        ) : (
          <button onClick={handleLike}>
            <sup>{blog.likes.length + 1}</sup>
            <Like />
            Likes
          </button>
        )}
      </>
    );
  };

  const View = () => {
    let [view, setView] = useState<boolean>(false);

    useEffect(() => {}, []);

    blog.view.map((views: any) => {
      if (user.uid == views) {
        view = true;
        setView(view);
      } else {
        view = false;
        setView(view);
      }
    });

    return (
      <>
        {view ? (
          <button style={{ color: "#543ee0" }}>
            <sup>{blog.view.length + 1}</sup>
            <Eye />
            Views
          </button>
        ) : (
          <button>
            <sup>{blog.view.length + 1}</sup>
            <Eye />
            Views
          </button>
        )}
      </>
    );
  };

  const Comment = () => {
    return ""
  };

  const handleCommentSection = () => {
    if (comment) {
      comment = false;
      setComment(comment);
    } else {
      comment = true;
      setComment(comment);
    }
  };

  return (
    <section id="interact">
      <div>
        <LikeButton />
        <button onClick={handleCommentSection}>
          <MessageAdd />
          Comment
        </button>
        <View />
      </div>
      {comment && <Comment />}
    </section>
  );
};

export default Interact;
