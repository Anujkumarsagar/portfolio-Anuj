export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  mockupImage?: string;
  tags: string[];
  link: string;
  github: string;
  details: {
    overview: string;
    features: string[];
    technologies: string[];
    challenge: string;
    solution: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: "recipe-app",
    title: "Recipe Sharing App",
    shortDescription: "A community-driven platform for culinary experts",
    fullDescription:
      "A community-driven platform for culinary experts featuring real-time collaborative cooking and dynamic ingredient scaling.",
    image: "./assets/home/recipe.png",
    mockupImage: "./assets/home/recipe.png",
    tags: ["NEXT.JS", "FIREBASE", "TAILWIND"],
    link: "https://recipe-sharing-app-6b5v.onrender.com/",
    github: "https://github.com/Anujkumarsagar/Recipe-Sharing-app",
    details: {
      overview:
        "A revolutionary platform that connects culinary experts and cooking enthusiasts in real-time. Users can share recipes, collaborate on cooking projects, and scale ingredients dynamically based on serving sizes.",
      features: [
        "Real-time collaborative cooking sessions",
        "Dynamic ingredient scaling",
        "User profiles and expertise levels",
        "Recipe rating and reviews",
        "Ingredient availability tracking",
        "Community cooking challenges",
      ],
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React", "Node.js"],
      challenge:
        "Managing real-time updates across multiple users while maintaining ingredient accuracy and scaling consistency.",
      solution:
        "Implemented Firebase Realtime Database with custom scaling algorithms and optimistic UI updates for seamless collaboration.",
      results:
        "Successfully deployed with 500+ active users and 95% uptime. Average session duration increased by 40% after launching real-time features.",
    },
  },
  {
    id: "dost-saas",
    title: "Dost SaaS",
    shortDescription: "Internal productivity dashboard with data visualization",
    fullDescription:
      "Internal productivity dashboard with high-fidelity data visualization and automated workflow management.",
    image: "./assets/home/first.png",
    mockupImage: "./assets/home/first.png",
    tags: ["GRAPHQL", "REACT", "NODEJS"],
    link: "https://recipe-sharing-app-6b5v.onrender.com/",
    github: "https://github.com/Anujkumarsagar/Recipe-Sharing-app",
    details: {
      overview:
        "An enterprise-grade SaaS platform designed to streamline team operations with comprehensive analytics and workflow automation.",
      features: [
        "Advanced data visualization dashboards",
        "Automated workflow management",
        "Real-time team analytics",
        "Custom reporting tools",
        "Integration with 50+ third-party services",
        "Role-based access control",
      ],
      technologies: ["React", "GraphQL", "Node.js", "MongoDB", "D3.js"],
      challenge:
        "Handling large datasets and rendering complex visualizations without performance degradation.",
      solution:
        "Implemented data aggregation pipelines, lazy loading, and WebSocket connections for real-time updates.",
      results:
        "Reduced dashboard load time by 60% and improved data refresh rate to sub-second latency.",
    },
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDescription: "Modern, interactive portfolio with smooth animations",
    fullDescription:
      "Modern, interactive portfolio showcasing projects and expertise with cutting-edge web technologies.",
    image: "./assets/home/home.png",
    mockupImage: "./assets/home/home.png",
    tags: ["NEXT.JS", "GSAP", "TAILWIND"],
    link: "https://recipe-sharing-app-6b5v.onrender.com/",
    github: "https://github.com/Anujkumarsagar/Recipe-Sharing-app",
    details: {
      overview:
        "A personal portfolio website showcasing design work and engineering expertise with interactive animations and smooth transitions.",
      features: [
        "Smooth scroll animations",
        "Interactive project showcase",
        "Responsive design",
        "Dark mode support",
        "SEO optimized",
        "Performance metrics tracking",
      ],
      technologies: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      challenge:
        "Creating smooth animations while maintaining 90+ Lighthouse performance score.",
      solution:
        "Used GSAP for GPU-accelerated animations and Next.js Image optimization for fast loading.",
      results:
        "Achieved 98 Lighthouse score and 300% increase in portfolio inquiries.",
    },
  },
];
