import { getJobs } from "../../utils/api/getJobs";

const fetchJobsSuccess = (jobs, totalCount) => ({
  type: "FETCH_JOBS_SUCCESS",
  payload: { jobs, totalCount },
});

const fetchJobsFailure = (error) => ({
  type: "FETCH_JOBS_FAILURE",
  payload: error,
});

const fetchJobsRequest = () => ({
  type: "FETCH_JOBS_REQUEST",
});

export const fetchJobs = (limit, offset) => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());

    try {
      const data = await getJobs({ offset, limit });
      dispatch(fetchJobsSuccess(data.jdList, data.totalCount));
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};
