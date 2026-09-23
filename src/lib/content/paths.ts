import path from 'node:path'
import process from 'node:process'

export const contentDir = path.join(process.cwd(), 'src', 'content')

export function contentFilePath(...segments: readonly string[]): string {
  return path.join(contentDir, ...segments)
}
