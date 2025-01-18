import contentteamhead from "@/public/images/team/contentteamhead.jpg";
import designteamhead from "@/public/images/team/designteamhead.jpg";
import enentsteamhead from "@/public/images/team/eventsteamhead.jpg";
// import noimage from "@/public/images/team/image.png";
import marketteamhead from "@/public/images/team/marketteamhead.jpg";
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
    src: "/images/Gallery/1.jpg",
  },
  {
    src: "/images/Gallery/2.jpg",
  },
  {
    src: "/images/Gallery/3.jpg",
  },
  {
    src: "/images/Gallery/4.jpg",
  },
  {
    src: "/images/Gallery/5.jpg",
  },
  // {
  //   src: "/images/Gallery/6.jpg",
  // },
  {
    src: "/images/Gallery/7.jpg",
  },
  {
    src: "/images/Gallery/8.jpg",
  },
  {
    src: "/images/Gallery/9.jpg",
  },
  {
    src: "/images/Gallery/10.jpg",
  },
  {
    src: "/images/Gallery/11.jpg",
  },
  {
    src: "/images/Gallery/12.jpg",
  },
  // {
  //   src: "/images/Gallery/13.jpg",
  // },
  // {
  //   src: "/images/Gallery/14.jpg",
  // },
  {
    src: "/images/Gallery/15.jpg",
  },
  {
    src: "/images/Gallery/16.jpg",
  },
  {
    src: "/images/Gallery/17.jpg",
  },
  {
    src: "/images/Gallery/18.jpg",
  },
  {
    src: "/images/Gallery/19.jpg",
  },
  {
    src: "/images/Gallery/20.jpg",
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
  // {
  //   question: "Is there a registration fee?",
  //   answer:
  //     "Initial registration is free. However, teams that advance to the second round will need to pay a registration fee of ₹1,000.",
  // },
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
    title: "S Meghna",
    subtitle: "President",
    src: president,
    linkedin: "http://www.linkedin.com/in/s-meghna1603",
    email: "meghnasandi2019@gmail.com",
  },
  {
    title: "Anagha",
    subtitle: "Vice-President",
    src: viceprecident,
    email: "anaghakigga2004@gmail.com",
    linkedin: "https://www.linkedin.com/in/anagha-n-kigga-702788323",
  },
  {
    title: "Harsha Patil",
    subtitle: "OPS Team",
    src: opsteamhead,
    linkedin: "https://www.linkedin.com/in/harsha-patil-28059327b/",
    instagram: "https://www.instagram.com/harsha...patil",
    email: "harshapatilhp1@gmail.com",
  },
  {
    title: "Swatantra",
    subtitle: "Events Team",
    src: enentsteamhead,
    email: "swatantratiwari29@gmail.com",
    linkedin: "https://www.linkedin.com/in/swatantra-tiwari-096182184/",
  },
  {
    title: "Harshita",
    subtitle: "Design Team",
    src: designteamhead,
  },
  {
    title: "Ankitha",
    subtitle: "Content Team",
    src: contentteamhead,
    email: "ankithakandhi@gmail.com",
  },
  {
    title: "Himanshu Lodha",
    subtitle: "Technical Team",
    src: techteamhead,
    linkedin: "https://www.linkedin.com/in/himanshu2002/",
    email: "lodhahimanshu2002@gmail.com",
    website: "https://www.himanshulodha.me",
  },
  {
    title: "Srisha",
    subtitle: "Marketing Team",
    src: marketteamhead,
    linkedin: "https://www.linkedin.com/in/srisha-ks-5a5050329/",
  },
] as const;

export const quickLinks = [
  {
    label: "Register Now",
    href: "https://unstop.com/p/anveshana-bms-institute-of-technology-and-management-1350340?ref=x70LNhV5",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    label: "Event Brochure",
    href: "/brochure.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { label: "Schedule", href: "/timeline", target: "_self", rel: "" },
  { label: "FAQs", href: "/faq", target: "_self", rel: "" },
] as const;
