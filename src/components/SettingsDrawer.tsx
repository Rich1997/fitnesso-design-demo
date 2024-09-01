import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";

const SettingsDrawer = () => {
    const isDesktop = useMediaQuery("(min-width: 640px)");

    return (
        <div className="w-full flex justify-start">
            <Drawer direction={`${isDesktop ? "left" : "bottom"}`}>
                <DrawerTrigger>Tweaks</DrawerTrigger>
                <DrawerContent>Hello</DrawerContent>
            </Drawer>
        </div>
    );
};

export default SettingsDrawer;
