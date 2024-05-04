import { Typography } from "@mui/material";

export default function ExperienceRequired({ minExp, maxExp }) {
  return (
    <>
      {typeof minExp === "number" && (
        <>
          <Typography sx={{ color: "#8b8b8b" }}>Minimum Experience</Typography>
          <Typography>{minExp} years</Typography>
        </>
      )}
      {typeof maxExp === "number" && (
        <>
          <Typography sx={{ color: "#8b8b8b" }}>Maximum Experience</Typography>
          <Typography>{maxExp} years</Typography>
        </>
      )}
    </>
  );
}
