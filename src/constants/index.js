import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  crypto_img,
  note_img,
  college_img,
  currency_Converter
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Live Crypto Tracker Website",
    description:
      "Developed a dynamic and responsive live cryptocurrency tracker website using React.js, leveraging the CoinGecko API for real-time data retrieval. The website features a user-friendly interface that displays the latest cryptocurrency prices, market capitalizations, and other essential metrics. Key functionalities include search capabilities, real-time updates, and detailed views of individual cryptocurrency performance. Implemented state management with React hooks and optimized the application for performance and scalability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CoinGecko ",
        color: "green-text-gradient",
      },
      {
        name: "context_api",
        color: "pink-text-gradient",
      },
    ],
    image: crypto_img,
    source_code_link: "https://crypto-price-tracking-biswo.netlify.app/",
  },
  {
    name: "To-Do List Application",
    description:
      "Created a versatile and aesthetically pleasing To-Do List application using React.js and Mantine UI, featuring both light and dark modes. The application includes essential functionalities such as adding, editing, and deleting tasks, with data persistence achieved through local storage. The user interface is built with Mantine UI components, ensuring a modern and intuitive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Mantine",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: note_img,
    source_code_link: "https://biswo-todoapp.netlify.app/",
  },
  {
    name: "University Showcase Website",
    description:
      "Designed and developed a static University Showcase website using HTML and CSS. The website features key sections such as Courses, About, Contact, and Blog, providing a comprehensive overview of the university. Focused on creating a visually appealing and user-friendly interface with responsive design principles to ensure accessibility across various devices. Implemented clean and structured HTML code coupled with modern CSS styling techniques to enhance the user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: college_img,
    source_code_link: "https://university-1.netlify.app/",
  },

  {
    name: "Currency Converter",
    description:
      "Built a dynamic currency converter application using React and TanStack Query, integrated with the Frankfurter API for real-time exchange rate data. Leveraged TanStack Query for efficient data fetching, caching, and synchronization, ensuring optimal performance and a seamless user experience. The project showcases expertise in modern React development, advanced state management with TanStack Query, and effective API integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Frankfurter-API ",
        color: "pink-text-gradient",
      },
      {
        name: "TanStack Query",
        color: "green-text-gradient",
      },
    ],
    image: currency_Converter,
    source_code_link: "",
  },

];

export { services, technologies, experiences, testimonials, projects };
