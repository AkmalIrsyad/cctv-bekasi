import { CctvItem } from "@/types/cctv"
import { CctvPlayer } from "./CctvPlayer"

type Props = {
  cctv: CctvItem
}

export function CctvCard({ cctv }: Props) {
  return (
    <div className="space-y-4">
      {/* VIDEO */}
      <CctvPlayer url={cctv.streamUrl} />

      {/* GOOGLE MAPS IFRAME */}
      <iframe
        src={cctv.mapEmbedUrl}
        width="100%"
        height="260"
        className="rounded-lg border"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <p className="text-xs text-center text-muted-foreground">
        {cctv.label}
      </p>
    </div>
  )
}
