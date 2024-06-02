import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import Image from "next/image";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Lendfinity - Decentralized Lending Protocol on Bitfinity"
                description="Lendfinity is an Open Source Protocol to create Non-Custodial Liquidity Markets to earn interest on supplying and borrowing assets with a variable or stable interest rate. The protocol is designed for easy integration into your products and services."
            />
            <div className="main-wrapper bg-[#222222] relative z-10 pb-20 pt-20 text-white">
                <HomeBanner />
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Tap into the Bitfinity Network through our decentralized, secure dashboard                            </PageTitle>
                            
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-3">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-black-600/20 p-12">
                                        <CardHeader className="!text-white !text-2xl !font-bold">
                                            $30B
                                        </CardHeader>
                                        <p>TVL in Lending Protocols</p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-black-600/20 p-12">
                                        <CardHeader className="!text-white !text-2xl !font-bold">
                                            1%
                                        </CardHeader>
                                        <p>
                                            Less than 1% of the TVL in lending
                                            protocols is currently utilizing
                                            Bitcoin L2 solutions
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-black-600/20 p-12">
                                        <CardHeader className="!text-white !text-2xl !font-bold">
                                            0
                                        </CardHeader>
                                        <p>Lending Protocols on Bitfinity</p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        
                        <SectionContainer id="features" className="features">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Features
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Lendfinity allows you to easily borrow and
                                    lend ICP, Bitcoin and many other Bitfinity tokens.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Partners and Collaborations
                            </PageTitle>
                            <div className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-16 mb-8 md:grid-cols-3 items-center">
                                <a
                                    href="https://twitter.com/icphub_PT"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex justify-center"
                                >
                                    <Image
                                        src="/icphubpt.png"
                                        alt="ICP Hub PT"
                                        width={100}
                                        height={100}
                                    />
                                </a>
                                <a
                                    href="https://www.lunarstrategy.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex justify-center"
                                >
                                    <Image
                                        src="/lunarstrategy.png"
                                        alt="Lunar Strategy"
                                        width={200}
                                        height={200}
                                    />
                                </a>
                                <a
                                    href="https://bitfinity.network/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex justify-center"
                                >
                                    <Image
                                        src="/bitfinityevm.png"
                                        alt="Bitfinity EVM"
                                        width={200}
                                        height={200}
                                    />
                                </a>
                            </div>
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >

                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
