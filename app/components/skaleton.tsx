import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Skaleton({className, ...props}: ComponentProps<'div'> ) {
    return (
        <div className={twMerge("bg-zinc-58/10 animate-pulse rounded-md", className)} {...props}>

        </div>
    )
}