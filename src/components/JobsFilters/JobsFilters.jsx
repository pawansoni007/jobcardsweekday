import { Stack } from "@mui/material";

import CompanyNameSearch from "./ComapanyNameSearch";
import LocationSearch from "./LocationSearch";
import RemoteFilter from "./RemoteFilter";
import ExperienceFilter from "./ExperienceFilter";
import MinBasePayFilter from "./MinBasePayFilter";
import RolesFilter from "./RolesFilter";

export default function JobsFilters() {
  return (
    <Stack direction="row" gap={2} alignItems="end" flexWrap="wrap">
      <RolesFilter />
      <ExperienceFilter />
      <RemoteFilter />
      <MinBasePayFilter />
      <CompanyNameSearch />
      <LocationSearch />
    </Stack>
  );
}
