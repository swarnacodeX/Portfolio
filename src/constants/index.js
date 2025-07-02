
import { spring } from 'framer-motion';
import {
  logo,
  backend,
  creator,
  mobile,
  docker,
  web,
  pgadmin,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  springboot,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import { p } from 'maath/dist/misc-7d870b3c.esm';


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
    title: "Software Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  }
  
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name:"Docker",
    icon:docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {name: "PostgreSQL",
    icon:pgadmin,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "JAVA Developer Intern",
    company_name: "Cognizant",
    icon: tekisky,
    iconBg: "#383E56",
    date: "March 2025 - June 2025",
    points: [
      "Developing and maintaining web applications using SprimgBoot technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "Med-AI",
    description:
      "Med-AI is a web-based platform that allows users to store medical records and use our AI assistant for Chest Disease Detection.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
      {
        name: "google cloud",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Strim",
    description:
      "Strim is a web-based E-Commerce platform that allows users to search, browse, and purchase products online. It features a user-friendly interface, secure payment options, and a wide range of products.",
    tags: [
      {
        name: "react+vite",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences,projects };
