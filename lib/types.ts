import { StaticImageData } from "next/image";
// import { links } from "./data";

export type SectionName =
  | "Home"
  | "Timeline"
  | "Gallery"
  | "Contact"
  | "FAQ"
  | "Our Team";

export type CardType = {
  title: string;
  src: string;
};
export type CardType2 = {
  title: string;
  src: StaticImageData;
  subtitle: string;
};

export interface RoundCardProps {
  number: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  date: string;
  description: string;
  index: number;
}

export interface FaqSectionProps {
  faqCount?: number;
  isVisible?: boolean;
}
