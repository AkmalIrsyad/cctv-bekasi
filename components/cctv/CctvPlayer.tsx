"use client"

import * as React from "react"
import Hls from "hls.js"

type Props = {
  url: string
}

export function CctvPlayer({ url }: Props) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  React.useEffect(() => {
    if (!videoRef.current) return
    let hls: Hls | null = null
    const video = videoRef.current

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url
    } else if (Hls.isSupported()) {
      hls = new Hls()
      hls.loadSource(url)
      hls.attachMedia(video)
    }

    return () => hls?.destroy()
  }, [url])

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      muted
      className="w-full rounded-lg border"
    />
  )
}
