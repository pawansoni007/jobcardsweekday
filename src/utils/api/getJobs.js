const JOBS_API = "https://api.weekday.technology/adhoc/getSampleJdJSON";

export async function getJobs({ offset, limit }) {
  const body = JSON.stringify({ limit, offset });

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    body,
    method: "POST",
  };

  const response = await fetch(JOBS_API, requestOptions);
  return await response.json();
}
