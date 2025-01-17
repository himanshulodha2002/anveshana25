import contentteamhead from "@/public/images/team/contentteamhead.jpg";
import enentsteamhead from "@/public/images/team/eventsteamhead.jpg";
import noimage from "@/public/images/team/image.png";
import opsteamhead from "@/public/images/team/opsteamhead.jpg";
import president from "@/public/images/team/president.jpg";
import techteamhead from "@/public/images/team/techteamhead.png";
import viceprecident from "@/public/images/team/viceprecident.jpg";
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
    name: "Our Team",
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
    question: "What is the Anveshana Prototype Competition?",
    answer:
      "The Anveshana Prototype Competition is an innovation-driven event designed to encourage students and aspiring innovators to transform their ideas into tangible prototypes. Participants showcase their creativity, problem-solving skills, and technical expertise by addressing real-world challenges through innovative solutions. It's an opportunity to collaborate, learn, and compete with the best minds.",
  },
  {
    question: "Who can participate in the competition?",
    answer:
      "The competition is open to all currently studying undergraduate and postgraduate students across institutes in India. Teams can comprise up to 4 members from the same college, and can include interdisciplinary and cross-year students.",
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
  {
    question: "Can I change my team members after registering?",
    answer:
      "Yes, you can change team members before the registration deadline. After the deadline, team compositions are locked to ensure fairness in the competition.",
  },
  {
    question: "Does my prototype need to be fully functional?",
    answer:
      "No, a fully functional prototype is not mandatory. Partially functional or conceptual prototypes are acceptable as long as they effectively communicate the idea and its potential impact.",
  },
  {
    question: "What happens if a team member drops out?",
    answer:
      "If a team member drops out, the team can continue with the remaining members. However, replacements are not allowed after the registration deadline.",
  },
  {
    question: "Do I need prior experience to participate?",
    answer:
      "No prior experience is required. The competition is open to participants of all skill levels, including beginners and experts.",
  },
  {
    question:
      "Can I register if I have already participated in similar competitions?",
    answer:
      "Yes, you can register even if you’ve participated in similar competitions. However, the prototype submitted must be original and adhere to the competition guidelines.",
  },
  {
    question: "Can I submit multiple prototypes?",
    answer:
      "No, each team or individual is allowed to submit only one prototype to ensure fair participation.",
  },
  {
    question: "Can I withdraw the registration?",
    answer:
      "Yes, you can withdraw your registration anytime before the competition begins. Please notify the organizers to officially withdraw.",
  },
  {
    question: "How many people can be on a team?",
    answer:
      "Teams can have up to 4 members. We recommend forming teams with diverse skill sets to maximize creativity and productivity.",
  },
  {
    question: "Do we need to build a complete product?",
    answer:
      "No, a functional prototype that demonstrates your concept and core features is sufficient. Focus on showcasing how your solution addresses the problem statement.",
  },
  {
    question: "Is it remote or on-site?",
    answer:
      "The competition is a hybrid event. Initial rounds will be conducted virtually, while the final round will take place on-site at the designated venue.",
  },
  {
    question: "Are travel expenses included?",
    answer:
      "No, travel expenses are not included. Participants are responsible for their own travel and accommodation arrangements for the on-site round.",
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
    src: viceprecident,
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
    src: contentteamhead,
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
