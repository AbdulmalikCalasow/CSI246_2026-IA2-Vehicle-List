// app/vehicles/page.tsx

import { getVehicles } from "@/app/lib/data";
import VehicleCard from "@/app/ui/components/vehicle-card";

// Server Component that fetches and displays all vehicles
export default async function VehiclesPage() {
// throw new Error("Test vehicle list error"); // Uncomment this line to test the error page
  const vehicles = await getVehicles();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">Available Vehicles</h1>

      <p className="mt-2 text-gray-600">
        Browse our current selection of quality vehicles.
      </p>

      {/* Display one card for each vehicle */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </section>
    </main>
  );
}