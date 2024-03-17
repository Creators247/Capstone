import "./post.css";
import { v4 } from "uuid";
import { useState } from "react";
import Article from "./component/Article";
import { db, Storage } from "../../../../App";
import { collection, addDoc } from "firebase/firestore";
import AddImageOrVideo from "./component/AddImageOrVideo";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Post = () => {
  let [imageOrVideo, setimageOrVideo] = useState(false);
  let [articleHeading, setArticleHeading] = useState<string>("");
  let [articleVideoUrl, setArticleVideoUrl] = useState<any>(null);
  let [articleImageUrl, setArticleImageUrl] = useState<any>(null);
  let [articleVideo, setArticleVideo] = useState<File | null>(null);
  let [articleImage, setArticleImage] = useState<File | null>(null);
  let [articleParagraph, setArticleParagraph] = useState<string>("");

  const handleEditor = (e: any) => {
    e.preventDefault();
    let articleContainer: any = document.getElementById("post");

    if (imageOrVideo == false) {
      imageOrVideo = true;
      setimageOrVideo(imageOrVideo);
      if (articleContainer) {
        articleContainer.lastElementChild.style.alignItems = "center";
        articleContainer.lastElementChild.style.flexDirection = "row";
      }
    } else {
      imageOrVideo = false;
      setimageOrVideo(imageOrVideo);
      if (articleContainer) {
        articleContainer.lastElementChild.style.alignItems = "normal";
        articleContainer.lastElementChild.style.flexDirection = "column";
      }
    }
  };

  const handlePublishPost = async (event: React.FormEvent) => {
    event.preventDefault();

    // Convert content to Markdown
    let markdownContent = ``;
    if (articleHeading !== "") {
      markdownContent = `# ${articleHeading}\n\n${articleParagraph} `;
    } else {
      markdownContent = `# ${articleParagraph} `;
    }

    // If image or video is uploaded, include the Markdown syntax for them
    if (articleImageUrl) {
      const imageRef = ref(Storage, `images/${articleImageUrl.name + v4()}`);
      let snapShot = await uploadBytes(imageRef, articleImageUrl);
      let imageUrl = await getDownloadURL(snapShot.ref);
      markdownContent += `\n\n![Image](${imageUrl}) `;
    }

    if (articleVideoUrl) {
      const videoRef = ref(Storage, `videos/${articleVideoUrl.name + v4()}`);
      let snapShot = await uploadBytes(videoRef, articleVideoUrl);
      let videoUrl = await getDownloadURL(snapShot.ref);
      markdownContent += `\n\n[Video](${videoUrl})`;
    }

    try {
      // Save Markdown content to Firebase Firestore
      await addDoc(collection(db, "blogPosts"), {
        articleHeading,
        markdownContent,
        createdAt: new Date(),
      });

      // Reset form fields after submission
      setArticleImage(null);
      setArticleVideo(null);
      setArticleHeading("");
      setArticleParagraph("");
      setArticleImageUrl(null);
      setArticleVideoUrl(null);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const AddCircle = () => {
    return (
      <section onClick={handleEditor} id="addCircle">
        <span></span>
        <span></span>
      </section>
    );
  };

  class getArticleDetails {
    root: any;
    articleContainer: any = document.getElementById("post");
    constructor() {
      this.root;
      this.articleContainer;
    }

    getHeading(e: any) {
      articleHeading = e;
      setArticleHeading(articleHeading);
    }

    getParagraph(e: any) {
      articleParagraph = e;
      setArticleParagraph(articleParagraph);
    }

    getVideo(e1: any, e2: any) {
      articleVideo = e1;
      articleImage = null;
      imageOrVideo = false;
      articleVideoUrl = e2;
      setArticleImage(articleImage);
      setArticleVideo(articleVideo);
      setimageOrVideo(imageOrVideo);
      setArticleVideoUrl(articleVideoUrl);
      this.articleContainer.lastElementChild.style.alignItems = "normal";
      this.articleContainer.lastElementChild.style.flexDirection = "column";
    }

    getImage(e1: any, e2: any) {
      articleImage = e1;
      articleVideo = null;
      imageOrVideo = false;
      articleImageUrl = e2;
      setArticleVideo(articleVideo);
      setArticleImage(articleImage);
      setimageOrVideo(imageOrVideo);
      setArticleImageUrl(articleImageUrl);
      this.articleContainer.lastElementChild.style.alignItems = "normal";
      this.articleContainer.lastElementChild.style.flexDirection = "column";
    }

    nullImageAndVideo() {
      articleImage = null;
      articleVideo = null;
      imageOrVideo = false;
      setArticleVideo(articleVideo);
      setArticleImage(articleImage);
      setimageOrVideo(imageOrVideo);
      this.articleContainer.lastElementChild.style.alignItems = "normal";
      this.articleContainer.lastElementChild.style.flexDirection = "column";
    }

    getAllRenderMethods() {
      return {
        getVideo: this.getVideo.bind(this),
        getImage: this.getImage.bind(this),
        getHeading: this.getHeading.bind(this),
        getParagraph: this.getParagraph.bind(this),
        nullImageAndVideo: this.nullImageAndVideo.bind(this),
      };
    }
  }

  const PublishButton = () => {
    if (articleParagraph !== "") {
      return (
        <button type="submit">
          <p>Publish</p>
        </button>
      );
    } else {
      return (
        <button type="button" style={{ backgroundColor: "#543EE080" }}>
          <p>Publish</p>
        </button>
      );
    }
  };

  const instance = new getArticleDetails();
  const allRenderMethods = instance.getAllRenderMethods();

  return (
    <form id="post" onSubmit={handlePublishPost}>
      <PublishButton />
      <div>
        <AddCircle />
        <div>
          {imageOrVideo ? (
            <AddImageOrVideo renderAll={allRenderMethods} />
          ) : (
            <Article
              video={articleVideo}
              image={articleImage}
              heading={articleHeading}
              paragraph={articleParagraph}
              renderAll={allRenderMethods}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default Post;
