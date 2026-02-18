import { ImageResponse } from 'rari/og'
import RyanSkinner from '@/components/icons/RyanSkinner'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: '#0d1117',
        padding: '60px',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex' }}>
        <RyanSkinner width={240} height={79} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
          Posts
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#8b949e' }}>
          Thoughts on software engineering and performance
        </div>
      </div>
    </div>,
  )
}
