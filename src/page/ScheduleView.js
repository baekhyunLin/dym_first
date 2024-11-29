import React, { useState } from "react";
import { useScheduleContext } from "../context/ScheduleContext";
import ScheduleList from "../components/ScheduleList";
import Reminder from "../components/Reminder";
import useReminder from "../hooks/useReminder";

const ScheduleView = () => {
  const { schedules, dispatch } = useScheduleContext();
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const { reminders, dismissReminder } = useReminder(schedules);
  const [frequency, setFrequency] = useState("none"); // 默认为不重复
  const addSchedule = () => {
    dispatch({
      type: "ADD_SCHEDULE",
      payload: { id: Date.now(), title, dateTime, frequency },
    });
    setTitle("");
    setDateTime("");
    setFrequency("none");
  };

  return (
    <div>
      <Reminder reminders={reminders} dismissReminder={dismissReminder} />
      <h1>Schedule List</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <button onClick={addSchedule}>Add Schedule</button>
      <ScheduleList
        schedules={schedules}
        onDelete={(id) => dispatch({ type: "REMOVE_SCHEDULE", payload: id })}
      />
    </div>
  );
};

export default ScheduleView;
