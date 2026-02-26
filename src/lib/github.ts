import process from 'node:process'

interface GitHubCommit {
  sha: string
}

const GITHUB_REPO = 'skiniks/ryanskinner.com'
const GITHUB_API_BASE = 'https://api.github.com'

function getHeaders(): HeadersInit {
  return {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'skiniks/ryanskinner.com',
    ...(process.env.GITHUB_TOKEN && {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }),
  }
}

export async function getLatestCommitHash(): Promise<string | null> {
  try {
    const url = `${GITHUB_API_BASE}/repos/${GITHUB_REPO}/commits?per_page=1`
    const response = await fetch(url, {
      headers: getHeaders(),
      rari: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.warn(`Failed to fetch latest commit: ${response.status}`)
      return null
    }

    const commits: GitHubCommit[] = await response.json()
    if (commits.length === 0)
      return null

    return commits[0].sha?.substring(0, 8) ?? null
  }
  catch (error) {
    console.error('Error fetching latest commit:', error)
    return null
  }
}
