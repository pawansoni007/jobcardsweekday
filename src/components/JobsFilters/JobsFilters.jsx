import { Stack } from "@mui/material";

import CompanyNameSearch from "./ComapanyNameSearch";
import LocationSearch from "./LocationSearch";

export default function JobsFilters() {
  return (
    <Stack direction="row" gap={2} alignItems="end" flexWrap="wrap">
      <CompanyNameSearch />
      <LocationSearch />
    </Stack>
  );
}
