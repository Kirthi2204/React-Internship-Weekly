import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Blog from "./Blog";
import Post from "./Post";
import Admin from "./Admin";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/blog" element={<Blog />}>
          <Route path=":id" element={<Post />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
