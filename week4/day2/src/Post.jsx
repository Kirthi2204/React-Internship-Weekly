import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  const blogs = {
    "react-basics": {
      title: "React Basics for Beginners",
      body: "React is a JavaScript library for building user interfaces..."
    },
    "react-router": {
      title: "Understanding React Router",
      body: "React Router enables navigation in single-page applications..."
    },
    "web-security": {
      title: "Web Security Basics",
      body: "Web security protects applications from cyber threats..."
    }
  };

  const blog = blogs[id];

  if (!blog) {
    return <p> Blog not found</p>;
  }

  return (
    <div className="post">
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </div>
  );
}
