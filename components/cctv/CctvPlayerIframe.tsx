type Props = {
  url: string
}

export function CctvPlayerIframe({ url }: Props) {
  return (
    <iframe
      src={`https://www.m3u8player.online/embed/m3u8?url=${encodeURIComponent(
        url
      )}`}
      className="w-full aspect-video rounded-lg rounded-lg border"
      allowFullScreen
      loading="lazy"
    />
  )
}
