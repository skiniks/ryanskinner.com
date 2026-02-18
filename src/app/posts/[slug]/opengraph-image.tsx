import type { PageProps } from 'rari'
import { ImageResponse } from 'rari/og'
import RyanSkinner from '@/components/icons/RyanSkinner'
import { getPostBySlug } from '@/lib/posts'

export default async function Image({ params }: PageProps) {
  const slug = params?.slug
  const post = typeof slug === 'string' ? await getPostBySlug(slug) : null

  const title = post?.title ?? 'Ryan Skinner'
  const tags = post?.tags ?? []

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#0d1117',
        padding: '60px',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex' }}>
        <RyanSkinner width={240} height={79} />
      </div>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tags.map(tag => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  background: '#1d4ed8',
                  borderRadius: '9999px',
                  padding: '4px 16px',
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
          {title}
        </div>
      </div>
    </div>,
  )
}
