import Card from "./Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venuesJsonReady = await venuesJson;

  return (
    <>
      <div className="pt-4 text-center text-lg">
        Explore {venuesJsonReady.count} fabulous venues in our venue catalog
      </div>
      <div className="flex w-full flex-wrap items-start justify-center gap-8 px-6 py-12">
        {venuesJsonReady.data.map((venueItem: VenueItem) => (
          <Card
            key={venueItem.id}
            vid={venueItem.id}
            venueName={venueItem.name}
            imgSrc={venueItem.picture}
          />
        ))}
      </div>
    </>
  );
}
