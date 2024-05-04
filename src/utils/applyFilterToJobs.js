const isASearchMatch = (jobKey, filterKey, filters, job) => {
  if (filters[filterKey]) {
    if (job[jobKey] === null || job[jobKey] === undefined) {
      return false;
    }

    return job[jobKey]
      .toLowerCase()
      .startsWith(filters[filterKey].toLowerCase());
  }

  return true;
};

const isASingleValueFilterMatch = (jobKey, filterKey, filters, job) => {
  if (filters[filterKey]) {
    if (job[jobKey] === null || job[jobKey] === undefined) {
      return false;
    }

    if (filters[filterKey].value.charAt(0) !== "~") {
      return (
        String(job[jobKey]).toLowerCase() ===
        filters[filterKey].value.toLowerCase()
      );
    }

    return (
      String(job[jobKey]).toLowerCase() !==
      filters[filterKey].value.slice(1).toLowerCase()
    );
  }

  return true;
};

export function applyFilterToJobs(jobs, filters) {
  return jobs
    .filter((job) => {
      if (filters["roles"].length > 0) {
        if (job.jobRole === null || job.jobRole === undefined) {
          return false;
        }

        const roles = filters["roles"].map(({ value }) => value);

        return roles.includes(job.jobRole);
      }

      return true;
    })
    .filter((job) => {
      if (filters["minExperience"]) {
        if (job.minExp === null || job.minExp === undefined) {
          return false;
        }

        return job.minExp >= filters["minExperience"].value;
      }
      return true;
    })
    .filter((job) => {
      if (filters["minBasePay"]) {
        if (typeof job.maxJdSalary === "number") {
          return filters["minBasePay"].value <= job.maxJdSalary;
        }

        if (typeof job.minJdSalary === "number") {
          return job.minJdSalary >= filters["minBasePay"].value;
        }

        return false;
      }

      return true;
    })
    .filter((job) =>
      isASingleValueFilterMatch("location", "remoteOrOnSite", filters, job)
    )
    .filter((job) => isASearchMatch("companyName", "companyName", filters, job))
    .filter((job) => isASearchMatch("location", "location", filters, job));
}
