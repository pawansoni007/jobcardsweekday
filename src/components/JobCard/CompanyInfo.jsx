import { Stack, Typography } from "@mui/material";
import { capitalizeSentence } from "../../utils";

export default function CompanyInfo({
  logoUrl,
  companyName,
  jobRole,
  location,
}) {
  return (
    <Stack direction="row" gap={1}>
      <img
        height={48}
        width={48}
        src={logoUrl}
        alt={capitalizeSentence(companyName)}
      />
      <Stack>
        <Typography sx={{ color: "#8b8b8b" }} fontWeight={500}>
          {capitalizeSentence(companyName)}
        </Typography>
        <Typography fontSize={20}>{capitalizeSentence(jobRole)}</Typography>
        <Typography variant="h5" fontSize={14}>{capitalizeSentence(location)}</Typography>
      </Stack>
    </Stack>
  );
}
