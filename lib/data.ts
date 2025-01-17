import enentsteamhead from "@/public/images/team/eventsteamhead.jpg";
import noimage from "@/public/images/team/image.png";
import opsteamhead from "@/public/images/team/opsteamhead.jpg";
import president from "@/public/images/team/president.jpg";
import techteamhead from "@/public/images/team/techteamhead.png";
import { Calendar, ClipboardList, Cpu, Presentation } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Timeline",
    hash: "/timeline",
  },
  {
    name: "Gallery",
    hash: "/gallery",
  },
  {
    name: "Team",
    hash: "/team",
  },
  {
    name: "FAQ",
    hash: "/faq",
  },
] as const;

export const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Something ",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
] as const;

export const faqs = [
  {
    question: "Who can participate in the competition?",
    answer:
      "The competition is open to all currently studying undergraduate and postgraduate students across institutes in India. Teams can comprise of up to 4 members from the same college, and can include interdisciplinary and cross-year students.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Initial registration is free. However, teams that advance to the second round will need to pay a registration fee of ₹1,000.",
  },
  {
    question: "Can I participate in multiple teams?",
    answer:
      "No, a student can only be part of one team, even if they have multiple ideas. They must choose their best idea and team to participate with.",
  },
  {
    question: "Are cross-college teams allowed?",
    answer:
      "No, cross-college teams are not allowed. All team members must be from the same institution.",
  },
  {
    question: "What happens in the virtual presentation round?",
    answer:
      "In Round 2, selected teams will present their projects virtually to a panel of experts. Teams should ensure reliable internet connectivity and device compatibility for an uninterrupted presentation.",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects will be evaluated based on innovation, feasibility, potential impact, technical complexity, and presentation quality. Detailed evaluation criteria will be shared with selected teams.",
  },
  {
    question: "Can faculty members participate?",
    answer:
      "Yes, faculty members can participate either in an exclusively faculty team or as a leader/member in a student team.",
  },
  {
    question: "What happens if I miss the registration deadline?",
    answer:
      "Late applications will not be accepted. All registrations must be completed before the specified deadline to be considered for the competition.",
  },
] as const;

export const timelineEvents = [
  {
    icon: Calendar,
    title: "Registration Phase",
    date: "January 9 - February 8, 2025",
    description:
      "Register on the Unstop platform and submit your proposal using the provided template. Ensure submission before the deadline to qualify for evaluation.",
  },
  {
    icon: ClipboardList,
    title: "Round 1: Proposal Evaluation",
    date: "February 9 - February 28, 2025 (Tentative)",
    description:
      "Domain experts will evaluate the submitted proposals. Shortlisted proposals will advance to the next round. Evaluations are based on innovation, feasibility, and potential impact.",
  },
  {
    icon: Presentation,
    title: "Round 2: Virtual Presentation",
    date: "March 6 - March 8, 2025",
    description:
      "Shortlisted teams present their project virtually. Ensure a reliable device and internet connection for an uninterrupted presentation. Top 50 teams will advance to the final round.",
  },
  {
    icon: Cpu,
    title: "Round 3: Grand Finale",
    date: "March 28, 2025",
    description:
      "Showcase your working prototype at BMSIT&M Campus. Participate in evaluations, public exhibitions, and compete for prizes worth ₹2,25,000.",
  },
] as const;

export const teamCards = [
  {
    title: "S Meghana",
    subtitle: "President",
    src: president,
  },
  {
    title: "Anagha",
    subtitle: "Vice-President",
    src: noimage,
  },
  {
    title: "Harsha Patil",
    subtitle: "OPS Team",
    src: opsteamhead,
  },
  {
    title: "Swatantra",
    subtitle: "Events Team",
    src: enentsteamhead,
  },
  {
    title: "Harshita",
    subtitle: "Design Team",
    src: noimage,
  },
  {
    title: "Ankitha",
    subtitle: "Content Team",
    src: noimage,
  },
  {
    title: "Himanshu ",
    subtitle: "Technical Team",
    src: techteamhead,
  },
  {
    title: "Srisha",
    subtitle: "Marketing Team",
    src: noimage,
  },
] as const;
