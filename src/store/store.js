// frontend/src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./slices/applicationSlice";
import jobReducer from "./slices/jobSlice";
import updateProfileReducer from "./slices/updateProfileSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    applications: applicationReducer,
    jobs: jobReducer,
    updateProfile: updateProfileReducer,
    user: userReducer,
  },
});

export default store;
