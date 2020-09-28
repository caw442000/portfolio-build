import React from "react";
import signlingo from "../assets/images/signlingo.png";
import betterProfessor from "../assets/images/teaching.jpg";
import choreTracker from "../assets/images/washing-dishes.jpg";
import weightLifting from "../assets/images/workout.jpg";

export const portfolioItems = [
  {
    portfolioImage: signlingo,
    PortfolioText: "Home",
    PortfolioTitle: "SignLingo",
    PortfolioStack: "ReactJS | Redux | Node.js | Express.js | Postgres | Material UI | SASS",
    
    
  },
  {
    portfolioImage: betterProfessor,
    PortfolioText: "Resume",
    PortfolioTitle: "Better Professor",
    PortfolioStack: "React | ContextAPI | Material UI | Styled-Compoents | Node | Express",
  },
  {
    portfolioImage: choreTracker,
    PortfolioText: "Portfolio",
    PortfolioTitle: "Chare Tracker",
    PortfolioStack: "React | Formik | Material UI",
  },
  {
    portfolioImage: weightLifting,
    PortfolioText: "Contact",
    PortfolioTitle: "Better Weight Lifting Journal",
    PortfolioStack: "HTML | CSS | LESS",
  },
];
