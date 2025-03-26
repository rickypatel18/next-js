export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Docs Page</h1>
      {params.slug ? (
        <p className="mt-4">You are viewing: {params.slug.join(" / ")}</p>
      ) : (
        <p className="mt-4">Welcome to the documentation home.</p>
      )}
    </main>
  );
}


// [id] when goes to particular id
// so use this [[...slug]] when multiple segments may or may not exist. 
// so use this [...slug] when multiple segments must exist. 
// (dashboard) Useful when you have multiple sections (e.g., dashboard, auth, admin) but don't want those names in the final URL. like /profile/dashboard