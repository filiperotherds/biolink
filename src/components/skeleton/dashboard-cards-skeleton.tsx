import { Skeleton } from "@/components/ui/skeleton";

export function DashboardCardsSkeleton() {
  return (
    <div className="w-full flex flex-row items-center gap-2">
        <Skeleton className="flex-1 h-60 rounded-2xl"/>
        <Skeleton className="flex-1 h-60 rounded-2xl"/>
    </div>
  );
}
