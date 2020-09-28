import React from "react";
import signlingo from "../assets/images/signlingo.png";
import betterProfessor from "../assets/images/teaching.jpg";
import choreTracker from "../assets/images/washing-dishes.jpg";
import weightLifting from "../assets/images/workout.jpg";

export const portfolioItems = [
  {
    portfolioImage: signlingo,
    PortfolioText: "A mobile first web app for teaching a gamified ASL curriculum",
    PortfolioTitle: "SignLingo",
    PortfolioStack: "ReactJS | Redux | Node.js | Express.js | Postgres | Material UI | SASS",
    
    
  },
  {
    portfolioImage: betterProfessor,
    PortfolioText: "A web app to allow professors to track there students project deadlines",
    PortfolioTitle: "Better Professor",
    PortfolioStack: "React | ContextAPI | Material UI | Styled-Compoents | Node | Express",
  },
  {
    portfolioImage: choreTracker,
    PortfolioText: "A web app to gamify chores for the family",
    PortfolioTitle: "Chare Tracker",
    PortfolioStack: "React | Formik | Material UI",
  },
  {
    portfolioImage: weightLifting,
    PortfolioText: "A landing page for a Weight Lifting Journal web app",
    PortfolioTitle: "Better Weight Lifting Journal",
    PortfolioStack: "HTML | CSS | LESS",
  },
];
