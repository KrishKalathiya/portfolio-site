
export const heroData = {
  name: "Krish Kalathiya",
  subtitle: "",
  description: `I'm a CS student at the University of Cincinnati specializing in building exceptional digital experiences.
                \nCurrently, I'm interested in accessible, human-centered products and innovative solutions with an focus on automotive applications.`,
  ctaText: "Check out my work!",
};

export const aboutData = {
  bio: [
    "Hello! I'm Krish, a Computer Science student at the University of Cincinnati (Class of 2027) with a 3.98 GPA.",
    "My journey in tech has led me to work on diverse projects, from automotive software testing with Vector CAN tools to full-stack web development. I'm passionate about building efficient, user-friendly applications.",
    "I have experience working in international teams and facilitating learning for other engineering students as a Peer Teaching Assistant."
  ],
  skills: [
    "Python",
    "C/C++",
    "MATLAB",
    "Vector CAN Tools",
    "JIRA"
  ],
  image: "src/assets/cropped.jpg"
};

export const experienceData = [
    {
    company: "Bendix Commercial Vehicle Systems",
    url: "https://www.bendix.com/",
    roles: [
      {
        id: "bendix-spring",
        title: "Hardware-in-the-Loop Co-op",
        range: "Jan 2026 - May 2026",
        duties: [
          "Still working on a lot of fun stuff!"
        ]
      },
      {
        id: "bendix-summer",
        title: "ADAS Testing and Verification Co-op",
        range: "May 2025 - Aug 2025",
        duties: [
          "Implemented CARLA for Functional Integration Testing, saving over $90,000 across 7 HIL systems globally.",
          "Performed data analysis to ensure system safety and alignment with customer specifications.",
          "Developed an enhanced understanding of development and testing of Adaptive Cruise Control systems"
        ]
      },
      {
        id: "bendix-fall",
        title: "Computer Science Co-op",
        range: "Aug 2024 - Dec 2024",
        duties: [
          "Collaborated with teams in Mexico, India, and Germany to support ADAS teams.",
          "Built a file-matching utility reducing a 15-minute manual process to 15 seconds (60x efficiency increase).",
          "Upgraded testing mileage tracking from Excel to a robust UI-based solution, eliminating user errors.",
          "Developed data mining scripts to directly assist in time sensitive and end-user safety critical product development."
        ]
      }
    ]
  },
  {
    company: "University of Cincinnati - DECE",
    url: "https://www.uc.edu/",
    roles: [
      
      {
        id: "uc-ta-2",
        title: "Engineering Design Thinking Peer TA",
        range: "Aug 2025 - Present",
        duties: [
          "Facilitating the growth and learning of 72 first-year engineering students.",
          "Conducting 1-on-1 personalized tutoring sessions for complex engineering topics.",
          "Translating instructor feedback to provide accessible support in a low-stress environment."
        ]
      },
      {
        id: "uc-ta-1",
        title: "Engineering Design Thinking Peer TA",
        range: "Jan 2025 - Apr 2025",
        duties: [
          "Guided over 60 students through Design Process, Ethics, CAD, and Python.",
          "Facilitated project demonstrations for over 1500 students.",
          "Ensured smooth operation of 3 courses as part of an 80-person TA team."
        ]
      }
    ]
  },
  {
    company: "University of Cincinnati - IT",
    url: "https://www.uc.edu/",
    roles: [
      {
        id: "uc-it-1",
        title: "Engineering Design Thinking Peer TA",
        range: "Aug 2025 - Dec 2025",
        duties: [
          "Assembled Windows 11 PCs for the Department of Environmental and Chemical Engineering.",
          "Ensured a smooth transition to new hardware for over 60 faculty and staff members.",
        ]
      },
    ]
  },

];

export const developmentData = [
  {
    title: "Mantei/Mae Scholar",
    meta: "University of Cincinnati • April 2026",
    description: "Awarded for commitment to academic excellence and continued growth."
  },
  {
    title: "Secretary - Executive Board",
    meta: "Association for Computing Machinery @UC • Nov 2025 - Present",
    description: "Developed robust and verifiable administrative processes to ensure smooth operations for the organisation."
  },
  {
    title: "Membership Chair",
    meta: "Association for Computing Machinery @UC • May 2025 - November 2025",
    description: "Facilitating the provision of crucial networking resources in the form of regular Speaker Nights and Workshops."
  },
  {
    title: "Logistics Organizer",
    meta: "Revolution UC • Sep 2025 - March 2026",
    description: "Organizing the largest in-person hackathon at UC that embodies principles of innovation and collaboration."
  },
  {
    title: "Organizer & Web Developer",
    meta: "Revolution UC • Sep 2023 - March 2025",
    description: "Collaborated to update the hackathon website to Astro framework for better performance. Organizing the largest hackathon at UC for 270+ participants."
  },
  {
    title: "Dean's List",
    meta: "University of Cincinnati • Aug 2023 - Present",
    description: "Recognized for academic excellence."
  }
];

export const projectsData = {
  featured: [
    {
      title: "Gravitas | The Ultimate Research Assistant",
      description: `Gravitas reimagines how scientists explore knowledge. 
      \nBuilt as a Retrieval-Augmented Generation (RAG)–based search engine, Gravitas transforms dense NASA scientific literature into a dynamic, interactive knowledge graph - turning research from data retrieval into true knowledge discovery.
      \nDeveloped as a part of NASA Space Apps Challenge 2025 (Won Most Inspirational Project award at the Local Level).`,
      tech: ["RAG", "Mass Data Analysis", "Knowledge Graphs", "LLMs"],
      github: "https://github.com/kee5625/gravitas.", 
      external: "https://gravitas-4hgt.vercel.app",
      image: "assets/gravitas.jpg"
    },
    {
      title: "Quartz",
      description: `The all-in-one extension that sanitizes your data and enhances your prompts for safer and more effective AI conversations. 
      \nQuartz has two powerful features: Security & Efficiency. Get better AI results instantly.
      \nDeveloped as a part of MakeUC 2025 (Won Best Security Hack)`,
      tech: ["Groq-API", "Cloudflare Workers","Web Extension"], 
      github: "https://github.com/kee5625/Quartz", 
      external: "https://devpost.com/software/quartz-64fbd3",
      image: "assets/quartz.png"
    }
  ],
  other: [
    {
      title: "Eureka!",
      description: `Eureka is the AI pre-flight check that kills scope creep and turns raw ideas into a validated engineering blueprint so you can actually ship.`,
      tech: ["Tailwind", "ArizeAI","Lllama AI Personas"],
      github: "https://github.com/SamarthEdlabadkar/Eureka",
      external: "https://devpost.com/software/eureka-8x4vq2"
    }

  ]
};
