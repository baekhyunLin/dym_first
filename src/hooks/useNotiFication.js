// hooks/useNotification.js
import { useEffect } from "react";
import dayjs from "dayjs";
export const useNotification = (reminders) => {
  useEffect(() => {
    const interval = setInterval(() => {
      reminders.forEach((reminder) => {
        const now = dayjs();
        if (now.isSame(dayjs(`${reminder.date} ${reminder.time}`), "minute")) {
          alert(`Reminder: ${reminder.title}`);
        }
      });
    }, 60000); // 每分钟检查一次

    return () => clearInterval(interval);
  }, [reminders]);
};
