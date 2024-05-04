import { Stack } from "@mui/material";

import CompanyNameSearch from "./ComapanyNameSearch";
import LocationSearch from "./LocationSearch";
import RemoteFilter from "./RemoteFilter";
import ExperienceFilter from "./ExperienceFilter";
import MinBasePayFilter from "./MinBasePayFilter";

export default function JobsFilters() {
  return (
    <Stack direction="row" gap={2} alignItems="end" flexWrap="wrap">
      <ExperienceFilter />
      <RemoteFilter />
      <MinBasePayFilter />
      <CompanyNameSearch />
      <LocationSearch />
    </Stack>
  );
}
