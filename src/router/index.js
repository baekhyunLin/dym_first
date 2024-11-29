import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScheduleView from "../page/ScheduleView";
import CalendarView from "../page/CalendarPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ScheduleView />} />
      <Route path="/calendar" element={<CalendarView />} />
    </Routes>
  </Router>
);

export default AppRouter;
