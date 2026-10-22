import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default function VenuePage() {
  const venues = getVenues();

  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-12 text-4xl font-bold">Select Your Venue</h1>
      <VenueCatalog venuesJson={venues} />
    </div>
  );
}
