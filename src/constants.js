// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import frontend from './assets/company_logo/frontend.webp'
import backend from './assets/company_logo/backend.webp'


// Education Section Logo's
import mitslogo from './assets/education_logo/mits_logo.jpeg';


// Project Section Logo's
import ui from './assets/work_logo/ui.png'
import mystery from './assets/work_logo/mystery.png'
import jobportal from './assets/work_logo/jobportal.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [


    {
      id: 0,
      img: frontend,
      role: "Frontend Development",
      company: "Self Project-Based Learning",
      date: "2025 – Present",
      desc: "Built web pages using HTML, CSS, Javascript and other UI components. Practiced creating responsive layouts and improved understanding of frontend development fundamentals.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap",
        "Material UI",
      ]
    },

  {
      id: 1,
      img: backend,
      role: "Backend Development",
      company: "Focuses on practical skills development",
      date: "2025 – Present",
      desc: "Practiced backend development using the MERN stack. Created REST APIs with Node.js and Express, connected MongoDB for data handling, and implemented basic authentication.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "TypeScript",
        "REST API",
        "JWT Auth"
      ]
    },


  ];
  
  export const education = [
    {
      id: 0,
      img: mitslogo, // ← make sure this is correctly imported
      school: "Madhav Institute of Technology & Science (MITS), Gwalior",
      grade: " 8.3 CGPA",
      desc: "B.Tech IT student at MITS Gwalior, passionate about technology and continuous learning. Actively engaged in problem-solving, development projects, and tech communities to build practical experience.",
      degree: "B.Tech in Information Technology",
    }


  ];
  
  export const projects = [
    {
      id: 0,
      title: "Mystery Message",
      description:
       " Mystery Message is a sleek and modern platform that lets users send and receive anonymous messages, feedback, or confessions. Whether you're looking for honest opinions, emotional support, or a place to express your thoughts without judgment that gives you the space to be real.",
      image: mystery,
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Next.js", "HTML", "CSS", "TypeScript"],
      github: "https://github.com/ayush-mishra15/Mystery-Message",
      webapp: "https://mystery-message-psi-three.vercel.app/",
    },
    {
      id: 1,
      title: "Job Portal",
      description:
        "A full-stack job portal system built with the MERN stack, featuring user authentication, role-based access (student/recruiter), job application management where students can apply for jobs and recruiters can post them, resume handling, and a responsive interface for seamless interaction across devices.",   
     image: jobportal,
      tags: ["HTML", "tailwind CSS", "JavaScript","React.js", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/ayush-mishra15/JobPortal",
      webapp: "https://jobportal-1-ezt6.onrender.com/",
    },
    {
      id: 2,
      title: "UI/UX Project",
      description:
      "A simple and well-organized UI/UX design made for a website interface. It includes clear page flow, intuitive layout, and a design that makes browsing easy , visually pleasant and user friendly.",
      image: ui,
      tags: ["HTML", "tailwind CSS", "TypeScript", "Next.js"],
      github: "https://github.com/ayush-mishra15/UI-UX-Project",
      webapp: "https://ui-ux-project-chi.vercel.app/",
    },
    
  ];  