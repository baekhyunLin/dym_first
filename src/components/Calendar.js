import React, { useState } from "react";
import dayjs from "dayjs";

const Calendar = ({ schedules }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const daysInMonth = dayjs().daysInMonth();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getSchedulesForDay = (day) => {
    return schedules.filter(
      (schedule) => dayjs(schedule.dateTime).date() === day
    );
  };

  return (
    <div>
      <div className="calendar">
        {days.map((day) => (
          <div
            key={day}
            className={`day ${selectedDay === day ? "selected" : ""}`}
            onClick={() => setSelectedDay(day)}
          >
            <div>{day}</div>
            <ul>
              {getSchedulesForDay(day).map((schedule) => (
                <li key={schedule.id}>{schedule.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedDay && (
        <div className="selected-day-schedules">
          <h2>
            Schedules for {dayjs().date(selectedDay).format("YYYY-MM-DD")}
          </h2>
          <ul>
            {getSchedulesForDay(selectedDay).map((schedule) => (
              <li key={schedule.id}>
                {schedule.title} - {dayjs(schedule.dateTime).format("HH:mm")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calendar;
