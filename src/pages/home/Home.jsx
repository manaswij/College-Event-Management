import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import UncontrolledExample from "../../components/slider/Carousel";
import Cat from "../../components/Cat/Cat";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <UncontrolledExample />
      <div className="home">
        <Posts posts={posts} />
      </div>
      <Cat />
    </>
  );
}
