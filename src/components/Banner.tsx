"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section
      className="relative flex h-[70vh] min-h-[420px] w-full cursor-pointer items-center justify-center overflow-hidden"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        className="object-cover"
        src={covers[index]}
        alt="Elegantly decorated event venue"
        fill
        priority
      />
      {session && (
        <div className="absolute right-4 top-4 z-10 rounded-md bg-black/50 px-3 py-1 font-semibold text-white">
          Welcome {session.user?.name}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/60" />
      <div className="relative z-10 max-w-2xl px-6 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold capitalize [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] sm:text-5xl">
          where every event finds its venue
        </h1>
        <p className="text-base leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] sm:text-xl">
          From weddings to corporate galas, we provide stunning catering
          venues and full-service event catering tailored to make your
          celebration unforgettable.
        </p>
      </div>
      <button
        type="button"
        className="absolute bottom-4 right-4 z-10 rounded-md bg-white px-4 py-2 font-semibold text-gray-900 shadow-lg transition-colors hover:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/venue");
        }}
      >
        Select Venue
      </button>
    </section>
  );
}
