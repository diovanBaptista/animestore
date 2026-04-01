import { Skaleton } from "@/app/components/skaleton";

export default function LoadingHome() {
    return (
        <div className="grid max-h-full grid-cols-9 grid-rows-6 gap-6">
            <Skaleton className=" col-span-6 row-span-6 h-[760px]" />
            <Skaleton className=" col-span-3 row-span-3" />
            <Skaleton className=" col-span-3 row-span-3" />
        </div>
    )
}