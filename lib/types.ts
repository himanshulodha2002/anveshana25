import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type CardType = {
  title: string;
  src: string;
  subtitle?: string;
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
}
