export const metadata = {
  title: "Lendfinity",
  description: "Decentralized Lending Protocol on Bitfinity",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Metrics from "@/components/metrics";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Metrics />
      <Workflows />
      <Testimonials />
      {/* <Cta /> */}
    </>
  );
}
