import React, { lazy } from "react";

const importDemos = (file) => {
  return lazy(() => import(`../components/demos/${file}`));
  // returns a promise
};

export default importDemos;
