"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { CCTV_LIST } from "@/data/cctv"
import { CctvItem } from "@/types/cctv"
import { CctvDropdown } from "@/components/cctv/CctvDropdown"
import { CctvCard } from "@/components/cctv/CctvCard"
import { InfoSourceCard } from "@/components/InfoSourceCard"

export default function Home() {
  const [selected, setSelected] = React.useState<CctvItem | null>(null)

  return (
   <div className="min-h-screen flex items-start justify-center px-4 py-8">
  <div
    className="
      w-full max-w-6xl
      grid grid-cols-1 gap-6
      lg:grid-cols-[1fr_380px]
    "
  >
    {/* LEFT */}
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>CCTV Kota Bekasi</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <CctvDropdown
          list={CCTV_LIST}
          selected={selected}
          onChange={setSelected}
        />

        {selected && <CctvCard cctv={selected} />}
      </CardContent>
    </Card>

    {/* RIGHT */}
    <div className="h-fit">
      <InfoSourceCard />
    </div>
  </div>
</div>

  )
}
