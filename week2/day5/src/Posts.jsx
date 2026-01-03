import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

function Posts() {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="page">
      <div className="card">
        <h2>Posts List</h2>
        {loading && <p>Loading posts...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <ul>
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <span>{post.body}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Posts;
