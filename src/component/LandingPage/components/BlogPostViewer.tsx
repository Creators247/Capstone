import React from "react";
import { marked } from "marked";
import "../styles/blogpostviewer.css";

interface BlogPost {
  id: string;
  markdownContent: string;
  createdAt: number;
}

const BlogPostViewer: React.FC<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => {
  return (
    <div id="blog-container">
      {blogPosts.map((post) => (
        <div key={post.id} id="blog-post">
          <div
            dangerouslySetInnerHTML={{ __html: marked(post.markdownContent) }}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogPostViewer;
