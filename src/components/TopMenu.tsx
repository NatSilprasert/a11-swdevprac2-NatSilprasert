import Image from "next/image";
import { getServerSession } from "next-auth";
import TopMenuItem from "./TopMenuItem";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <nav className="w-full flex items-center justify-between">
        {session ? (
          <TopMenuItem label="Sign-Out" href="/api/auth/signout" />
        ) : (
          <TopMenuItem label="Sign-In" href="/api/auth/signin" />
        )}
        <div className="flex items-center">
          <TopMenuItem label="Booking" href="/booking" />
          <div className="relative h-10 w-40">
            <Image
              src="/img/logo1.png"
              alt="Venue Explorer logo"
              fill
              className="object-contain w-10 h-10"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
