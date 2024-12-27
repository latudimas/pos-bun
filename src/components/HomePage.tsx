import { Html } from "@elysiajs/html";

// components/HomePage.tsx
// export const HomePage = () => {
export function HomePage() {
  return (
    <>
      <main class="flex-grow p-8">
        <h1 class="text-3xl font-bold mb-4">Welcome to Our Homepage</h1>
        <p class="mb-4">This is a simple welcome screen for our application.</p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          hx-post="/api/greet"
          hx-swap="outerHTML"
        >
          Click me for a greeting
        </button>
      </main>
    </>
  );
}
