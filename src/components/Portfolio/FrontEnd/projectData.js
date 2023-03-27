import gaweyoPortfolio from "../FrontEnd/assets/gaweyo-portfolio.png";
import todoApp from "../FrontEnd/assets/react-todo-app.png";
import loginSystem from "../FrontEnd/assets/react-login-system.png";
import programming from "../../Portfolio/assets/programming.jpg";
import crud from "../FrontEnd/assets/react-crud-mysql.png";

const projectData = [
  {
    id: "1",
    image: gaweyoPortfolio,
    name: "Gaweyo Project Portfolio",
    description: "Build with: React Js, Tailwind CSS",
    link: "https://gaweyo-portfolio.vercel.app/",
  },
  {
    id: "2",
    image: todoApp,
    name: "React Todo App",
    description: "Build with: React Js, Tailwind CSS",
    link: "https://react-todo-app-two-blush.vercel.app/",
  },
  {
    id: "3",
    image: loginSystem,
    name: "React Sign In and Sign Up System using Local Storage",
    description: "Build with: React Js, Sass Css",
    link: "https://react-login-system.vercel.app/",
  },
  {
    id: "4",
    image: crud,
    name: "React CRUD with PHP MYSQL for API",
    description: "Build with: React Js, Bootstrap CSS, PHP, DATABASE MYSQL",
    link: "https://github.com/Pandjiimansp001/react-crud-mysql",
  },
];

export default projectData;
