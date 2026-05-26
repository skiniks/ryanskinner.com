import { ImageResponse } from 'rari/og'
import RyanSkinner from '@/components/icons/RyanSkinner'

const OG_BACKGROUND = '#0d1117'
const OG_PADDING = '60px'

interface BaseOGImageProps {
  title?: string
  subtitle?: string
  tags?: string[]
  logoSize?: 'small' | 'large'
}

export function generateOGImage({
  title,
  subtitle,
  tags = [],
  logoSize = 'small',
}: BaseOGImageProps = {}) {
  const logoWidth = logoSize === 'large' ? 480 : 240
  const logoHeight = logoSize === 'large' ? 157 : 79

  if (!title && !subtitle && tags.length === 0) {
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
        justifyContent: subtitle ? 'space-between' : 'flex-start',
      }}
    >
      <div style={{ display: 'flex' }}>
        <RyanSkinner width={logoWidth} height={logoHeight} />
      </div>

      <div
        style={{
          display: 'flex',
          flex: subtitle ? 0 : 1,
          flexDirection: 'column',
          justifyContent: subtitle ? 'flex-start' : 'center',
          gap: '20px',
          marginTop: subtitle ? '0' : '40px',
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
                  color: '#fff',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        {title && (
          <div
            style={{
              display: 'flex',
              fontSize: subtitle ? 64 : 56,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: subtitle ? 1.1 : 1.2,
            }}
          >
            {title}
          </div>
        )}

        {subtitle && (
          <div style={{ display: 'flex', fontSize: 28, color: '#8b949e' }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>,
  )
}
