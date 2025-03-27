// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// const Page = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   const data: Post[] = await res.json(); // ✅ Define data type

//   return (
//     <div>
//       <h1>Server Data</h1>
//       <ul>
//         {data.map((d: Post) => (
//           <li key={d.id}>{d.title}</li> // ✅ Define 'd' type
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Page;

//   "use client";
// import { useEffect, useState } from "react";

// const Page = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div>
//       <h1>Client Data</h1>
//       <ul>
//         {data.map((d) => (
//           <li key={d.id}>{d.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Page;

interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  // ✅ Server Component fetching
  const Page = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 10 }, // ISR: Re-fetches data every 10 seconds
    });
    const data: Post[] = await res.json();
  
    return (
      <div>
        <h1>Static Data (ISR Enabled)</h1>
        <ul>
          {data.map((d) => (
            <li key={d.id}>{d.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Page;
  

// SSG with ISR (revalidate: 10)
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//   next: { revalidate: 10 }, // ISR: Re-fetches data every 10 seconds
// });
// Blogs, product pages, news articles ==  Updated every 10s  == ⚡ Fast (uses cache) ==  At build time + every 10s


// 	SSR (cache: "no-store")
// const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store", // ❌ No caching → Always fetch new data
//   });
// Dashboards, user-specific data == Always fresh == 🐢 Slower (fetches fresh data) == On every request