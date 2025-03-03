import contentteamhead from "@/public/images/team/contentteamhead.jpg";
import designteamhead from "@/public/images/team/designteamhead.jpg";
import enentsteamhead from "@/public/images/team/eventsteamhead.jpg";
// import noimage from "@/public/images/team/image.png";
import marketteamhead from "@/public/images/team/marketteamhead.jpg";
import opsteamhead from "@/public/images/team/opsteamhead.jpg";
import president from "@/public/images/team/president.jpg";
import teachershamamaam from "@/public/images/team/teachers/shamamaamteacher.jpg";
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
    name: "Results",
    hash: "/results",
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
      "Yes, you can register even if you've participated in similar competitions. However, the prototype submitted must be original and adhere to the competition guidelines.",
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
    date: "January 9 - February 23, 2025",
    description:
      "Register on the Unstop platform and submit your proposal using the provided template. Ensure submission before the deadline to qualify for evaluation. (Now extended to February 23, 2025)",
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
    subtitle: "OPS Head",
    src: opsteamhead,
    linkedin: "https://www.linkedin.com/in/harsha-patil-28059327b/",
    // instagram: "https://www.instagram.com/harsha...patil",
    email: "harshapatilhp1@gmail.com",
  },
  {
    title: "Swatantra",
    subtitle: "Events Head",
    src: enentsteamhead,
    email: "swatantratiwari29@gmail.com",
    linkedin: "https://www.linkedin.com/in/swatantra-tiwari-096182184/",
  },
  {
    title: "Harshita",
    subtitle: "Design Head",
    src: designteamhead,
    linkedin: "http://www.linkedin.com/in/harshita-kyadar-9a7177250",
    email: "kyadarharshita@gmail.com",
  },
  {
    title: "Ankitha",
    subtitle: "Content Head",
    src: contentteamhead,
    email: "ankithakandhi@gmail.com",
    linkedin: "https://www.linkedin.com/in/ankitha-kandhi-728a7a323/",
  },
  {
    title: "Himanshu Lodha",
    subtitle: "Technical Head",
    src: techteamhead,
    linkedin: "https://www.linkedin.com/in/himanshu2002/",
    email: "lodhahimanshu2002@gmail.com",
    website: "https://www.himanshulodha.me",
  },
  {
    title: "Srisha",
    subtitle: "Marketing Head",
    src: marketteamhead,
    linkedin: "https://www.linkedin.com/in/srisha-ks-5a5050329/",
  },
] as const;

export const teacherCards = [
  {
    title: "Prof. Shama H M",
    subtitle: "Chief Faculty Coordinator",
    src: teachershamamaam,
    // linkedin: "http://www.linkedin.com/in/s-meghna1603",
    email: "shama@bmsit.in",
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
  { label: "Results", href: "/results", target: "_self", rel: "" },
  { label: "FAQs", href: "/faq", target: "_self", rel: "" },
] as const;


export const resultsData = [
  {
    teamName: "InventForGood",
    teamLeader: "Aditya Narayan Rout",
    status: "Selected",
  },
  {
    teamName: "Pathway Pioneers",
    teamLeader: "Omkar Anjaneya kumar",
    status: "Accepted",
  },
  { teamName: "ForceGaruda", teamLeader: "Akshay SP", status: "Accepted" },
  {
    teamName: "bosekoushik1014",
    teamLeader: "Koushik Bose",
    status: "Selected",
  },
  { teamName: "ajanil2612", teamLeader: "Anil Jamakhandi", status: "Selected" },
  { teamName: "Pinnacle Minds", teamLeader: "Sai Vivek Y", status: "Selected" },
  {
    teamName: "TEAM TRYDAN",
    teamLeader: "Divyasree s bulla",
    status: "Accepted",
  },
  {
    teamName: "KLE Technological University",
    teamLeader: "Yash Shinde",
    status: "Selected",
  },
  { teamName: "Picapool", teamLeader: "Srijan shahi", status: "Selected" },
  {
    teamName: "abhaynandan001",
    teamLeader: "Abhay Nandan",
    status: "Selected",
  },
  {
    teamName: "kambaloor44",
    teamLeader: "Sumukha Kambaloor",
    status: "Selected",
  },
  { teamName: "VaxiMo", teamLeader: "Shivam Sharma", status: "Selected" },
  {
    teamName: "ElectroStorm",
    teamLeader: "AMIT KUMAR SINGH",
    status: "Accepted",
  },
  {
    teamName: "ganeshnaiknaik545",
    teamLeader: "K Ganesh Naik",
    status: "Selected",
  },
  {
    teamName: "BeetBeep",
    teamLeader: "Devangi Sood",
    status: "Accepted",
  },
  {
    teamName: "abhishek1530002",
    teamLeader: "Abhishek Dixit",
    status: "Selected",
  },
  { teamName: "VISION", teamLeader: "Shyamkumar M", status: "Accepted" },
  {
    teamName: "Visionary Minds",
    teamLeader: "Kushal YN Gowda",
    status: "Accepted",
  },
  { teamName: "JALRAAJ", teamLeader: "Aman Kumar Verma", status: "Selected" },
  { teamName: "ReviveRite", teamLeader: "Ayush Poddar", status: "Selected" },
  { teamName: "The Vedas", teamLeader: "Srushti Jagtap", status: "Selected" },
  {
    teamName: "Alchemyst AI",
    teamLeader: "Prithwijit Dey",
    status: "Selected",
  },
  {
    teamName: "chanduravi.rt.gowda",
    teamLeader: "Chandu R T",
    status: "Selected",
  },
  {
    teamName: "avinashsharma23407",
    teamLeader: "Avinash sharma",
    status: "Selected",
  },
  { teamName: "Calyirex", teamLeader: "Swasthika", status: "Selected" },
  { teamName: "CalmRevivers", teamLeader: "Karan D", status: "Accepted" },
  {
    teamName: "shrijith2910",
    teamLeader: "Shrijith Shetty",
    status: "Selected",
  },
  {
    teamName: "TECHKNIGHTS_VARDAAN",
    teamLeader: "Akash Gupta",
    status: "Selected",
  },
  { teamName: "SPATIKA", teamLeader: "Srujan Hari", status: "Accepted" },
  { teamName: "Better Tomorrow", teamLeader: "Ganesh C", status: "Selected" },
  {
    teamName: "Team Boreas",
    teamLeader: "Dr. L HARISH KUMAR",
    status: "Accepted",
  },
  {
    teamName: "3-X",
    teamLeader: "Shishir Aithal",
    status: "Accepted",
  },
  {
    teamName: "maheshkulsange05",
    teamLeader: "Mahesh Kulsange",
    status: "Selected",
  },
  {
    teamName: "jayakirtissavant",
    teamLeader: "Jayakirti Savant",
    status: "Accepted",
  },
  {
    teamName: "Multi-Model Drone",
    teamLeader: "Rajkumar hc",
    status: "Selected",
  },
  { teamName: "CPR SHEET", teamLeader: "Poorvik K", status: "Accepted" },
  {
    teamName: "rajakatcharam",
    teamLeader: "Katcharam Raja Abhijeeth",
    status: "Accepted",
  },
  { teamName: "chandan00chandu7", teamLeader: "Chandan S", status: "Selected" },
  { teamName: "kalpitha C M", teamLeader: "Kalpitha C M", status: "Selected" },
  { teamName: "PREserwe", teamLeader: "Dhruven Bhalerao", status: "Selected" },
  {
    teamName: "Fashion_coders",
    teamLeader: "MRINAL MIDHA",
    status: "Accepted",
  },
  { teamName: "Cyber Savvy", teamLeader: "Impu Rao HM", status: "Selected" },
  {
    teamName: "Codewizards",
    teamLeader: "Vaishnavi Hampannavar",
    status: "Accepted",
  },
  { teamName: "vermavanshika000", teamLeader: "Vanshika", status: "Selected" },
  { teamName: "AURORA", teamLeader: "MARUTHI P", status: "Accepted" },
  { teamName: "Philomaths", teamLeader: "Meghana K", status: "Selected" },
  {
    teamName: "amanvishwakarma2207",
    teamLeader: "Aman Vishwakarma",
    status: "Selected",
  },
  {
    teamName: "sagarkofficial1912136",
    teamLeader: "Sagar K",
    status: "Selected",
  },
  { teamName: "ARC", teamLeader: "Luke Roman Noronha", status: "Selected" },
  { teamName: "Falcons", teamLeader: "Manu Sagar", status: "Selected" },
  { teamName: "Z Gen Saura Urja", teamLeader: "NIKHIL KV", status: "Accepted" },
  { teamName: "21a20.joywin", teamLeader: "Joywin Bennis", status: "Selected" },
  { teamName: "f4", teamLeader: "shweeta soni", status: "Selected" },
  {
    teamName: "BIG BUCKS INNOVATION",
    teamLeader: "BALAJI ARUMUGAM",
    status: "Selected",
  },
  {
    teamName: "mitharechandrakiran",
    teamLeader: "CHANDRAKIRAN MITHARE",
    status: "Selected",
  },
  { teamName: "Sustains", teamLeader: "Aman Singh", status: "Selected" },
  { teamName: "Despo", teamLeader: "Dipankar Chettri", status: "Selected" },
  { teamName: "CivicX", teamLeader: "Srisha Prajwal G", status: "Accepted" },
  {
    teamName: "prasannasimha5002",
    teamLeader: "PRASANNA KUMAR SIMHADRI",
    status: "Selected",
  },
  { teamName: "Aerotantrix", teamLeader: "Preethi", status: "Accepted" },
  { teamName: "Noa", teamLeader: "Abhinav Gupta", status: "Selected" },
  { teamName: "Srinidhip06", teamLeader: "Srinidhi", status: "Selected" },
  { teamName: "Innovator's", teamLeader: "Sarvesh Kumar", status: "Selected" },
  {
    teamName: "Innovative Warriors",
    teamLeader: "Yanakandla Mani Sharath",
    status: "Selected",
  },
  { teamName: "slaves of ai", teamLeader: "Shivani Wale", status: "Accepted" },
  {
    teamName: "HOODSY",
    // teamName: "Hyperlocal Networking Application",
    teamLeader: "Nishanth D R",
    status: "Accepted",
  },
  { teamName: "ARAN", teamLeader: "Amrit Rajapurohit", status: "Selected" },
  {
    teamName: "TrashFormers",
    teamLeader: "Ritik Kumar Gupta",
    status: "Selected",
  },
  {
    teamName: "dharwadshreya",
    teamLeader: "Shreya Dharwad",
    status: "Accepted",
  },
  {
    teamName: "Sustainable Architects",
    teamLeader: "Pratham Amritkar",
    status: "Selected",
  },
  { teamName: "RageVerse", teamLeader: "Dheepauk N", status: "Selected" },
  { teamName: "Sensor squad", teamLeader: "Thanyaa S", status: "Selected" },
  { teamName: "anirudhshetty321", teamLeader: "Anirudh S", status: "Selected" },
  { teamName: "BITverse", teamLeader: "Krishay Manjunath", status: "Selected" },
  {
    teamName: "vishalangadi2004",
    teamLeader: "Vishal Raju Angadi",
    status: "Selected",
  },
  {
    teamName: "Cashew Brownie",
    teamLeader: "Molanguru Sonu Adithya",
    status: "Selected",
  },
  {
    teamName: "kartikjadhav0005",
    teamLeader: "Kartik Jadhav",
    status: "Selected",
  },
  {
    teamName: "Ctrl+Alt+Decentralize",
    teamLeader: "Sayed Abdul Qadar",
    status: "Selected",
  },
  {
    teamName: "HACKSTREETBOYS",
    teamLeader: "Sriram Thirumalasetty",
    status: "Selected",
  },
  {
    teamName: "Predicamentendencified! Innovations",
    teamLeader: "Ganesh T N Bhushan",
    status: "Selected",
  },
  {
    teamName: "Tech Innovators",
    teamLeader: "Sudarshan R Srinivas",
    status: "Selected",
  },
  {
    teamName: "vishnu19512",
    teamLeader: "BHARANI VISHNU GODUGU",
    status: "Accepted",
  },
  { teamName: "palkit4141", teamLeader: "Palkeet Singh", status: "Selected" },
  { teamName: "Groot", teamLeader: "SHASHIKIRAN B", status: "Accepted" },
  { teamName: "Quadronix", teamLeader: "Mohammed Fawwaz", status: "Selected" },
  {
    teamName: "sharathsc3000",
    teamLeader: "Sharath Satish Chikkappanavar",
    status: "Selected",
  },
  {
    teamName: "PULSE GUARD INNOVATORS",
    teamLeader: "Abhay Sharma",
    status: "Accepted",
  },
  { teamName: "RES-Q BOT", teamLeader: "Smayana N P", status: "Selected" },
  { teamName: "SCY", teamLeader: "Sumit", status: "Selected" },
  {
    teamName: "kuruvasravani83",
    teamLeader: "Sravani Kuruva",
    status: "Selected",
  },
  {
    teamName: "saviyasaviya92",
    teamLeader: "Saviya Saviya",
    status: "Selected",
  },
  { teamName: "Agrisonique", teamLeader: "Kirubasuthan K", status: "Selected" },
  { teamName: "GARUDA", teamLeader: "Srijan u", status: "Accepted" },
  {
    teamName: "The Syndicate",
    teamLeader: "Harshit Bisht",
    status: "Selected",
  },
  {
    teamName: "Code Seekers",
    teamLeader: "Advaith Acharya",
    status: "Selected",
  },
  {
    teamName: "NEW STATERS",
    teamLeader: "Basavaraj Japannavar",
    status: "Selected",
  },
  { teamName: "NeoNatix", teamLeader: "Abdul Thafel", status: "Selected" },
  {
    teamName: "Blastoise",
    teamLeader: "Abhinav Kumar Singh CSE-5",
    status: "Selected",
  },
  {
    teamName: "Team Horus",
    teamLeader: "Vismaya Devashya",
    status: "Accepted",
  },
  {
    teamName: "02fe23bcs411",
    teamLeader: "Arun Sadalgekar",
    status: "Selected",
  },
  {
    teamName: "Quantum Coders",
    teamLeader: "Sathvik S Nayak",
    status: "Selected",
  },
  { teamName: "United Minds", teamLeader: "Manvi H J", status: "Selected" },
  {
    teamName: "Vision Forge",
    teamLeader: "Gogineni Naga Venkata Nihar Chowdary",
    status: "Selected",
  },
  { teamName: "VYASA", teamLeader: "Vallish S", status: "Acepted" },
  { teamName: "Abhishek", teamLeader: "Abhishek e", status: "Accepted" },
  {
    teamName: "Innovation",
    teamLeader: "Suman Raju Koujalagi",
    status: "Accepted",
  },
  { teamName: "InnoveteX", teamLeader: "AM Dilli vamshi", status: "Selected" },
  { teamName: "Team-Sdmit", teamLeader: "Subhas Hegde", status: "Accepted" },
  { teamName: "helloworld", teamLeader: "Naomi Pereira", status: "Selected" },
  { teamName: "MSN", teamLeader: "Medha Harish", status: "Selected" },
  { teamName: "blankSpace", teamLeader: "Likhitha K M", status: "Selected" },
  {
    teamName: "shridhar20062005",
    teamLeader: "Shridhar J",
    status: "Selected",
  },
  {
    teamName: "InternSync",
    teamLeader: "Gourav Nahar",
    status: "Selected",
  },
  {
    teamName: "Insight Syndicate",
    teamLeader: "Alan Biju",
    status: "Accepted",
  },
  { teamName: "punithmahi2006", teamLeader: "Punith D", status: "Selected" },
  {
    teamName: "charangowda.m9141",
    teamLeader: "Padmacharan M",
    status: "Selected",
  },
  { teamName: "namanvjain456", teamLeader: "Naman Jain", status: "Selected" },
  { teamName: "Matrix Coders", teamLeader: "Mehaboob S", status: "Selected" },
  { teamName: "VoltX", teamLeader: "Shrivatsa S Kulkarni", status: "Accepted" },
  { teamName: "Tech Titans", teamLeader: "Aadithya Nair", status: "Selected" },
  {
    teamName: "Visionaries",
    teamLeader: "Gaurav Siddharth",
    status: "Waitlisted",
  },
  {
    teamName: "parwathsrirajuk",
    teamLeader: "Parwath Sri Raju K",
    status: "Waitlisted",
  },
  { teamName: "E^RHS", teamLeader: "Shree Shenpagam", status: "Waitlisted" },
  {
    teamName: "gauravkumarsingh4020",
    teamLeader: "Gaurav Kumar Singh",
    status: "Waitlisted",
  },
  {
    teamName: "Scuffed_Engineers",
    teamLeader: "Sameer Belthur",
    status: "Waitlisted",
  },
  { teamName: "Sanjana", teamLeader: "Sanjana M", status: "Waitlisted" },
  {
    teamName: "asscr",
    teamLeader: "Masood khan",
    status: "Waitlisted",
  },
  {
    teamName: "mukkavallisrinivas",
    teamLeader: "Mukkavalli Srinivas",
    status: "Waitlisted",
  },
  { teamName: "Magpie", teamLeader: "Kishan MN", status: "Waitlisted" },
  {
    teamName: "Code Crushers",
    teamLeader: "N. Suchitra",
    status: "Waitlisted",
  },
  {
    teamName: "nnayanagc",
    teamLeader: "Nayanagc Nayana",
    status: "Waitlisted",
  },
  { teamName: "bharathac7", teamLeader: "bharath c", status: "Waitlisted" },
  {
    teamName: "Syntax Error",
    teamLeader: "SM VINAY KUMAR",
    status: "Waitlisted",
  },
  {
    teamName: "kangralkarjay",
    teamLeader: "Jay Kangralkar",
    status: "Waitlisted",
  },
  { teamName: "Tech Mavericks", teamLeader: "Chinmay J", status: "Waitlisted" },
  { teamName: "Agasthya", teamLeader: "Hemanth Yadav", status: "Waitlisted" },
  { teamName: "FlashBack", teamLeader: "Abul Khasim K", status: "Waitlisted" },
  { teamName: "lavanyan1105", teamLeader: "Lavanya N", status: "Waitlisted" },
  {
    teamName: "diyajindal265",
    teamLeader: "Diya Jindal",
    status: "Waitlisted",
  },
  {
    teamName: "kumar.kislay051",
    teamLeader: "Kumar Kislay",
    status: "Waitlisted",
  },
];
