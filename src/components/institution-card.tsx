import { auth } from "@/lib/db/auth";
import { InstitutionService } from "@/modules/institution/service/InstitutionService";
import { ExternalLink, Volleyball } from "lucide-react";
import Link from "next/link";

export default async function InstitutionCard() {
    const institutionService = new InstitutionService();
    const session = await auth();

    const institution = await institutionService.getById(session?.user?.institutionId);
    
    return (
        <div className="h-24 w-full p-4 flex flex-row items-center justify-between rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-300">
            <div className="h-full flex flex-col gap-1 items-start justify-start">
                <span className="text-sm font-semibold text-white">
                    {institution?.businessName}
                </span>
                <span className="text-sm text-white">
                    {institution?.cnpj.replace(
                    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
                    "$1.$2.$3/$4-$5"
                    )}
                </span>
            </div>
            <div className="h-full flex flex-col items-end justify-end">
                <Link
                    target="_blank"
                    href="https://instagram.com/biolink.eco"
                    className="group h-7 px-2 flex items-center justify-center bg-white rounded-[8px]"
                >
                    <div className="flex flex-row items-center justify-center gap-2">
                        <Volleyball size={16} className="text-sky-400" />
                        <div className="flex flex-row items-center justify-center gap-1">
                            <span className="text-xs group-hover:underline">
                            Conheça as atividades que promovemos
                            </span>
                            <ExternalLink size={12} strokeWidth={2.5} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}