export type Language = "en" | "lo";

export const languageNames: Record<Language, string> = {
  en: "English",
  lo: "Lao",
};

export const navLabels: Record<string, Record<Language, string>> = {
  about: { en: "About", lo: "ກ່ຽວກັບ" },
  skills: { en: "Skills", lo: "ທັກສະ" },
  projects: { en: "Projects", lo: "ໂຄງການ" },
  experience: { en: "Experience", lo: "ປະສົບການ" },
  contact: { en: "Contact", lo: "ຕິດຕໍ່" },
};

export const categoryLabels: Record<string, Record<Language, string>> = {
  Frontend: { en: "Frontend", lo: "ຟຣອນເອນ" },
  Backend: { en: "Backend", lo: "ແບັກເອນ" },
  "3D & Creative": { en: "3D & Creative", lo: "3D ແລະ ສ້າງສັນ" },
  Tools: { en: "Tools", lo: "ເຄື່ອງມື" },
};

export const copy = {
  nav: {
    motionOn: { en: "Enable 3D Motion", lo: "ເປີດການເຄື່ອນໄຫວ 3D" },
    motionOff: { en: "Reduced Motion", lo: "ຫຼຸດການເຄື່ອນໄຫວ" },
    switchTo: { en: "ລາວ", lo: "EN" },
    switchLabel: { en: "Switch language to Lao", lo: "ປ່ຽນພາສາເປັນອັງກິດ" },
  },
  hero: {
    eyebrow: { en: "Creative Developer / 3D Engineer", lo: "ນັກພັດທະນາສ້າງສັນ / ວິສະວະກອນ 3D" },
    titlePrefix: { en: "HI, I'M", lo: "ສະບາຍດີ, ຂ້ອຍແມ່ນ" },
    body: {
      en: "I craft interactive 3D web experiences using modern web technologies. I balance aesthetic design with high-performance execution.",
      lo: "ຂ້ອຍສ້າງປະສົບການເວັບ 3D ແບບໂຕ້ຕອບດ້ວຍເທັກໂນໂລຊີເວັບສະໄໝໃໝ່ ແລະຜະສານຄວາມງາມກັບປະສິດທິພາບສູງ.",
    },
    cta: { en: "Explore My Work", lo: "ເບິ່ງຜົນງານຂອງຂ້ອຍ" },
    scroll: { en: "SCROLL TO DISCOVER", lo: "ເລື່ອນເພື່ອສຳຫຼວດ" },
  },
  about: {
    badge: { en: "About Me", lo: "ກ່ຽວກັບຂ້ອຍ" },
    titleA: { en: "Bridging the Gap Between", lo: "ເຊື່ອມຕໍ່ລະຫວ່າງ" },
    art: { en: "Art", lo: "ສິນລະປະ" },
    code: { en: "Code", lo: "ໂຄດ" },
    body1: {
      en: "I am a specialized frontend engineer passionate about high-fidelity visual web designs. With expertise in Next.js, WebGL, and custom shaders, I construct immersive digital landscapes that tell captivating brand stories.",
      lo: "ຂ້ອຍແມ່ນວິສະວະກອນຟຣອນເອນທີ່ມີຄວາມຫຼົງໄຫຼໃນງານອອກແບບເວັບທີ່ມີຄຸນນະພາບສູງ. ດ້ວຍຄວາມຊຳນານໃນ Next.js, WebGL ແລະ shader ແບບກຳນົດເອງ, ຂ້ອຍສ້າງພື້ນທີ່ດິຈິຕອນທີ່ດຶງດູດແລະເລົ່າເລື່ອງແບຣນໄດ້ຊັດເຈນ.",
    },
    body2: {
      en: "By combining procedural generation, mathematical logic, and robust programming principles, I make sure visual splendor never sacrifices extreme frame-rates or accessible, responsive performance.",
      lo: "ໂດຍຜະສານການສ້າງແບບ procedural, ຕັກກະຄະນິດສາດ ແລະຫຼັກການຂຽນໂປຣແກຣມທີ່ແຂງແຮງ, ຂ້ອຍເຮັດໃຫ້ຄວາມງາມບໍ່ລົດທອນຄວາມໄວຂອງເຟຣມ ຫຼືປະສິດທິພາບທີ່ຕອບສະໜອງໄດ້ດີ.",
    },
    blobNote: {
      en: "Active procedural Canvas Blob render on side view",
      lo: "Canvas Blob ແບບ procedural ກຳລັງສະແດງຢູ່ດ້ານຂ້າງ",
    },
  },
  skills: {
    badge: { en: "My Skills", lo: "ທັກສະຂອງຂ້ອຍ" },
    titleA: { en: "Comprehensive", lo: "ຄວາມຊຳນານ" },
    titleB: { en: "Expertise", lo: "ຮອບດ້ານ" },
    body: {
      en: "Hover over the skill cards below to interact with their 3D tilt layouts. These cards reflect active spatial tilting computations mapped onto client-side cursor projections.",
      lo: "ນຳເມົາສ໌ໄປວາງເທິງບັດທັກສະເພື່ອໂຕ້ຕອບກັບເອັບເຟັກການອຽງ 3D ທີ່ຄຳນວນຕາມຕຳແໜ່ງ cursor ໃນຝັ່ງ client.",
    },
    proficiency: { en: "Proficiency", lo: "ລະດັບຄວາມຊຳນານ" },
  },
  projects: {
    badge: { en: "My Projects", lo: "ໂຄງການຂອງຂ້ອຍ" },
    titleA: { en: "Featured", lo: "ຜົນງານ" },
    titleB: { en: "Creations", lo: "ເດັ່ນ" },
    body: {
      en: "Exploring the limits of web browsers through creative computing, fluid logic, and custom 3D integrations.",
      lo: "ສຳຫຼວດຂີດຈຳກັດຂອງເບຣາວເຊີຜ່ານ creative computing, ຕັກກະທີ່ລື່ນໄຫຼ ແລະການຜະສານ 3D ແບບກຳນົດເອງ.",
    },
    repository: { en: "Repository", lo: "ຄັງໂຄດ" },
    liveDemo: { en: "Live Demo", lo: "ເບິ່ງຕົວຢ່າງ" },
  },
  experience: {
    badge: { en: "My Journey", lo: "ເສັ້ນທາງຂອງຂ້ອຍ" },
    titleA: { en: "Work", lo: "ປະສົບການ" },
    titleB: { en: "Experience", lo: "ການເຮັດວຽກ" },
    body: {
      en: "A chronological timeline of my achievements, milestones, and professional development as a modern creative developer.",
      lo: "ເສັ້ນເວລາຂອງຜົນສຳເລັດ, ຈຸດສຳຄັນ ແລະການເຕີບໂຕທາງວິຊາຊີບໃນຖານະນັກພັດທະນາສ້າງສັນສະໄໝໃໝ່.",
    },
  },
  contact: {
    badge: { en: "Get In Touch", lo: "ຕິດຕໍ່ຫາກັນ" },
    titleA: { en: "Let's Build Something", lo: "ມາສ້າງສິ່ງທີ່" },
    titleB: { en: "Incredible", lo: "ນ່າປະທັບໃຈ" },
    titleC: { en: "Together", lo: "ຮ່ວມກັນ" },
    body: {
      en: "Whether you have an upcoming project, a challenging visual concept, or just want to chat about creative frontend code, feel free to drop me a line.",
      lo: "ບໍ່ວ່າເຈົ້າມີໂຄງການໃໝ່, ແນວຄິດດ້ານວິຊວນທີ່ທ້າທາຍ ຫຼືຢາກຄຸຍເລື່ອງ frontend ແບບສ້າງສັນ, ສາມາດສົ່ງຂໍ້ຄວາມຫາຂ້ອຍໄດ້.",
    },
    email: { en: "Email:", lo: "ອີເມວ:" },
    location: { en: "Location:", lo: "ສະຖານທີ່:" },
    sentTitle: { en: "Message Sent!", lo: "ສົ່ງຂໍ້ຄວາມແລ້ວ!" },
    sentBody: {
      en: "Thank you for reaching out. I have received your message and will get back to you shortly.",
      lo: "ຂອບໃຈທີ່ຕິດຕໍ່ມາ. ຂ້ອຍໄດ້ຮັບຂໍ້ຄວາມແລ້ວ ແລະຈະຕອບກັບໄວໆນີ້.",
    },
    sendAnother: { en: "Send another message", lo: "ສົ່ງຂໍ້ຄວາມອີກຄັ້ງ" },
    nameLabel: { en: "Your Name", lo: "ຊື່ຂອງເຈົ້າ" },
    namePlaceholder: { en: "John Doe", lo: "ສົມໄຊ ໃຈດີ" },
    emailLabel: { en: "Email Address", lo: "ທີ່ຢູ່ອີເມວ" },
    emailPlaceholder: { en: "john@example.com", lo: "somxay@example.com" },
    messageLabel: { en: "Your Message", lo: "ຂໍ້ຄວາມຂອງເຈົ້າ" },
    messagePlaceholder: { en: "Let's discuss details...", lo: "ມາຄຸຍລາຍລະອຽດກັນ..." },
    sending: { en: "Sending...", lo: "ກຳລັງສົ່ງ..." },
    send: { en: "Send Message", lo: "ສົ່ງຂໍ້ຄວາມ" },
  },
  footer: {
    built: {
      en: "Built with Next.js 16, TS, R3F & Framer Motion.",
      lo: "ສ້າງດ້ວຍ Next.js 16, TS, R3F ແລະ Framer Motion.",
    },
  },
} as const;
