import { ChartSquare, Heart, Message2 } from "iconsax-react";
import "../styles/interact.css";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../App";

interface props {
  user: any;
  blog: any;
}

const Interact: React.FC<props> = ({ user, blog }) => {
  let [comment, setComment] = useState<boolean>(false);

  const LikeButton = () => {
    let [liked, setLiked] = useState<boolean>(false);
    let [updatedLikes, setUpdatedLikes] = useState<any>(blog.likes);

    const handleLike = async () => {
      const blogDocRef = doc(db, "blogPosts", blog.id);
      try {
        if (!liked) {
          updatedLikes = [...updatedLikes, user.uid];
          setUpdatedLikes(updatedLikes);
          liked = true;
          setLiked(liked);
          await updateDoc(blogDocRef, { likes: updatedLikes });
        } else {
          updatedLikes = [];
          setUpdatedLikes(updatedLikes);
          await blog.likes.map((e: any) => {
            if (e !== user.uid) {
              updatedLikes.push(e);
            }
          });
          setUpdatedLikes(updatedLikes);
          liked = false;
          setLiked(liked);
          await updateDoc(blogDocRef, { likes: updatedLikes });
        }
      } catch (error) {
        console.error("Error adding user to likes array:", error);
      }
    };

    useEffect(() => {
      if (blog.likes.includes(user.uid)) {
        liked = true;
        setLiked(liked);
      } else {
        liked = false;
        setLiked(liked);
      }
    }, []);

    return (
      <>
        {liked ? (
          <button
            style={{ color: "#543ee0", fill: "#543ee0" }}
            onClick={handleLike}
          >
            <Heart style={{ fill: "#543ee0" }} />
            <p>{updatedLikes.length !== 0 ? updatedLikes.length : null}</p>
          </button>
        ) : (
          <button onClick={handleLike}>
            <Heart />
            <p>{updatedLikes.length !== 0 ? updatedLikes.length : null}</p>
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
            <ChartSquare />
            <p>{blog.view.length !== 0 ? blog.view.length : null}</p>
            <p>Views</p>
          </button>
        ) : (
          <button>
            <ChartSquare />
            <p>{blog.view.length !== 0 ? blog.view.length : null}</p>
            <p>Views</p>
          </button>
        )}
      </>
    );
  };

  const Comment = () => {
    return "";
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
          <Message2 />
          <p>Comment</p>
        </button>
        <View />
      </div>
      {comment && <Comment />}
    </section>
  );
};

export default Interact;
