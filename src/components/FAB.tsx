import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAB = () => {
    return (
        <Button
            className="absolute bottom-[calc(88px)] right-2 gap-2 text-xs"
            size="default"
        >
            <Plus />
            Add item
        </Button>
    );
};

export default FAB;
