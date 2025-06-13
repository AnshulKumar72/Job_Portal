// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const applicationSlice = createSlice({
//   name: "applications",
//   initialState: {
//     applications: [],
//     loading: false,
//     error: null,
//     message: null,
//   },
//   reducers: {
//     requestForAllApplications(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     successForAllApplications(state, action) {
//       state.loading = false;
//       state.error = null;
//       state.applications = action.payload;
//     },
//     failureForAllApplications(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     requestForMyApplications(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     successForMyApplications(state, action) {
//       state.loading = false;
//       state.error = null;
//       state.applications = action.payload;
//     },
//     failureForMyApplications(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     requestForPostApplication(state) {
//       state.loading = true;
//       state.error = null;
//       state.message = null;
//     },
//     successForPostApplication(state, action) {
//       state.loading = false;
//       state.error = null;
//       state.message = action.payload;
//     },
//     failureForPostApplication(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//       state.message = null;
//     },
//     requestForDeleteApplication(state) {
//       state.loading = true;
//       state.error = null;
//       state.message = null;
//     },
//     successForDeleteApplication(state, action) {
//       state.loading = false;
//       state.error = null;
//       state.message = action.payload;
//     },
//     failureForDeleteApplication(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//       state.message = null;
//     },
//     clearAllErrors(state) {
//       state.error = null;
//     },
//     resetApplicationSlice(state) {
//       state.error = null;
//       state.applications = state.applications;
//       state.message = null;
//       state.loading = false;
//     },
//   },
// });

// export const fetchEmployerApplications = () => async (dispatch) => {
//   dispatch(applicationSlice.actions.requestForAllApplications());
//   try {
//     const response = await axios.get(
//       `https://job-portal-2-q1nq.onrender.com/api/v1/application/employer/getall`,
//       {
//         withCredentials: true,
//       }
//     );
//     if (response && response.data && response.data.applications) {
//       dispatch(
//         applicationSlice.actions.successForAllApplications(response.data.applications)
//       );
//     } else {
//       dispatch(
//         applicationSlice.actions.failureForAllApplications("No applications found.")
//       );
//     }
//     dispatch(applicationSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(
//       applicationSlice.actions.failureForAllApplications(
//         error.response?.data?.message || "Error fetching applications."
//       )
//     );
//   }
// };

// export const fetchJobSeekerApplications = () => async (dispatch) => {
//   dispatch(applicationSlice.actions.requestForMyApplications());
//   try {
//     const response = await axios.get(
//       `https://job-portal-2-q1nq.onrender.com/api/v1/application/jobseeker/getall`,
//       {
//         withCredentials: true,
//       }
//     );
//     if (response && response.data && response.data.applications) {
//       dispatch(
//         applicationSlice.actions.successForMyApplications(response.data.applications)
//       );
//     } else {
//       dispatch(
//         applicationSlice.actions.failureForMyApplications("No applications found.")
//       );
//     }
//     dispatch(applicationSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(
//       applicationSlice.actions.failureForMyApplications(
//         error.response?.data?.message || "Error fetching applications."
//       )
//     );
//   }
// };

// export const postApplication = (data, jobId) => async (dispatch) => {
//   dispatch(applicationSlice.actions.requestForPostApplication());
//   try {
//     const response = await axios.post(
//       `https://job-portal-2-q1nq.onrender.com/api/v1/application/post/${jobId}`,
//       data,
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     if (response && response.data && response.data.message) {
//       dispatch(
//         applicationSlice.actions.successForPostApplication(response.data.message)
//       );
//     } else {
//       dispatch(
//         applicationSlice.actions.failureForPostApplication("Failed to post application.")
//       );
//     }
//     dispatch(applicationSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(
//       applicationSlice.actions.failureForPostApplication(
//         error.response?.data?.message || "Error posting application."
//       )
//     );
//   }
// };

// export const deleteApplication = (id) => async (dispatch) => {
//   dispatch(applicationSlice.actions.requestForDeleteApplication());
//   try {
//     const response = await axios.delete(
//       `https://job-portal-2-q1nq.onrender.com/api/v1/application/delete/${id}`,
//       { withCredentials: true }
//     );
//     if (response && response.data && response.data.message) {
//       dispatch(
//         applicationSlice.actions.successForDeleteApplication(response.data.message)
//       );
//     } else {
//       dispatch(
//         applicationSlice.actions.failureForDeleteApplication("Failed to delete application.")
//       );
//     }
//     dispatch(applicationSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(
//       applicationSlice.actions.failureForDeleteApplication(
//         error.response?.data?.message || "Error deleting application."
//       )
//     );
//   }
// };

// export const clearAllApplicationErrors = () => (dispatch) => {
//   dispatch(applicationSlice.actions.clearAllErrors());
// };

// export const resetApplicationSlice = () => (dispatch) => {
//   dispatch(applicationSlice.actions.resetApplicationSlice());
// };

// export default applicationSlice.reducer;






//==================================

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const applicationSlice = createSlice({
  name: "applications",
  initialState: {
    applications: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    requestForAllApplications(state) {
      state.loading = true;
      state.error = null;
    },
    successForAllApplications(state, action) {
      state.loading = false;
      state.error = null;
      state.applications = action.payload;
    },
    failureForAllApplications(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestForMyApplications(state) {
      state.loading = true;
      state.error = null;
    },
    successForMyApplications(state, action) {
      state.loading = false;
      state.error = null;
      state.applications = action.payload;
    },
    failureForMyApplications(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestForPostApplication(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    successForPostApplication(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    failureForPostApplication(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    requestForDeleteApplication(state) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    successForDeleteApplication(state, action) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    failureForDeleteApplication(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = null;
    },
    clearAllErrors(state) {
      state.error = null;
    },
    resetApplicationSlice(state) {
      state.loading = false;
      state.error = null;
      state.message = null;
    },
  },
});

export const fetchEmployerApplications = () => async (dispatch) => {
  dispatch(applicationSlice.actions.requestForAllApplications());
  try {
    const response = await axios.get(
      "https://job-portal-12-y1t4.onrender.com/api/v1/application/employer/getall",
      { withCredentials: true }
    );
    if (response?.data?.applications) {
      dispatch(applicationSlice.actions.successForAllApplications(response.data.applications));
    } else {
      dispatch(applicationSlice.actions.failureForAllApplications("No applications found."));
    }
  } catch (error) {
    dispatch(applicationSlice.actions.failureForAllApplications(
      error.response?.data?.message || "Error fetching applications."
    ));
  }
};

export const fetchJobSeekerApplications = () => async (dispatch) => {
  dispatch(applicationSlice.actions.requestForMyApplications());
  try {
    const response = await axios.get(
      "https://job-portal-12-y1t4.onrender.com/api/v1/application/jobseeker/getall",
      { withCredentials: true }
    );
    if (response?.data?.applications) {
      dispatch(applicationSlice.actions.successForMyApplications(response.data.applications));
    } else {
      dispatch(applicationSlice.actions.failureForMyApplications("No applications found."));
    }
  } catch (error) {
    dispatch(applicationSlice.actions.failureForMyApplications(
      error.response?.data?.message || "Error fetching applications."
    ));
  }
};

export const postApplication = (data, jobId) => async (dispatch) => {
  dispatch(applicationSlice.actions.requestForPostApplication());
  try {
    const response = await axios.post(
      `https://job-portal-12-y1t4.onrender.com/api/v1/application/post/${jobId}`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response?.data?.message) {
      dispatch(applicationSlice.actions.successForPostApplication(response.data.message));
    } else {
      dispatch(applicationSlice.actions.failureForPostApplication("Failed to post application."));
    }
  } catch (error) {
    dispatch(applicationSlice.actions.failureForPostApplication(
      error.response?.data?.message || "Error posting application."
    ));
  }
};

export const deleteApplication = (id) => async (dispatch) => {
  dispatch(applicationSlice.actions.requestForDeleteApplication());
  try {
    const response = await axios.delete(
      `https://job-portal-12-y1t4.onrender.com/api/v1/application/delete/${id}`,
      { withCredentials: true }
    );
    if (response?.data?.message) {
      dispatch(applicationSlice.actions.successForDeleteApplication(response.data.message));
    } else {
      dispatch(applicationSlice.actions.failureForDeleteApplication("Failed to delete application."));
    }
  } catch (error) {
    dispatch(applicationSlice.actions.failureForDeleteApplication(
      error.response?.data?.message || "Error deleting application."
    ));
  }
};

export const clearAllApplicationErrors = () => (dispatch) => {
  dispatch(applicationSlice.actions.clearAllErrors());
};

export const resetApplicationSlice = () => (dispatch) => {
  dispatch(applicationSlice.actions.resetApplicationSlice());
};

export default applicationSlice.reducer;
