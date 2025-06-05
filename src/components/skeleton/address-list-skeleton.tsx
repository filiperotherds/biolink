
import { Skeleton } from "@/components/ui/skeleton"

export function AddressListSkeleton() {
  return (
    <div className="w-full flex flex-col gap-2">
        <Skeleton className="w-full h-20 rounded-2xl" />
        <Skeleton className="w-full h-20 rounded-2xl opacity-70" />
        <Skeleton className="w-full h-20 rounded-2xl opacity-40" />
    </div>
  )
}