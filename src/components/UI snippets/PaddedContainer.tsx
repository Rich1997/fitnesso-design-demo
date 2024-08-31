import { ReactNode } from "react";

type PaddedContainerProps = {
    children: ReactNode;
    padding?: string;
};

const PaddedContainer: React.FC<PaddedContainerProps> = ({ children, padding = 2 }) => {
    return <div className={`px-${padding} w-full`}>{children}</div>;
};

export default PaddedContainer;
