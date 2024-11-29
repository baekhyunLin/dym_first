import React, { createContext, useReducer, useContext } from "react";

const ScheduleContext = createContext();

const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SCHEDULE":
      return [...state, action.payload];
    case "REMOVE_SCHEDULE":
      return state.filter(schedule => schedule.id !== action.payload);
    default:
      return state;
  }
};

export const ScheduleProvider = ({ children }) => {
  const [schedules, dispatch] = useReducer(scheduleReducer, []);
  return (
    <ScheduleContext.Provider value={{ schedules, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useScheduleContext = () => useContext(ScheduleContext);
