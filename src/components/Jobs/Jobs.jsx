import { Box, Container, Typography } from "@mui/material";
import JobCard from "../JobCard";
import { useJobs } from "../../hooks/useJobs";
import Loader from "./Loader";

export default function Jobs() {
  const { jobs, isLoading, totalCount } = useJobs();

  return (
    <Container maxWidth="lg" sx={{ mx: "auto", py: 3 }}>
      {totalCount === 0 ? (
        <Typography>Sorry, no jobs found!</Typography>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))"
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
    </Container>
  );
}
