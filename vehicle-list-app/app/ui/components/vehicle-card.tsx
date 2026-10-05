// app/ui/components/vehicle-card.tsx

import Link from "next/link";
import type { Vehicle } from "@/app/lib/data";

// Reusable card component for displaying one vehicle
export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <img
        src={vehicle.image}
        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h2>

        <p className="mt-2 text-2xl font-semibold text-blue-700">
          ${vehicle.price.toLocaleString()}
        </p>

        <p className="mt-3 text-gray-600">{vehicle.description}</p>

        {/* Link to the vehicle details page */}
        <Link
          href={`/vehicles/${vehicle.id}`}
          className="mt-5 inline-block rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          View details
        </Link>
      </div>
    </article>
  );
}