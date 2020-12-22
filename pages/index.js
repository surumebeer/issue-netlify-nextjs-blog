import { fetchGitHubIssues } from "./../lib/api.js";

function HomePage({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((x, i) => (
          <li key={i}>{x.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await fetchGitHubIssues();
  return {
    props: {
      posts: posts,
    },
  };
}

export default HomePage;
