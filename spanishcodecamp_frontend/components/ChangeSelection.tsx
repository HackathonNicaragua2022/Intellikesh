import React, { FC } from "react";
import dashboardPage from "../pages/dashboardPage";

interface ChangeSideSelecion {
  onChange: string;
}

const ChangeSideSelecion: FC<ChangeSideSelecion> = (props) => {
  switch (props.onChange) {
    case "dashboard":
      return <dashboardPage />;
    default:
      return <dashboardPage />;
  }
};

export default ChangeSideSelecion;
