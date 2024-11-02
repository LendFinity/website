import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";

export default function HeroHome() {
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-40">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className=" mb-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              <p className="text-purple-400 mb-3 text-5xl md:text-7xl"></p>
              Unlock DeFi for <span className="text-purple-400">ICP</span> and <span className="text-purple-400">Runes</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
               Lendfinity is the first lending protocol on Bitfinity.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Unlocking decentralized lending for everyone. */}
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mt-20">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Link
                    href="https://app.lendfinity.xyz"
                    target="_blank"
                    className="rounded-full py-3 px-8 text-lg btn-sm bg-gradient-to-t bg-white bg-[length:100%_100%] bg-[bottom] text-gray-800 shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                  >
                    Go to app <span className="ml-2">→</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
