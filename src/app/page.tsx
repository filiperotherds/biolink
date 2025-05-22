import Link from "next/link";
import { InteractiveProductView } from "@/components/interactive-product-view";
import { PartnersCarousel } from "@/components/partners-carousel";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center relative overflow-hidden gap-20">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto px-4 pt-36 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Gestão inteligente de óleo usado, sem esforço e sem custo.
          </h1>
          <p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-8">
            Simplificamos o processo de coleta e reciclagem de óleo usado. Sua
            empresa em dia, sem complicações e sem custos.
          </p>
          <Link
            href="/cadastro"
            className="inline-flex h-[38px] items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Cadastre-se
          </Link>
        </section>

        {/* Partners Section */}
        <PartnersCarousel />

        <section className="flex justify-center w-full px-4">
          <div className="flex flex-row max-w-5xl w-full items-center justify-center gap-4">
            <div className="relative md:h-[400px] md:w-[300px] bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300">
              <svg
                opacity="0"
                className="object-cover rounded-2xl hover:opacity-100 transition duration-300"
                width="100%"
                height="100%"
                viewBox="0 0 260 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M190 10.1105L287 0.5V551.5H190V10.1105Z"
                  fill="#FFA900"
                ></path>
                <rect y="309.5" width="72" height="242" fill="#FFA900"></rect>
                <path
                  d="M12 174L242 93.5V551.5H33.7079L12 174Z"
                  fill="#FFA900"
                ></path>
                <path
                  d="M91.3757 345.607C94.4326 316.532 72.821 353.827 66.5766 359.591C66.6744 349.361 70.2219 339.822 71.6661 329.54C71.4521 329.774 71.4286 329.07 71.6094 328.451C73.7067 306.146 55.5882 335.822 52.852 342.965C52.8571 342.947 53.3076 341.612 53.3161 341.582C31.2979 381.303 52.5372 327.158 50.7712 312.8C48.0114 301.66 39.0231 319.691 36.7403 323.74C31.7817 332.292 13.1954 371.804 21.3158 339.578L21.2302 339.793L21.2235 339.686C19.9412 343.752 15.1863 361.553 23.3964 349.43C10.382 367.677 25.8305 321.339 26.8121 316.021C26.1187 322.416 23.5003 329.295 23.3121 331.581C41.6247 260.152 8.32378 331.528 -3.15113 344.753C-3.42866 340.861 -2.2046 336.52 -1.45501 332.791C-1.98174 333.871 -3.12206 341.129 -3.73261 342.354C-3.72327 338.625 1.46654 318.867 -0.581947 328.733C-0.457885 325.429 13.7951 290.239 0.489425 297.317C-9.28835 307.87 -13.5004 323.636 -23.888 333.64C-27.6163 327.225 -8.20945 290.969 -22.1535 295.019C-27.7263 298.074 -47.3766 333.181 -43.7036 312.264C-42.1393 303.197 -44.4527 311.487 -45.0251 315.266C-45.0595 314.841 -45.0769 314.422 -45.0925 313.996C-47.299 337.542 -24.8339 295.427 -19.3444 295.729C-19.8045 309.234 -37.4438 360.038 -12.0674 320.742C-12.162 320.968 -12.767 322.392 -12.8497 322.576C-9.19942 319.69 -2.36649 297.801 4.10625 299.033C4.95454 300.683 2.22361 313.34 3.286 305.572C-18.0291 379.053 3.4966 342.697 25.4581 304.882C28.5782 319.533 11.6245 341.427 18.0739 356.474C32.5546 349.034 35.4669 325.194 47.1207 313.346C48.9171 319.068 44.6492 329.85 43.4684 336.596L43.6763 336.143C36.233 364.657 39.9023 372.572 56.209 341.886C58.3648 338.768 71.6989 313.331 68.9071 329.746C59.4974 378.571 64.4338 364.369 88.6115 336.779C92.4748 337.752 87.4444 359.722 91.3626 345.61L91.3757 345.607Z"
                  fill="#101214"
                ></path>
              </svg>
            </div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300"></div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300"></div>
          </div>
        </section>

        {/* Interactive Product View */}
        <InteractiveProductView />
      </main>
    </>
  );
}
