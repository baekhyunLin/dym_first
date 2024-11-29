import React from "react";
import Calendar from "../components/Calendar";
import { useScheduleContext } from "../context/ScheduleContext";

const CalendarView = () => {
  const { schedules } = useScheduleContext();

  return (
    <div>
      <h1>Calendar View</h1>
      <Calendar schedules={schedules} />
    </div>
  );
};

export default CalendarView;
