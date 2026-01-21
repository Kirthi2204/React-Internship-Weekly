import "./App.css";

function About() {
  return (
    <div className="page">
      <h2>About Us</h2>
      <p>
        Welcome to our E-Commerce Dashboard! This platform is designed to provide a seamless shopping experience for users, built using <strong>React</strong> and <strong>React Router</strong>.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to make online shopping simple, fast, and enjoyable. We aim to provide users with a clean and intuitive interface to browse products, manage their cart, and complete purchases efficiently.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Dynamic product listing fetched from external APIs.</li>
        <li>Shopping cart functionality with add, remove, and update options.</li>
        <li>Category filtering, search, and sorting options for easier product navigation.</li>
        <li>Responsive design that works on both desktop and mobile devices.</li>
        <li>State management using React Context API for a smooth and interactive experience.</li>
      </ul>

      <h3>Technology Stack</h3>
      <p>
        This dashboard is built with modern web technologies: <strong>React</strong> for the frontend, <strong>React Router</strong> for navigation, and <strong>CSS Flexbox</strong> for responsive layouts. The application also uses <strong>Context API</strong> for state management and ensures real-time updates for the cart functionality.
      </p>

      <h3>Our Vision</h3>
      <p>
        We envision a platform that not only makes online shopping efficient but also enjoyable. By leveraging modern web technologies, we aim to continuously improve user experience and add new features to meet the evolving needs of our customers.
      </p>

      <p>
        Thank you for visiting our E-Commerce Dashboard. We are committed to providing a reliable, fast, and user-friendly shopping experience.
      </p>
    </div>
  );
}

export default About;
