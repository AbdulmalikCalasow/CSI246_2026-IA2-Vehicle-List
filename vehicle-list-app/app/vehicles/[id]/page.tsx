// app/vehicles/[id]/page.tsx

import { getVehicle } from "@/app/lib/data";
import { notFound } from "next/navigation";
import CommentForm from "@/app/ui/components/comment-form";

// Dynamic route page for displaying one vehicle
export default async function VehicleDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get the vehicle ID from the URL
  const { id } = await params;

  // Fetch the vehicle using its ID
  const vehicle = await getVehicle(id);

  // Show the Next.js 404 page if the vehicle does not exist
  if (!vehicle) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <img
        src={vehicle.image}
        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        className="h-80 w-full rounded-lg object-cover"
      />

      <h1 className="mt-6 text-3xl font-bold">
        {vehicle.year} {vehicle.make} {vehicle.model}
      </h1>

      <p className="mt-3 text-2xl font-semibold text-blue-700">
        ${vehicle.price.toLocaleString()}
      </p>

      <p className="mt-4 text-gray-700">{vehicle.description}</p>

      {/* Vehicle specifications */}
      <section className="mt-8 rounded-lg border p-5">
        <h2 className="text-2xl font-bold">Specifications</h2>

        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Engine</dt>
            <dd>{vehicle.specs.engine}</dd>
          </div>

          <div>
            <dt className="font-semibold">Transmission</dt>
            <dd>{vehicle.specs.transmission}</dd>
          </div>

          <div>
            <dt className="font-semibold">Mileage</dt>
            <dd>{vehicle.specs.mileage.toLocaleString()} miles</dd>
          </div>

          <div>
            <dt className="font-semibold">Exterior color</dt>
            <dd>{vehicle.specs.exteriorColor}</dd>
          </div>

          <div>
            <dt className="font-semibold">Interior color</dt>
            <dd>{vehicle.specs.interiorColor}</dd>
          </div>

          <div>
            <dt className="font-semibold">Fuel type</dt>
            <dd>{vehicle.specs.fuelType}</dd>
          </div>
        </dl>
      </section>

            {/* Vehicle features */}
      <section className="mt-8 rounded-lg border p-5">
        <h2 className="text-2xl font-bold">Features</h2>

        <ul className="mt-4 list-inside list-disc space-y-2">
          {vehicle.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Comment form for this vehicle */}
      <CommentForm
        vehicleId={vehicle.id}
        initialComments={vehicle.comments}
      />
    </main>
  );
}