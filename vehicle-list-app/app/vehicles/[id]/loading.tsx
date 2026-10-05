// app/vehicles/[id]/loading.tsx

// This loading component is shown while vehicle details are loading
export default function Loading() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <div className="h-80 w-full animate-pulse rounded-lg bg-gray-800" />

      <div className="mt-6 h-10 w-3/4 animate-pulse rounded bg-gray-700" />
      <div className="mt-3 h-8 w-40 animate-pulse rounded bg-gray-700" />
      <div className="mt-4 h-6 w-full animate-pulse rounded bg-gray-800" />

      <div className="mt-8 h-64 animate-pulse rounded-lg bg-gray-800" />
    </main>
  );
}