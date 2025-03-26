import Button from "./components/button/Button";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-3xl">Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
      <Button/>
    </main>
  );
}
