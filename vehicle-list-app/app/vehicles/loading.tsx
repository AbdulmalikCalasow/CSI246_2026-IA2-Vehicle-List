// app/vehicles/loading.tsx

// This loading component is shown while the vehicle list is loading
export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="h-8 w-56 animate-pulse rounded bg-gray-700" />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="h-96 animate-pulse rounded-lg bg-gray-800" />
        <div className="h-96 animate-pulse rounded-lg bg-gray-800" />
      </div>
    </main>
  );
}