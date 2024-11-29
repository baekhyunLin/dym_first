// store/remindersSlice.js (Redux 示例)
import { createSlice } from "@reduxjs/toolkit";

const remindersSlice = createSlice({
  name: "reminders",
  initialState: [],
  reducers: {
    addReminder: (state, action) => {
      state.push(action.payload);
    },
    deleteReminder: (state, action) => {
      return state.filter((reminder) => reminder.id !== action.payload);
    },
  },
});

export const { addReminder, deleteReminder } = remindersSlice.actions;
export default remindersSlice.reducer;
