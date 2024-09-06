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
            <div className="flex justify-between items-center pb-4 text-accent font-medium h-10">
                <div className="flex gap-2 text-sm items-center">
                    <div className="flex gap-2 items-center">
                        <Button variant="ghost" size="sm" onClick={clearSelections}>
                            <span class="material-symbols-rounded">close</span>
                        </Button>
                        {selectedItems.length} selected
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <Button variant="ghost" size="sm" onClick={handleSelectAll}>
                        {selectedItems.length === allItems.length ? (
                            <span className="material-symbols-rounded mso">check_box</span>
                        ) : (
                            <span className="material-symbols-rounded">check_box</span>
                        )}
                    </Button>
                    <Button variant="ghost" size="sm">
                        <span class="material-symbols-rounded">select_all</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="ml-4">
                        <span class="material-symbols-rounded">delete</span>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-between items-center pb-4 text-accent font-medium h-10">
            <div className="flex gap-2 text-sm items-center">
                <span class="material-symbols-rounded">search</span>
                Search
            </div>
            <div className="flex gap-2 text-sm items-center">
                <span class="material-symbols-rounded">filter_alt</span>
                Filter
            </div>
        </div>
    );
};

export default ActionBar;
