"use client";

import { ReactNode, useState } from "react";

type InteractiveCardProps = {
  children: ReactNode;
};

export default function InteractiveCard({ children }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex w-full max-w-[360px] flex-col overflow-hidden rounded-lg transition-shadow duration-200 border ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
