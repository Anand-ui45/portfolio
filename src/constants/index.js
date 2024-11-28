export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "jayanthan solomon",
    position: "CEO of the Ryde foundation",
    img: "https://rydefoundation.in/teampic/solomon%20%20sir.jpg",
    review:
      "I can’t say enough good things about Anand. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 2,
    name: "Sasi Rekha",
    position: "Senior Trainer in Ryde",
    img: "https://rydefoundation.in/compete/Image/SasiRekha.jpeg",
    review:
      "Anand’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
 
];

export const myProjects = [
  {
    title: "Natours - Tour Booking Applicaion",
    desc: "Natours is a Node.js application designed to showcase modern back-end development techniques with Express.js and MongoDB, commonly focused on building an elegant and functional tour booking platform. Below are its key aspects and features:",
    subdesc:
      "This application serves as a strong portfolio project, demonstrating My ability to design and implement comprehensive, production-ready back-end solutions.",
    href: "https://natours-9nrj.onrender.com",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs-icon.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "assets/expressjs-icon.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb-icon.svg",
      },
      {
        id: 4,
        name: "Pug",
        path: "/assets/pugjs-icon.svg",
      },
    ],
  },
  {
    title: "Fast-React-Pizza",
    desc: "Fast React Pizza is a sleek and interactive web application designed for managing pizza orders with modern front-end technologies. The app is built with a focus on speed, scalability, and user-friendliness. It combines powerful state management.",
    subdesc:
      "By building the Fast React Pizza App, I am Mastered modern state management with Redux Toolkit. Gained expertise in creating responsive designs with Tailwind CSS.",
    href: "https://react-pizza-eta-ruby.vercel.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/pizza-app.webp",
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Redux",
        path: "/assets/js_redux-icon.svg",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/javascript-icon.svg",
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Ryde foundation",
    pos: "Web Designer",
    duration: "2024 - Present",
    title:
      "I began my journey as a web designer intern at Ryde Foundation, where I honed my skills in creating visually appealing and user-friendly websites. During this internship, I gained valuable experience in web design, which laid the foundation for my future career in frontend development.",
    icon: "https://rydefoundation.in/new%20img/RydeLogo%20(1).png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Ryde foundation",
    pos: "Frontend Developer",
    duration: "2024 - Present",
    title:
      "Later, I transitioned into a front-end intern role, where I further developed my skills in building interactive and dynamic web applications.",
    icon: "https://rydefoundation.in/new%20img/RydeLogo%20(1).png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Ryde foundtion",
    pos: "Backend Developer",
    duration: "2024 - Present",
    title:
      "I then mastered backend technologies like Node.js, Express, and MongoDB, which enabled me to transition into a backend intern role.",
    icon: "https://rydefoundation.in/new%20img/RydeLogo%20(1).png",
    animation: "salute",
  },
];
