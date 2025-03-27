// import dynamic from "next/dynamic";

// // Load component only when needed
// const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
//   ssr: false, // Load only on client side
//   loading: () => <p>Loading...</p>, // Show fallback UI
// });

// const Page = () => (
//   <div>
//     <h1>Optimized Page</h1>
//     <HeavyComponent />
//   </div>
// );

// export default Page;




// import Image from "next/image";

// const OptimizedImage = () => (
//   <Image src="/example.jpg" alt="Example" width={500} height={300} />
// );

// export default OptimizedImage;



// export async function getStaticProps() {
//     const res = await fetch("https://api.example.com/data");
//     const data = await res.json();

//     return {
//       props: { data },
//       revalidate: 10, // Revalidate every 10 seconds
//     };
//   }
