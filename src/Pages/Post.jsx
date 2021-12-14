import axios from "axios";
import { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then(
      (data) => setPosts(data.data) // data.data is the data from the api
    );
  }, []);
  return (
    <div className="text-center text-red-700 text-4xl">
      {/* Post will be loaded here */}
      {posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
}
