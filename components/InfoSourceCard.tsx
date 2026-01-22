import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Github, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function InfoSourceCard() {
  return (
    <div className="space-y-4">
      {/* GitHub */}
      <Button className="w-full flex items-center gap-2" asChild>
        <a
          href="https://github.com/AkmalIrsyad/cctv-bekasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          Lihat di GitHub
        </a>
      </Button>

      {/* Sumber Data */}
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
            🗺️ <strong>Lokasi CCTV</strong> menggunakan embed Google Street
            View untuk membantu visualisasi area sekitar.
          </p>

          <p className="text-xs">
            Data ditampilkan untuk tujuan informasi publik.
          </p>
        </CardContent>
      </Card>

      {/* TECH STACK */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Tech Stack
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2">
          <Badge>Next.js (App Router)</Badge>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>shadcn/ui</Badge>
          <Badge>HLS / m3u8 online</Badge>
          <Badge>Google Maps Embed</Badge>
          <Badge>Vercel</Badge>
        </CardContent>
      </Card>
    </div>
  )
}
