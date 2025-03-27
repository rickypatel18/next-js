"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Fetch = ({ initialData }: { initialData: Post[] }) => {
  const [data, setData] = useState<Post[]>(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newData: Post[] = await res.json();
      setData(newData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hybrid Data Fetching</h1>
      {loading && <p>Updating...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
