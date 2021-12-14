import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./Posts";

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts").then(
      (data) => setPosts(data.data) // data.data is the data from the api
    );
  }, []);

  return (
    <div className="flex flex-wrap container p-10 mx-auto overflow-hidden">
      {posts.map((post) => (
        <Posts post={post} key={post.id} />
      ))}
    </div>
  );
}
