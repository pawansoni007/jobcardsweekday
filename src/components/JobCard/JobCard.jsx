import { Paper } from "@mui/material";

import CompanyInfo from "./CompanyInfo";
import Salary from "./Salary";
import JobDescription from "./JobDescription";
import ExperienceRequired from "./ExperienceRequired";
import Apply from "./Apply";

function JobCard({
  jdLink,
  logoUrl,
  jobRole,
  location,
  companyName,
  maxJdSalary,
  minJdSalary,
  salaryCurrencyCode,
  minExp,
  maxExp,
  jobDetailsFromCompany,
}) {
  return (
    <Paper elevation={2} sx={{ p: 2, borderRadius: 3 }}>
      <CompanyInfo
        logoUrl={logoUrl}
        companyName={companyName}
        jobRole={jobRole}
        location={location}
      />
      <Salary
        minSalary={minJdSalary}
        maxSalary={maxJdSalary}
        salaryCurrencyCode={salaryCurrencyCode}
      />
      <JobDescription description={jobDetailsFromCompany} />
      <ExperienceRequired minExp={minExp} maxExp={maxExp} />
      <Apply jdLink={jdLink} />
    </Paper>
  );
}

export default JobCard;
