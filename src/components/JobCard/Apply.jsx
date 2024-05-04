import { Button, Link } from "@mui/material";

export default function Apply({ jdLink }) {
  return (
    <Button
      fullWidth
      sx={{
        mt: 1,
        bgcolor: "#54efc3",
        color: "#000",
        textTransform: "capitalize",
        borderRadius: 2,
        ":hover": {
          bgcolor: "#26ce9f",
          color: "#333",
        },
      }}
      variant="contained"
      disableElevation
      LinkComponent={Link}
      href={jdLink}
    >
      ⚡️ Easy Apply
    </Button>
  );
}
