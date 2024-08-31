import { Filter, Search, Trash, X } from "lucide-react";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import { BiCheckboxChecked, BiSolidCheckboxChecked } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { useSelectionContext } from "@/context/SelectionContext";

interface ActionBarProps {
    allItems: string[];
}

const ActionBar: React.FC<ActionBarProps> = ({ allItems }) => {
    const { selectedItems, clearSelections, selectAll } = useSelectionContext();

    const handleSelectAll = () => {
        selectAll(allItems);
    };

    if (selectedItems.length > 0) {
        return (
            <div className="flex justify-between items-center pb-4 text-accent font-medium">
                <div className="flex gap-2 text-sm items-center">
                    <div className="flex gap-2 items-center">
                        <Button variant="ghost" size="sm" onClick={clearSelections}>
                            <X size={14} />
                        </Button>
                        {selectedItems.length} selected
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <Button variant="ghost" size="sm" onClick={handleSelectAll}>
                        {selectedItems.length === allItems.length ? (
                            <BiSolidCheckboxChecked size={20} />
                        ) : (
                            <BiCheckboxChecked size={20} />
                        )}
                    </Button>
                    <Button variant="ghost" size="sm">
                        <PiSelectionBackgroundBold size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-4">
                        <Trash size={14} />
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-between items-center pb-4 text-accent font-medium">
            <div className="flex gap-2 text-sm items-center">
                <Search size={12} />
                Search
            </div>
            <div className="flex gap-2 text-sm items-center">
                <Filter size={12} />
                Filter
            </div>
        </div>
    );
};

export default ActionBar;
