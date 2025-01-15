import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type CardType = {
  title: string;
  src: string;
};
