// src/contexts/SelectionContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface SelectionContextType {
    selectedItems: string[];
    toggleSelection: (title: string) => void;
    clearSelections: () => void;
    selectAll: (items: string[]) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(
    undefined
);

export const SelectionProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleSelection = (title: string) => {
        setSelectedItems((prev) =>
            prev.includes(title)
                ? prev.filter((item) => item !== title)
                : [...prev, title]
        );
    };

    const clearSelections = () => {
        setSelectedItems([]);
    };

    const selectAll = (items: string[]) => {
        setSelectedItems(items);
    };

    return (
        <SelectionContext.Provider
            value={{
                selectedItems,
                toggleSelection,
                clearSelections,
                selectAll,
            }}
        >
            {children}
        </SelectionContext.Provider>
    );
};

export const useSelectionContext = () => {
    const context = useContext(SelectionContext);
    if (context === undefined) {
        throw new Error(
            'useSelectionContext must be used within a SelectionProvider'
        );
    }
    return context;
};
