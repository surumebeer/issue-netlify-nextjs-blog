export const fetchGitHubIssues = async () => {
  const URL = `${process.env.GITHUB_ISSUE_API_URL}?${new URLSearchParams({
    access_token: process.env.GITHUB_ACCESS_TOKEN,
  })}`;
  const res = await fetch(URL);
  const json = await res.json();
  return json;
};
