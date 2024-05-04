const initialState = {
  jobList: [],
  totalCount: 0,
  isLoading: false,
  error: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_JOBS_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_JOBS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        jobList: [...state.jobList, ...action.payload.jobs],
        totalCount: action.payload.totalCount,
        error: null,
      };
    case "FETCH_JOBS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
