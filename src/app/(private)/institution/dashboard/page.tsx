import DashboardButtons from "@/components/dashboard-buttons";
import DashboardCards from "@/components/dashboard-cards";
import InstitutionCard from "@/components/institution-card";
import { DashboardCardsSkeleton } from "@/components/skeleton/dashboard-cards-skeleton";
import { InstitutionCardSkeleton } from "@/components/skeleton/institution-card-skeleton";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-16">
      <Suspense fallback={<InstitutionCardSkeleton />}>
        <InstitutionCard />
      </Suspense>

      <DashboardButtons />

      <Suspense fallback={<DashboardCardsSkeleton />}>
        <DashboardCards />
      </Suspense>
    </div>
  );
}
