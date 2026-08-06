import process from 'node:process'

interface GitHubCommit {
  sha: string
}

const GITHUB_REPO = 'skiniks/ryanskinner.com'
const GITHUB_API_BASE = 'https://api.github.com'

function getHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN
  return {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'skiniks/ryanskinner.com',
    ...(token !== undefined && token !== ''
      ? { Authorization: `Bearer ${token}` }
      : {}),
  }
}

function isGitHubCommit(value: unknown): value is GitHubCommit {
  return typeof value === 'object'
    && value !== null
    && 'sha' in value
    && typeof value.sha === 'string'
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

    const data: unknown = await response.json()
    if (!Array.isArray(data) || data.length === 0)
      return null

    const commit: unknown = data[0]
    if (!isGitHubCommit(commit))
      return null

    return commit.sha.substring(0, 8)
  }
  catch (error) {
    console.error('Error fetching latest commit:', error)
    return null
  }
}
