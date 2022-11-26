import React, { FC } from "react";
import Dashboard from "./Dashboard";
import Course from "./Course";

interface ChangeSideSelecion {
  onChange: string;
}

const ChangeSideSelecion: FC<ChangeSideSelecion> = (props) => {
  switch (props.onChange) {
    case "dashboard":
      return <Dashboard />;
    case "course":
      return <Course />;
    default:
      return <Dashboard />;
  }
};

export default ChangeSideSelecion;
