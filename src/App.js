import React from "react";
import AppRouter from "./router/index";
import { ScheduleProvider } from "./context/ScheduleContext";

const App = () => (
  <ScheduleProvider>
    <AppRouter />
  </ScheduleProvider>
);

export default App;
