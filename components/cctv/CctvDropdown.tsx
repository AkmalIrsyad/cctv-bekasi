"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CctvItem } from "@/types/cctv"

type Props = {
  list: CctvItem[]
  selected?: CctvItem | null
  onChange: (cctv: CctvItem) => void
}

export function CctvDropdown({ list, selected, onChange }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="noShadow" className="w-full">
          {selected?.label || "Pilih CCTV"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 max-h-72 overflow-y-auto" align="start">
        <DropdownMenuLabel inset>Daftar CCTV</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup
            value={selected?.id}
            onValueChange={(id) => {
              const cctv = list.find((item) => item.id === id)
              if (cctv) onChange(cctv)
            }}
          >
            {list.map((item) => (
              <DropdownMenuRadioItem key={item.id} value={item.id}>
                {item.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
