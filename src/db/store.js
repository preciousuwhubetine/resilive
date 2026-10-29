
import { configureStore } from "@reduxjs/toolkit";
// import users from "../application/services/users";

export const store = configureStore({
  reducer: {
    // users: users.reducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
