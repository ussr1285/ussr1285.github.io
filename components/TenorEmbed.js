'use client'

import { useEffect, useState } from 'react'

export default function TenorEmbed({ postId, aspectRatio = "0.75", width = "200px" }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Tenor 스크립트 로드
    const script = document.createElement('script')
    script.src = 'https://tenor.com/embed.js'
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.head.appendChild(script)

    return () => {
      // 정리
      const existingScript = document.querySelector('script[src="https://tenor.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div
      className="tenor-gif-embed"
      data-postid={postId}
      data-share-method="host"
      data-aspect-ratio={aspectRatio}
      data-width={width}
      style={{ marginBottom: "20px" }}
    >
      <a href={`https://tenor.com/view/gif-${postId}`}>
        Loading GIF...
      </a>
    </div>
  )
}