import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "March 2024",
        icon: "icon-park-outline:one-key",
        content: "Build on ICP Portugal Hackathon Win"
    },
    {
        id: uuid(),
        title: "April 2024",
        icon: "icon-park-outline:two-key",
        content: "MVP and First Partnerships"
    },
    {
        id: uuid(),
        title: "May 2024",
        icon: "icon-park-outline:three-key",
        content: "Production-ready dApp"
    },
    {
        id: uuid(),
        title: "June 2024",
        icon: "icon-park-outline:four-key",
        content: "Mainnet Launch"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-white">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </SectionContainer>
    );
};
