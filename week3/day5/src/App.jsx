import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import withLoading from "./withLoading";
import UserProfile from "./UserProfile";
import BuggyComponent from "./BuggyComponent";
import "./App.css";

const UserProfileWithLoading = withLoading(UserProfile);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      <UserProfileWithLoading
        isLoading={isLoading}
        name="Kiruthiga Palani"
      />
      <ErrorBoundary>
        <BuggyComponent count={count} />
        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </ErrorBoundary>
    </div>
  );
}

export default App;
