import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);     // store API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState("");   // error message

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // re-run if URL changes

  return { data, loading, error };
}

export default useFetch;
