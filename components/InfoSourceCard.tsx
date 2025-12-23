import { Card, CardContent, CardHeader,  CardDescription, CardTitle } from "@/components/ui/card"
import { Github, MapPin, Video } from "lucide-react"
import { Button } from "@/components/ui/button"


export function InfoSourceCard() {
  return (
<div className="mt-10 w-full max-w-lg space-y-4">
  <Button
    className="w-full flex items-center gap-2"
    asChild
  >
    <a
      href="https://github.com/akmalirsyad"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-4 h-4" />
      Lihat di GitHub
    </a>
  </Button>

  {/* Sumber Informasi */}
  <Card>
    <CardHeader>
      <CardTitle className="text-base">Sumber Data</CardTitle>
      <CardDescription>
        Informasi asal streaming dan lokasi CCTV
      </CardDescription>
    </CardHeader>

    <CardContent className="text-sm text-muted-foreground space-y-2">
      <p>
        🎥 <strong>Streaming CCTV</strong> berasal dari portal resmi
        Pemerintah Kota Bekasi:
        <br />
        <a
          href="https://bekasikota.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          bekasikota.go.id
        </a>
      </p>

      <p>
        🗺️ <strong>Lokasi CCTV</strong> menggunakan embed
        Google Street View untuk membantu visualisasi area sekitar.
      </p>

      <p className="text-xs text-muted-foreground">
        Data ditampilkan untuk tujuan informasi publik.
      </p>
    </CardContent>
  </Card>
</div>

  )
}
