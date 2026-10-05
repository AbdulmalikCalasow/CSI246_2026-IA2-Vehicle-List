"use client";

// app/vehicles/[id]/error.tsx

// This error component appears if an error happens on a vehicle details page.
export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-4xl p-6 text-center">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>

      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}