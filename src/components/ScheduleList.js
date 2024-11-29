import React from "react";

const ScheduleList = ({ schedules, onDelete }) => (
  <ul>
    {schedules.map((schedule) => (
      <li key={schedule.id}>
        <span>
          {schedule.title} - {new Date(schedule.dateTime).toLocaleString()}
        </span>
        <button onClick={() => onDelete(schedule.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ScheduleList;
