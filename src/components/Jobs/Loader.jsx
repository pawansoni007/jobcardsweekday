import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <CircularProgress sx={{ mt: 3 }} color="secondary" />
    </div>
  );
}
