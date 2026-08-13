import { ImageResponse } from 'rari/og'
import RyanSkinner from '@/components/icons/RyanSkinner'

const OG_BACKGROUND = '#0d1117'
const OG_PADDING = '60px'

interface BaseOGImageProps {
  readonly title?: string
  readonly subtitle?: string
  readonly tags?: readonly string[]
  readonly logoSize?: 'small' | 'large'
}

function hasText(value: string | undefined): value is string {
  return value !== undefined && value !== ''
}

export function generateOGImage({
  title,
  subtitle,
  tags = [],
  logoSize = 'small',
}: BaseOGImageProps = {}) {
  const logoWidth = logoSize === 'large' ? 480 : 240
  const logoHeight = logoSize === 'large' ? 157 : 79
  const hasSubtitle = hasText(subtitle)
  const hasTitle = hasText(title)

  if (!hasTitle && !hasSubtitle && tags.length === 0) {
    return new ImageResponse(
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: OG_BACKGROUND,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <RyanSkinner width={logoWidth} height={logoHeight} />
        </div>
      </div>,
    )
  }

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: OG_BACKGROUND,
        padding: OG_PADDING,
        flexDirection: 'column',
        justifyContent: hasSubtitle ? 'space-between' : 'flex-start',
      }}
    >
      <div style={{ display: 'flex' }}>
        <RyanSkinner width={logoWidth} height={logoHeight} />
      </div>

      <div
        style={{
          display: 'flex',
          flex: hasSubtitle ? 0 : 1,
          flexDirection: 'column',
          justifyContent: hasSubtitle ? 'flex-start' : 'center',
          gap: '20px',
          marginTop: hasSubtitle ? '0' : '40px',
        }}
      >
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
                  color: '#ffffff',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {hasTitle && (
          <div
            style={{
              display: 'flex',
              fontSize: hasSubtitle ? 64 : 56,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: hasSubtitle ? 1.1 : 1.2,
            }}
          >
            {title}
          </div>
        )}

        {hasSubtitle && (
          <div style={{ display: 'flex', fontSize: 28, color: '#8b949e' }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>,
  )
}
