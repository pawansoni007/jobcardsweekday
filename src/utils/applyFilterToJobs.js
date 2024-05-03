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

export function applyFilterToJobs(jobs, filters) {
  return jobs
    .filter((job) => isASearchMatch("companyName", "companyName", filters, job))
    .filter((job) => isASearchMatch("location", "location", filters, job));
}
