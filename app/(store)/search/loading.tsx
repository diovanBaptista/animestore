'use client'

import { Skaleton } from "@/app/components/skaleton"
import { useSearchParams } from "next/navigation"

export default async function SearchLoding() {
    const searchParams = useSearchParams()

    const query = searchParams.get('q')

    await new Promise(resolve => setTimeout(resolve, 2000)) // 👈 teste

    return(
        <div className=" flex flex-col gap-4">
            <p className="text-sm">Resultados para: <span className="font-semibold">{query}</span>
            </p>

            <div className="grid grid-cols-3 gap-6">
                <Skaleton className="h-[380px]" />
                <Skaleton className="h-[380px]" />
                <Skaleton className="h-[380px]" />
                <Skaleton className="h-[380px]" />
                <Skaleton className="h-[380px]" />
                <Skaleton className="h-[380px]" />
            </div>
        </div>
    )
}