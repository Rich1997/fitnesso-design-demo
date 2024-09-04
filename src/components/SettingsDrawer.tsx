import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "usehooks-ts";
import { Settings2 } from "lucide-react";

const SettingsDrawer = () => {
    const isDesktop = useMediaQuery("(min-width: 640px)");

    return (
        <Drawer direction={`${isDesktop ? "left" : "bottom"}`}>
            <DrawerTrigger asChild>
                <Button className="p-2">
                    <Settings2 />
                </Button>
            </DrawerTrigger>
            <DrawerContent>Hello</DrawerContent>
        </Drawer>
    );
};

export default SettingsDrawer;
