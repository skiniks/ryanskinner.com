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
        <RyanSkinner width={480} height={157} />
      </div>
    </div>,
  )
}
