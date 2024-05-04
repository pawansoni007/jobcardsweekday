import { Box, Typography } from "@mui/material";
import JobCard from "../JobCard";
import { useJobs } from "../../hooks/useJobs";
import Loader from "./Loader";

export default function Jobs() {
  const { jobs, isLoading, totalCount } = useJobs();

  return (
    <>
      {totalCount === 0 ? (
        <Typography sx={{ mt: 4 }}>Sorry, no jobs found!</Typography>
      ) : (
        <Box
          mt={4}
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(360px, 1fr))"
          alignItems="start"
          gap={3}
          boxSizing="border-box"
        >
          {jobs.map(({ jdUid, ...job }) => (
            <JobCard key={jdUid} {...job} />
          ))}
        </Box>
      )}

      {isLoading && <Loader />}
    </>
  );
}
