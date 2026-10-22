"use client";

import { useReducer } from "react";
import Card from "./Card";

type Venue = {
  vid: string;
  name: string;
  imgSrc: string;
};

const venues: Venue[] = [
  { vid: "001", name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", imgSrc: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", imgSrc: "/img/grandtable.jpg" },
];

type RatingsAction =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

function ratingsReducer(
  state: Map<string, number>,
  action: RatingsAction
): Map<string, number> {
  const nextState = new Map(state);
  switch (action.type) {
    case "set":
      nextState.set(action.venueName, action.rating);
      return nextState;
    case "remove":
      nextState.delete(action.venueName);
      return nextState;
  }
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(
    ratingsReducer,
    new Map(venues.map((venue) => [venue.name, 0]))
  );

  return (
    <div className="flex w-full flex-col items-center">
      <main className="flex w-full flex-wrap items-start justify-center gap-8 px-6 py-12">
        {venues.map((venue) => (
          <Card
            key={venue.name}
            vid={venue.vid}
            venueName={venue.name}
            imgSrc={venue.imgSrc}
            onRatingChange={(rating) =>
              dispatch({ type: "set", venueName: venue.name, rating })
            }
          />
        ))}
      </main>
      <div className="w-full max-w-md px-6 pb-12">
        <h2 className="mb-4 text-xl font-bold">
          Venue List with Ratings : {ratings.size}
        </h2>
        <ul className="flex flex-col gap-2">
          {Array.from(ratings.entries()).map(([venueName, rating]) => (
            <li
              key={venueName}
              data-testid={venueName}
              onClick={() => dispatch({ type: "remove", venueName })}
              className="cursor-pointer rounded border p-3 hover:bg-neutral-100"
            >
              {venueName} Rating : {rating}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
