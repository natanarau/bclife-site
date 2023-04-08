import React from "react";
import { RouterApp } from "./router";

export default function App() {
  React.useEffect(() => {
    document.title = 'BC Life Cosméticos';
  }, []);
  return <RouterApp />;
}
