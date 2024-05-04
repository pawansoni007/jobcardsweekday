import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/thunks/jobsThunk";
import { applyFilterToJobs } from "../utils/applyFilterToJobs";

export function useJobs() {
  const LIMIT = 10;

  const { isLoading, jobList, totalCount } = useSelector((state) => state.jobs);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs(LIMIT, 0));
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (
        scrollTop + clientHeight >= scrollHeight &&
        !isLoading &&
        jobList.length < totalCount
      ) {
        dispatch(fetchJobs(LIMIT, jobList.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, jobList.length, dispatch, totalCount]);

  return {
    jobs: applyFilterToJobs(jobList, filters),
    isLoading,
  };
}
