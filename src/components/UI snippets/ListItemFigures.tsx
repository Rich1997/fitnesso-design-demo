import React from "react";

interface ListItemFiguresProps {
    mainItem?: number | string;
    subItem?: number | string;
}

const ListItemFigures: React.FC<ListItemFiguresProps> = ({ mainItem, subItem = "No data" }) => {
    return (
        <div>
            <span className="font-bold text-[22px]">{mainItem}</span>
            <span className="text-card-foreground/70 text-xs">{subItem}</span>
        </div>
    );
};

export default ListItemFigures;
