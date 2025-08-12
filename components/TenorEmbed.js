'use client'

import { useEffect, useState } from 'react'

export default function TenorEmbed({ postId, aspectRatio = "0.75", width = "200px" }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)

  useEffect(() => {
    // Tenor 스크립트 로드
    const script = document.createElement('script')
    script.src = 'https://tenor.com/embed.js'
    script.async = true
    script.onload = () => setIsLoaded(true)
    document.head.appendChild(script)

    // 사용자 상호작용으로 오디오 활성화
    const enableAudio = () => {
      setAudioEnabled(true)
      document.removeEventListener('click', enableAudio)
      document.removeEventListener('keydown', enableAudio)
    }

    document.addEventListener('click', enableAudio)
    document.addEventListener('keydown', enableAudio)

    return () => {
      // 정리
      const existingScript = document.querySelector('script[src="https://tenor.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
      document.removeEventListener('click', enableAudio)
      document.removeEventListener('keydown', enableAudio)
    }
  }, [])

  const playAudio = () => {
    if (audioEnabled) {
      const audio = new Audio('/mikudayo_notification.mp3')
      audio.play().catch(e => console.log('Audio play failed:', e))
    }
  }

  return (
    <div
      className="tenor-gif-embed"
      data-postid={postId}
      data-share-method="host"
      data-aspect-ratio={aspectRatio}
      data-width={width}
      style={{ marginBottom: "20px" }}
      onMouseEnter={playAudio}
    >
      <a href={`https://tenor.com/view/gif-${postId}`}>
        Loading GIF...
      </a>
    </div>
  )
}