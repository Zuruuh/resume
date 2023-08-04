import { z } from 'astro:content';

const repoSchema = z.object({
  stargazers_count: z.number(),
});

export async function getGithubStars(repository: string): Promise<number> {
  const token = `Bearer ${process.env.GITHUB_TOKEN}`;
  const json = await (
    await fetch(`https://api.github.com/repos/${repository}`, {
      headers: { Authorization: token },
    })
  ).json();

  return repoSchema.parse(json).stargazers_count;
}
