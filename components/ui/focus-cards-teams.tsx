"use client";
import { CardType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.9]"
      )}
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200">
        <Image
          src={card.src}
          alt={card.title ?? "Image"}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-lg font-semibold text-white font-mono">
        {card.title}
      </div>
      <div className="text-sm text-white/70 font-mono mb-2">
        {card.subtitle}
      </div>
      <div className="flex gap-4 items-center">
        {card.linkedin && (
          <Link
            href={card.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        )}
        {card.instagram && (
          <Link
            href={card.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        )}
        {card.email && (
          <Link
            href={`mailto:${card.email}`}
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: readonly CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-full mx-auto px-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
