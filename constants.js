export const METADATA = {
  author: "Amrouss Ilyass",
  title: "Portfolio | Amrouss Ilyass",
  description:
    "Amrouss Ilyass, élève ingénieur en génie industriel, passionné par l'optimisation des processus, l'électrotechnique et la gestion de projets industriels.",
  twitterHandle: "@ilyassamrouss",
  keywords: [
    "Amrouss Ilyass",
    "Génie Industriel",
    "Optimisation des processus",
    "Six Sigma",
    "Électrotechnique",
    "GMAO",
    "Chef de projet",
    "Ingénierie",
    "Portfolio",
  ].join(", "),
  image:
    "https://media.licdn.com/dms/image/v2/D4E03AQGIF8IZCoybEg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730414781988?e=1755734400&v=beta&t=SlcJ1Km6ysFdIXYbYtDX1lfJoNtwV89C07dLq7ocn68", 
  language: "Français",
  themeColor: "#000000",
};

export const MENULINKS = [
  { name: "Accueil", ref: "home" },
  { name: "Compétences", ref: "skills" },
  { name: "Projets", ref: "projects" },
  { name: "Expérience", ref: "work" },
  { name: "Contact", ref: "contact" },
];

export const TYPED_STRINGS = [
  "Futur ingénieur en Génie Industriel",
  "Passionné par l'optimisation des systèmes",
  "Je conçois des solutions intelligentes et efficientes",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "Amroussi456@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ilyass-amrouss-75263b259/",
  },
  
  {
    name: "instagram",
    url: "https://www.instagram.com/ams_ilyas/", 
  },
  {
    name: "twitter",
    url: "https://x.com/teslasIly52432?t=IiILbBZYYvoVIYCytbhROA&s=09", 
  },
];

export const SKILLS = {
  languagesAndTools: [
    "python",
    "cpp",
    "mysql",
    "arduino",
    "psim",
    "catia",
    "word",
    "excel",
    "powerpoint",
  ],
  librariesAndFrameworks: [],
  databases: ["mysql"],
  operatingSystems: ["windows"],
  other: [
    "figma",
    "photoshop",
    "illustrator",
    "office",
    "proto",
    "canva",
  ],
};

export const PROJECTS = [
  {
  name: "Conception d’un système GMAO basé sur l’AMDEC",
  image: "/projects/agent.webp",
  blurImage: "/projects/blur/agent.webp",
  description: "Projet d'ingénierie visant à développer un système de gestion de maintenance assistée par ordinateur (GMAO), en intégrant l'analyse des modes de défaillance, de leurs effets et de leur criticité (AMDEC).",
  gradient: ["#004d00", "#66cc66"],
  url: "#",
  tech: ["AMDEC", "GMAO", "UML"]
},
{
  name: "La réalisation d’un réducteur pour un élévateur à godets",
  image: "/projects/agent.webp",
  blurImage: "/projects/blur/agent.webp",
  description: "Étude, dimensionnement et conception mécanique d’un réducteur adapté à un système d’élévation par godets, en prenant en compte les contraintes de couple et de rendement.",
  gradient: ["#660000", "#ff6666"],
  url: "#",
  tech: ["CATIA", "SolidWorks", "Calculs mécaniques"]
},
  {
    name: "Application de Gestion de Club Sportif",
    image: "/projects/agent.webp",
    blurImage: "/projects/blur/agent.webp",
    description: "Application console en C++ pour gérer un club sportif, développée en binôme.",
    gradient: ["#142D46", "#2E4964"],
    url: "#",
    tech: ["cpp"],
  },
  {
    name: "NASI7TI - Hackathon Orange Digital",
    image: "/projects/agent.webp",
    blurImage: "/projects/blur/agent.webp",
    description: "Application mobile de sensibilisation à la santé, projet réalisé dans le cadre d un hackathon national.",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "#",
    tech: ["figma", "canva"],
  },
  {
    name: "Câblage de moteurs électriques",
    image: "/projects/agent.webp",
    blurImage: "/projects/blur/agent.webp",
    description: "Projet académique sur l\'accouplement et le démarrage de moteurs en différents couplages.",
    gradient: ["#000066", "#6699FF"],
    url: "#",
    tech: ["psim", "catia", "arduino"],
  },
];

export const WORK_CONTENTS = {
  RENAULT_GROUP: [
  {
    title: "Stage PFA - Département Tôlerie Service Maintenance",
    description: "Contribution à la fiabilisation de l\'installation BM30, en particulier sur l\'aspect préventif, au sein du service maintenance du département tôlerie.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Stagiaire en maintenance industrielle - Fiabilisation
      </div>
    ),
  },
],
  JACOB_DELAFON: [
    {
      title: "Stage d’initiation - Département qualité",
      description: "Participation à la mise à jour des fiches d'instruction et des modes opératoires pour améliorer l'interface qualité dans une usine de production.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Stagiaire en qualité industrielle
        </div>
      ),
    },
  ],
  LEGENDS: [
    {
      title: "Fondateur & Vice-Président - The Legends FSTT",
      description: "Organisation d'événements scientifiques et techniques pour les étudiants, développement du leadership et des compétences organisationnelles.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Leadership associatif
        </div>
      ),
    },
  ],
};

export const GTAG = "G-JLY5CXZDRF"; 
