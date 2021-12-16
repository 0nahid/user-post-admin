import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function PostDetails() {
  const { postId } = useParams();

  // post details
  const [post, setPost] = useState({});
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((data) =>
      setPost(data.data)
    );
  }, [postId]);
  // comment details
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    ).then((data) => setComment(data.data));
  }, [postId]);
  return (
    <div className="container mx-auto">
      <div className="p-5 border-2 rounded">
        <h3 className="post-title text-3xl text-red-400">
          Post Title: {post.title}
        </h3>
        <p className="text-blue-500 text-base mt-4">Details: {post.body}</p>
      </div>
      <hr className="m-5" />
      <div className="text-yellow-500">Comment Details:</div>

      {comment.map((comment) => (
        <div
          key={comment.id}
          className="p-5 mt-2 border-red-500 border rounded"
        >
          <li>
            <span className="font-bold">Name: {comment.name}</span>
            <br />
            <span className=" font-medium">Email: {comment.email}</span>
            <br />
            <span>Comment: {comment.body}</span>
          </li>
        </div>
      ))}

      {/* Navigator Button */}
      <div className="inline-flex mt-3">
        <Link
          to={`/posts/${
            Number(postId) > 1 ? Number(postId - 1) : Number(postId)
          }`}
        >
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
            Prev
          </button>
        </Link>

        <Link
          to={`/posts/${
            Number(postId) <= 99 ? Number(postId) + 1 : Number(postId)
          }`}
        >
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
