"use client";
import Logo1 from "./logos/logo-1";
import Logo2 from "./logos/logo-2";
import Logo3 from "./logos/logo-3";

export function PartnersCarousel() {
  return (
    <div className="w-full max-w-5xl bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-hidden">
            <div className="logos-slide flex items-center gap-16 whitespace-nowrap">
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo1 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo2 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo3 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo1 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo2 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo3 className="text-zinc-400 w-32 h-8" />
              </div>

              {/* Duplicate logos for seamless loop */}
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo1 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo2 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo3 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo1 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo2 className="text-zinc-400 w-32 h-8" />
              </div>
              <div className="w-32 h-8 relative flex-shrink-0">
                <Logo3 className="text-zinc-400 w-32 h-8" />
              </div>
            </div>
          </div>

          <style jsx>{`
            .logos-slide {
              animation: slide 30s linear infinite;
            }

            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% / 2));
              }
            }
          `}</style>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 font-light">
            Confiado por empresas responsáveis no Brasil.
          </p>
        </div>
      </div>
    </div>
  );
}
