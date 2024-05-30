import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Passive Income",
        content:
            "You can lend your assets (e.g. BRC-20s, Runes, ERC-20s, ICRC-2s, etc) to borrowers through Lendfinity's lending pool. As the lender, you earn interest on your deposited assets, providing a passive income stream.",
        align: "right",
        image: "/growth.png"
    },
    {
        id: uuid(),
        title: "Leverage Trading",
        content:
            "Lendfinity allows users to engage in leverage trading by depositing collateral, such as ckBTC, to borrow other assets. The borrowed assets can be used to purchase more of the same or different cryptocurrencies, increasing the user's market exposure. This process can be repeated by re-depositing the newly acquired assets as additional collateral to borrow even more.",
        align: "right",
        image: "/muscle.png"
    },
    {
        id: uuid(),
        title: "Automatic Liquidation",
        content:
            "By leveraging ICP's infrastructure, which Bitfinity is built on top of, we've automated our protocol, eliminating the need for manual liquidators. This innovation reduces maintenance costs, resulting in lower fees for our users.",
        align: "right",
        image: "/robot.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8 items-center"
                >
                    <div
                        className={`flex justify-center process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={160}
                            height={160}
                            objectFit="cover"
                            alt="Process Banner 1"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-white/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-white">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
