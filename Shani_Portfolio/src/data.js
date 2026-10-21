// ALL the content of the portfolio lives here (for now).
// Later (Class 10) this data will come from MongoDB instead.
// We use "_id" because MongoDB gives every item an _id.

export const profile = {
  name: "Shani Patel",
  title: "MERN Stack Developer",
  tagline:
    "I build simple, fast web apps with React and Node.js — " +
    "and I'm looking for my first role as a full-stack developer.",
  about:
    "I'm a final-year BCA student at SHEAT College of " +
    "Engineering, Varanasi. I enjoy turning ideas into working websites, " +
    "and I've spent the last year building projects with the MERN stack.",
  photo: "/profile.jpg",
  resumeUrl: "#",
  email: "shanipatel37780@gmail.com",
  location: "Varanasi, India",
  github: "https://github.com/iamshanipatel",
  linkedin: "https://linkedin.com/in/shani-patel-7b0a1b1b3",
};

export const skills = [
  { _id: "1", name: "HTML", category: "Frontend" },
  { _id: "2", name: "CSS", category: "Frontend" },
  { _id: "3", name: "JavaScript", category: "Frontend" },
  { _id: "4", name: "React", category: "Frontend" },
  { _id: "5", name: "Node.js", category: "Backend" },
  { _id: "6", name: "Express", category: "Backend" },
  { _id: "7", name: "MongoDB", category: "Backend" },
  { _id: "8", name: "Git & GitHub", category: "Tools" },
  { _id: "9", name: "VS Code", category: "Tools" },
  { _id: "10", name: "Postman", category: "Tools" },
];

export const projects = [
  {
    _id: "1",
    title: "StudyBuddy",
    description:
      "A notes-sharing app for college students. Upload notes by subject, search them, and bookmark the ones you need before exams.",
    image: "./chatbot.jpeg",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/iamshanipatel/",
    liveUrl: "https://fabulous-bonbon-0989fc.netlify.app/", 
  },
  {
    _id: "2",
    title: "Weather Now",
    description:
      "Type any city and see the current weather and a 5-day forecast, using the OpenWeather API.",
    image: "weather.jpeg",
    techStack: ["JavaScript", "HTML", "CSS", "API"],
    githubUrl: "https://github.com/iamshanipatel/weather-app-project",
    liveUrl: "https://weather-app-project-gamma-three.vercel.app/",
  },
  {
    _id: "3",
    title: "Expense Tracker",
    description:
      "Track daily spending by category and see where your money goes each month with simple charts.",
    image: "todolist.jpeg",
    techStack: ["React", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/iamshanipatel/To-Do-list",
    liveUrl: "https://stupendous-truffle-2ee58c.netlify.app/",
  },
   {
    _id: "3",
    title: "Expense Tracker",
    description:
      "Track daily spending by category and see where your money goes each month with simple charts.",
    image: "Docoment-convard.jpeg",
    techStack: ["React", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/iamshanipatel/PDF_convart",
    liveUrl: "https://marvelous-hummingbird-333e46.netlify.app/",
  },
];



// type is either "education" or "experience"
export const experiences = [
  {
    _id: "1",
    type: "education",
    title: "B.Tech, Computer Science",
    organization: "SHEAT College of Engineering, Varanasi",
    duration: "2022 – 2026",
    description: "Current CGPA 7.8. Part of the college Skill Lab MERN batch.",
  },
  {
    _id: "2",
    type: "education",
    title: "Class XII (PCM)",
    organization: "Kendriya Vidyalaya, Varanasi",
    duration: "2021 – 2022",
    description: "Scored 82%.",
  },
  {
    _id: "3",
    type: "experience",
    title: "Web Development Intern",
    organization: "Minicimex Tech, Varanasi",
    duration: "Jun 2025 – Aug 2025",
    description:
      "Built React components for a booking website and connected them to a Node.js API.",
  },
  {
    _id: "4",
    type: "experience",
    title: "MERN Skill Lab Trainee",
    organization: "SHEAT Skill Lab",
    duration: "2025 – 2026",
    description: "Built and deployed this portfolio from scratch with the MERN stack.",
  },
];
