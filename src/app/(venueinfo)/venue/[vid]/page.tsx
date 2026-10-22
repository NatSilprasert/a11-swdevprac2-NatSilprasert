import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueDetail = await getVenue(vid);
  const venue = venueDetail.data;

  return (
    <main className="flex w-full flex-wrap items-center justify-center gap-8 px-6 py-16">
      <div className="relative h-[260px] w-[360px] overflow-hidden rounded-2xl border border-gray-400">
        <Image
          className="object-cover"
          src={venue.picture}
          alt={venue.name}
          fill
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="mb-2 text-3xl font-bold">{venue.name}</h1>
        <div>Name: {venue.name}</div>
        <div>Address: {venue.address}</div>
        <div>District: {venue.district}</div>
        <div>Province: {venue.province}</div>
        <div>Postal Code: {venue.postalcode}</div>
        <div>Tel: {venue.tel}</div>
        <div>Daily Rate: {venue.dailyrate}</div>
      </div>
    </main>
  );
}
