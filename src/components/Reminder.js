import React from "react";

const Reminder = ({ reminders, dismissReminder }) => (
  <div className="reminder-container">
    {reminders.map((reminder) => (
      <div key={reminder.id} className="reminder">
        <span>{reminder.title}</span>
        <button onClick={() => dismissReminder(reminder.id)}>Dismiss</button>
      </div>
    ))}
  </div>
);

export default Reminder;
