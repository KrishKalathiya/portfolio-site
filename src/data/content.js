
export const heroData = {
  name: "Krish Kalathiya",
  subtitle: "I build things for the web.",
  description: "I'm a Computer Science student at the University of Cincinnati specializing in building exceptional digital experiences. Currently, I'm focused on accessible, human-centered products and innovative solutions.",
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
    "Java",
    "C++",
    "MATLAB",
    "React",
    "Astro",
    "Vector CAN Tools",
    "JIRA"
  ],
  image: "path/to/image.jpg" // You can update this path later
};

export const experienceData = [
  {
    company: "University of Cincinnati",
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
    company: "Bendix Commercial Vehicle Systems",
    url: "https://www.bendix.com/",
    roles: [
      {
        id: "bendix-summer",
        title: "Computer Science Co-op",
        range: "May 2025 - Aug 2025",
        duties: [
          "Implemented CARLA for Functional Integration Testing, saving over $90,000 across 7 HIL systems globally.",
          "Performed data analysis to ensure system safety and alignment with customer specifications."
        ]
      },
      {
        id: "bendix-fall",
        title: "Computer Science Co-op",
        range: "Aug 2024 - Dec 2024",
        duties: [
          "Collaborated with teams in Mexico, India, and Germany to support ADAS teams.",
          "Built a file-matching utility reducing a 15-minute manual process to 15 seconds (60x efficiency increase).",
          "Upgraded testing mileage tracking from Excel to a robust UI-based solution, eliminating user errors."
        ]
      }
    ]
  }
];

export const developmentData = [
  {
    title: "Membership Chair",
    meta: "Association for Computing Machinery @UC • May 2025 - Present",
    description: "Facilitating networking resources (Speaker Nights, Workshops) and advocating for early career growth."
  },
  {
    title: "Organizer & Web Developer",
    meta: "Revolution UC • Sep 2023 - Present",
    description: "Collaborated to update the hackathon website to Astro framework for better performance. Organizing the largest hackathon at UC for 270+ participants."
  },
  {
    title: "International Outreach Award",
    meta: "University of Cincinnati • Aug 2023 - Present",
    description: "Awarded for commitment to international outreach and engagement."
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
      title: "Revolution UC Website",
      description: "Updated the base front-end framework of the hackathon website to Astro, resulting in quicker load times and better user experience for over 270 participants.",
      tech: ["Astro", "JavaScript", "HTML/CSS"],
      github: "https://github.com/KrishKalathiya", // Update if specific repo exists
      external: "https://revolutionuc.com/", // Assuming this is the site
      image: "revolutionuc"
    },
    {
      title: "File-Matching Utility",
      description: "Automated an intensive manual process for Bendix, reducing processing time from 15 minutes to 15 seconds.",
      tech: ["Python", "UI Automation"], // Guessed tech stack based on description
      github: "#", // Internal project, likely no link
      external: "#",
      image: "utility"
    }
  ],
  other: [
    {
      title: "Mileage Tracking UI",
      description: "Robust UI-based solution to replace Excel tracking for testing mileage.",
      tech: ["UI Framework", "Database"],
      github: "#"
    }
    // Add more projects here
  ]
};
