import gaweyoPortfolio from "../FrontEnd/assets/gaweyo-portfolio.png";
import todoApp from "../FrontEnd/assets/react-todo-app.png";
import loginSystem from "../FrontEnd/assets/react-login-system.png";
import programming from "../../Portfolio/assets/programming.jpg";

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
    image: programming,
    name: "Comming soon...",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quiveniam neque minus, asperiores delectus quaerat molestiae ex ullamporro non",
  },
];

export default projectData;
