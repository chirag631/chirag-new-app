import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SpalshFour from "pages/SpalshFour";
import Menu from "pages/Menu";
import Contactus from "pages/Contactus";
import WebpageNew from "pages/WebpageNew";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <SpalshFour /> },
    { path: "*", element: <NotFound /> },
    {
      path: "spalshfour",
      element: <SpalshFour />,
    },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "contactus",
      element: <Contactus />,
    },
    {
      path: "webpagenew",
      element: <WebpageNew />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
