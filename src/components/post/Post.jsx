import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && (
        <Card.Img
          style={{ height: "350px" }}
          variant="top"
          src={PF + post.photo}
          alt=""
        />
      )}

      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}
