export const metadata = {
  title: "Lendfinity",
  description: "The lending protocol on Bitfinity. Lendfinity is a decentralized lending and borrowing platform built on Bitfinity, providing seamless access to both ICP tokens and Bitcoin Runes within a familiar EVM environment. Our mission is to bridge the gap between these two powerful ecosystems—ICP, known for its cutting-edge blockchain technology, and Bitcoin, the most valuable cryptocurrency—by offering a reliable, secure, and user-friendly DeFi solution.",
  applicationName: "Lendfinity",
  keywords: ["DeFi", "Lending", "ICP", "Bitfinity", "Runes", "BTCFi"],
  openGraph: {
    title: 'Lendfinity',
    description: 'The lending protocol on Bitfinity. Lendfinity is a decentralized lending and borrowing platform built on Bitfinity, providing seamless access to both ICP tokens and Bitcoin Runes within a familiar EVM environment. Our mission is to bridge the gap between these two powerful ecosystems—ICP, known for its cutting-edge blockchain technology, and Bitcoin, the most valuable cryptocurrency—by offering a reliable, secure, and user-friendly DeFi solution.',
    url: 'https://lendfinity.xyz',
    siteName: 'Lendfinity',
    images: [
      {
        url: 'https://lendfinity.xyz/images/original.png', // Must be an absolute URL
        width: 1025,
        height: 1025,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/original.png',
    shortcut: '/images/original.png',
    apple: '/image/apple-touch-icon.png',
    other: {
      url: '/images/original.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lendfinity',
    description: 'The lending protocol on Bitfinity. Lendfinity is a decentralized lending and borrowing platform built on Bitfinity, providing seamless access to both ICP tokens and Bitcoin Runes within a familiar EVM environment. Our mission is to bridge the gap between these two powerful ecosystems—ICP, known for its cutting-edge blockchain technology, and Bitcoin, the most valuable cryptocurrency—by offering a reliable, secure, and user-friendly DeFi solution.',
    creator: '@lendfinity_xyz',
    images: ['https://nextjs.org/images/original.png'], // Must be an absolute URL
  },
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
      {/* <Workflows /> */}
      <Testimonials />
      <Cta />
    </>
  );
}
