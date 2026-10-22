"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
  vid: string;
  venueName: string;
  imgSrc: string;
  onRatingChange?: (rating: number) => void;
};

export default function Card({ vid, venueName, imgSrc, onRatingChange }: CardProps) {
  const [rating, setRating] = useState(0);

  return (
    <InteractiveCard>
      <Link href={`/venue/${vid}`}>
        <div className="relative h-[220px] w-full">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={venueName}
            fill
          />
        </div>
        <h2
          className={`px-5 pt-5 text-xl font-bold ${onRatingChange ? "" : "pb-5"}`}
        >
          {venueName}
        </h2>
      </Link>
      {onRatingChange && (
        <div className="px-5 pb-5">
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating}
            onChange={(_, newValue) => {
              const nextRating = newValue ?? 0;
              setRating(nextRating);
              onRatingChange(nextRating);
            }}
          />
        </div>
      )}
    </InteractiveCard>
  );
}
