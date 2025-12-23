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
      {/* CONTAINER */}
      <div
        className="
          w-full max-w-6xl
          flex flex-col gap-6
          lg:flex-row lg:items-start
        "
      >
        {/* LEFT - CCTV */}
        <div className="flex-1 max-w-lg mx-auto lg:mx-0">
          <Card>
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
        </div>

        {/* RIGHT - INFO */}
        <div className="w-full lg:w-96">
          <InfoSourceCard />
        </div>
      </div>
    </div>
  )
}
