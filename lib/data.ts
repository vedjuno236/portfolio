import { Language } from "@/lib/i18n";

export type LocalizedText = Record<Language, string>;

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "3D & Creative" | "Tools";
  level: number; // percentage
  icon: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Experience {
  id: string;
  role: LocalizedText;
  company: string;
  period: string;
  description: Record<Language, string[]>;
}

export const skillsData: Skill[] = [
  { name: "Next.js 16 / React", category: "Frontend", level: 95, icon: "⚡" },
  { name: "TypeScript", category: "Frontend", level: 90, icon: "📘" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, icon: "🎨" },
  { name: "Three.js / React Three Fiber", category: "3D & Creative", level: 85, icon: "📐" },
  { name: "Framer Motion", category: "3D & Creative", level: 90, icon: "🍿" },
  { name: "GSAP / ScrollTrigger", category: "3D & Creative", level: 85, icon: "⏳" },
  { name: "Node.js", category: "Backend", level: 70, icon: "🟢" },
  { name: "GraphQL / REST APIs", category: "Backend", level: 50, icon: "📡" },
  { name: "Git / GitHub", category: "Tools", level: 70, icon: "🐙" },
  { name: "Flutter", category: "Tools", level: 80, icon: "🐼" },
];

export const projectsData: Project[] = [
  {
    id: "p1",
    title: { en: "Cosmic Sandbox", lo: "ສະໜາມທົດລອງຈັກກະວານ" },
    description: {
      en: "An interactive, fully procedural 3D stellar simulator and physics engine built directly in the browser.",
      lo: "ຕົວຈຳລອງດາວ 3D ແບບ procedural ແລະ physics engine ທີ່ໂຕ້ຕອບໄດ້ ສ້າງໃຫ້ເຮັດວຽກໃນເບຣາວເຊີໂດຍກົງ.",
    },
    tags: ["React Three Fiber", "GLSL Shaders", "Zustand", "TypeScript"],
    image: "🌌",
    liveUrl: "https://example.com/cosmic",
    githubUrl: "https://github.com/example/cosmic",
  },
  {
    id: "p2",
    title: { en: "Nebula Dashboard", lo: "ແດຊບອດເນບິວລາ" },
    description: {
      en: "High-performance data visualization interface showcasing real-time metrics with custom GSAP fluid animations.",
      lo: "ອິນເຕີເຟດສະແດງຂໍ້ມູນປະສິດທິພາບສູງ ສຳລັບເບິ່ງ metrics ແບບ real-time ພ້ອມ animation GSAP ທີ່ລື່ນໄຫຼ.",
    },
    tags: ["Next.js", "Tailwind CSS", "GSAP", "Chart.js"],
    image: "📈",
    liveUrl: "https://example.com/nebula",
    githubUrl: "https://github.com/example/nebula",
  },
  {
    id: "p3",
    title: { en: "Quantum E-Commerce", lo: "ຮ້ານຄ້າອອນລາຍຄວອນຕຳ" },
    description: {
      en: "A frictionless 3D storefront rendering custom product geometries with advanced materials and lightning fast checkout.",
      lo: "ຫນ້າຮ້ານ 3D ທີ່ໃຊ້ງານລື່ນໄຫຼ ສະແດງຮູບຊົງສິນຄ້າແບບກຳນົດເອງ ພ້ອມວັດສະດຸຂັ້ນສູງ ແລະ checkout ທີ່ໄວຫຼາຍ.",
    },
    tags: ["Next.js App Router", "Three.js", "Tailwind CSS", "Stripe"],
    image: "🛒",
    liveUrl: "https://example.com/quantum",
    githubUrl: "https://github.com/example/quantum",
  },
];

export const experienceData: Experience[] = [
  {
    id: "e1",
    role: { en: "Senior Creative Developer", lo: "ນັກພັດທະນາສ້າງສັນອາວຸໂສ" },
    company: "Dimension Interactive",
    period: "2024 - Present",
    description: {
      en: [
        "Lead the production of highly responsive React Three Fiber web experiences.",
        "Architected Next.js micro-frontends with integrated real-time dynamic shaders.",
        "Optimized web applications resulting in a 40% increase in rendering frame-rates."
      ],
      lo: [
        "ນຳພາການຜະລິດປະສົບການເວັບ React Three Fiber ທີ່ຕອບສະໜອງໄດ້ດີ.",
        "ອອກແບບ micro-frontends ດ້ວຍ Next.js ທີ່ຜະສານ dynamic shaders ແບບ real-time.",
        "ປັບປຸງເວັບແອັບໃຫ້ frame-rate ໃນການ render ເພີ່ມຂຶ້ນ 40%."
      ],
    },
  },
  {
    id: "e2",
    role: { en: "Frontend & 3D Engineer", lo: "ວິສະວະກອນ Frontend ແລະ 3D" },
    company: "Aether Systems",
    period: "2022 - 2024",
    description: {
      en: [
        "Implemented elaborate scroll-sequenced animations using GSAP and ScrollTrigger.",
        "Engineered clean state-management flows using Zustand, syncing DOM scroll triggers with Canvas nodes.",
        "Pioneered procedural generation components to replace heavy asset load budgets, lowering bundle sizes by 80%."
      ],
      lo: [
        "ສ້າງ animation ຕາມລຳດັບການ scroll ດ້ວຍ GSAP ແລະ ScrollTrigger.",
        "ວາງໂຄງສ້າງ state-management ດ້ວຍ Zustand ໃຫ້ DOM scroll triggers ຊິງກັບ Canvas nodes.",
        "ພັດທະນາ component ແບບ procedural generation ເພື່ອທົດແທນ asset ຂະໜາດໃຫຍ່ ແລະຫຼຸດ bundle size ລົງ 80%."
      ],
    },
  },
  {
    id: "e3",
    role: { en: "Full Stack Web Developer", lo: "ນັກພັດທະນາເວັບ Full Stack" },
    company: "Launchpad Labs",
    period: "2020 - 2022",
    description: {
      en: [
        "Built dynamic, interactive React components combined with robust Node.js backend services.",
        "Engineered flexible custom database schemas and high-throughput GraphQL APIs.",
        "Implemented rigid accessibility policies ensuring WCAG AA standard compliance across multiple web platforms."
      ],
      lo: [
        "ສ້າງ React components ແບບ dynamic ແລະໂຕ້ຕອບໄດ້ ຮ່ວມກັບ backend services ດ້ວຍ Node.js ທີ່ແຂງແຮງ.",
        "ອອກແບບ database schemas ແບບກຳນົດເອງທີ່ຍືດຫຍຸ່ນ ແລະ GraphQL APIs ທີ່ຮອງຮັບ throughput ສູງ.",
        "ນຳນະໂຍບາຍ accessibility ມາໃຊ້ເພື່ອໃຫ້ຫຼາຍເວັບແພລດຟອມສອດຄ່ອງກັບມາດຕະຖານ WCAG AA."
      ],
    },
  },
];
