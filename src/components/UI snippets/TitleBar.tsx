import React from "react";

interface TitleBarProps {
    title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
    return <div className="px-4 text-[22px] font-bold tracking-tight pb-6">{title}</div>;
};

export default TitleBar;
