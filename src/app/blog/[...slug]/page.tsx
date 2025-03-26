export default function BlogPost({ params }: { params: { slug: string[] } }) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Blog Page</h1>
      <p className="mt-4">Segments: {params.slug.join(" / ")}</p>
    </main>
  );
}

// even if you provide condition  <p className="mt-4">Welcome to the Blog.</p> , still throws not found error

// export default function BlogPost({ params }: { params: { slug: string[] } }) {
//   return (
//     <main className="p-6">
//       <h1 className="text-3xl font-bold">Blog Page</h1>
//       {params.slug ? (
//         <p className="mt-4">Segments: {params.slug.join(" / ")}</p>
//       ) : (
//         <p className="mt-4">Welcome to the Blog.</p>
//       )}
//     </main>
//   );
// }

// [id] when goes to particular id
// so use this [...slug] when multiple segments must exist. 
// so use this [[...slug]] when multiple segments may or may not exist.
// (dashboard) Useful when you have multiple sections (e.g., dashboard, auth, admin) but don't want those names in the final URL. like /profile/dashboard