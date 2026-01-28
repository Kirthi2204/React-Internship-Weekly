import { Link, Outlet } from "react-router-dom";

const blogs = [
  {
    id: "react-basics",
    title: "React Basics for Beginners",
    desc: "Learn components, props, and state in simple terms."
  },
  {
    id: "react-router",
    title: "Understanding React Router",
    desc: "Learn how routing works in React applications."
  },
  {
    id: "web-security",
    title: "Web Security Basics",
    desc: "Understand common security issues and how to avoid them."
  }
];

export default function Blog() {
  return (
    <div className="page">
      <h2>Useful Tech Blogs</h2>
      <p>Read simple and practical articles to improve your skills.</p>

      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <Link to={blog.id}>Read More</Link>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
}
