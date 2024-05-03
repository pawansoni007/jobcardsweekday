import { Box, Button, Link, Typography } from "@mui/material";
import { useState } from "react";

const COLLAPSED_DESCRIPTION_SIZE = 512;
const TILL_END = -1;

export default function JobDescription({ description }) {
  const [expandDescription, setExpandDescription] = useState(false);

  return (
    <Box position="relative">
      <Typography mt={2} fontWeight={500}>
        About Company:
      </Typography>
      <Typography variant="h6" fontWeight={600} fontSize={16} lineHeight={1}>
        About us
      </Typography>
      <Typography
        paragraph
        pb={!expandDescription ? 3.5 : 0}
        sx={{
          background: "linear-gradient(0, #fff, transparent)",
        }}
      >
        {description.slice(
          0,
          expandDescription ? TILL_END : COLLAPSED_DESCRIPTION_SIZE
        )}
      </Typography>

      {!expandDescription && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: 0,
            background: "linear-gradient(0, #fff 24%, transparent)",
            paddingTop: "36px",
          }}
        >
          <Button
            disableFocusRipple
            disableRipple
            disableTouchRipple
            LinkComponent={Link}
            sx={{
              textTransform: "capitalize",
              color: "#0700bb",
              fontWeight: 400,
            }}
            onClick={() => setExpandDescription(true)}
          >
            View Job
          </Button>
        </div>
      )}
    </Box>
  );
}
