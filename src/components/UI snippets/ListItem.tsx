import React from "react";
import { Card } from "../ui/card";
import ListItemFigures from "./ListItemFigures";
import { useSelectionContext } from "@/context/SelectionContext";

interface ListItemProps {
    title: string;
    description?: string;
    mainValue?: number | string;
    subValue?: number | string;
}

const ListItem: React.FC<ListItemProps> = ({ title, description = "No info", mainValue, subValue }) => {
    const { selectedItems, toggleSelection } = useSelectionContext();
    const isSelected = selectedItems.includes(title);

    return (
        <Card
            className={`p-2 min-h-[52px] flex items-center cursor-pointer select-none ${
                isSelected ? "bg-primary/20" : ""
            }`}
            onClick={() => toggleSelection(title)}
        >
            <div className="flex gap-2 w-full items-start">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <div className="font-bold leading-3 mb-1">{title}</div>
                        <div className="text-xs text-card-foreground/70">{description}</div>
                    </div>
                    {mainValue && <ListItemFigures mainItem={mainValue} subItem={subValue} />}
                </div>
            </div>
        </Card>
    );
};

export default ListItem;
