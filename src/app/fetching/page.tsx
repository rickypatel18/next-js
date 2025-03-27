// Hybrid Fetching (Server + Client)
import Fetch from "./Fetch"; 

const Wrapper = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const initialData = await res.json();

  return <Fetch initialData={initialData} />;
};

export default Wrapper;





// client side
// "use client";

// import { useEffect, useState } from "react";

// const Page = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Client-Side Data</h1>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Page;





// Incremental Static Regeneration (ISR) serverside
// const Page = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       next: { revalidate: 10 }, // Re-fetches data every 10 seconds
//     });
//     const data = await res.json();

//     return (
//       <div>
//         <h1>Server Data (ISR)</h1>
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   export default Page;





// server side fetching
// const Page = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       cache: "no-store", // Fetches new data on every request
//     });
//     const data = await res.json();

//     return (
//       <div>
//         <h1>Server Data (SSR)</h1>
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   export default Page;
