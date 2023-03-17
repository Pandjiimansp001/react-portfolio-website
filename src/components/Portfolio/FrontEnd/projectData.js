import gaweyoPortfolio from "../FrontEnd/assets/gaweyo-portfolio.png";
import expenseTracker from "../FrontEnd/assets/react-expense-tracker-app.png";
import todoApp from "../FrontEnd/assets/react-todo-app.png";
import secondmart from "../FrontEnd/assets/secondmart.png";

const projectData = [
  {
    id: "1",
    image: gaweyoPortfolio,
    name: "Gaweyo Project Portfolio",
    description:
      "At refourma, I did an internship as a front end web developer for 3 months. I managed to complete the 1 month React js programming training provided by the company and after that I started working on real projects. I also managed to complete 50+ work tasks for company projects well. The technologies that I use include reactjs, tailwind css, and the use of git in working on the project.",
    link: "https://gaweyo-portfolio.vercel.app/",
  },
  {
    id: "2",
    image: todoApp,
    name: "React Todo App",
    description:
      "Project build with reactjs and tailwind css. In the todo app application there are several functions such as adding data and also deleting data by clicking on an existing task",
    link: "https://react-todo-app-two-blush.vercel.app/",
  },
  {
    id: "3",
    image: expenseTracker,
    name: "React Expense Tracker App",
    description:
      "The expense tracker app consists of several functions or components including add and filter which are equipped with bar charts. this app build with reactjs and tailwind css",
    link: "https://react-expense-tracker-chi.vercel.app/",
  },
  {
    id: "4",
    image: secondmart,
    name: "React E-Commerce Secondmart",
    description:
      "The components in the project consist of login and registration pages with authentication. checkout, shop, product details and cart pages",
    link: "https://ecommerce-secondmart.vercel.app/",
  },
];

export default projectData;
