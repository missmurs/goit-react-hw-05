import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios;
      } catch (erorr) {}
    }
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
    </div>
  );
}
