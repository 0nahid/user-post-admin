import axios from "axios";
import { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then(
      (data) => setPosts(data.data)
      // console.log(data.data)
    );
  }, []);
  return (
    <div className="text-center text-red-700 text-4xl">
      Post will be loaded here
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
}
