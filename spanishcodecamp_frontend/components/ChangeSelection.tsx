import React, { FC } from "react";
import Dashboard from "./Dashboard";

interface ChangeSideSelecion {
  onChange: string;
}

const ChangeSideSelecion: FC<ChangeSideSelecion> = (props) => {
  switch (props.onChange) {
    case "dashboard":
      return <Dashboard />;
    default:
      return <Dashboard />;
  }
};

export default ChangeSideSelecion;
