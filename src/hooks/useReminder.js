import { useEffect, useState } from "react";

const useReminder = (schedules) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const timers = schedules.map((schedule) => {
      const delay = new Date(schedule.dateTime) - new Date();
      if (delay > 0) {
        return setTimeout(() => {
          setReminders((prev) => [
            ...prev,
            {
              id: schedule.id,
              title: schedule.title,
              dateTime: schedule.dateTime,
            },
          ]);
        }, delay);
      }
      return null;
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [schedules]);

  const dismissReminder = (id) => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
  };

  return { reminders, dismissReminder };
};

export default useReminder;
