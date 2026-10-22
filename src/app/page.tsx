import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <PromoteCard />
    </div>
  );
}
