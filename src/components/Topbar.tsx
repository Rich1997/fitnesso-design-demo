import { Github, Info } from "lucide-react";
import SettingsDrawer from "./SettingsDrawer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";

const Topbar = () => {
    return (
        <div className="w-full flex justify-between pb-4 px-4 sm:px-0 gap-2 items-center">
            <Card className="p-2">Fitnesso UI demo</Card>
            <div className="flex gap-2">
                <SettingsDrawer />
                <Link to={"https://github.com/Rich1997/fitnesso-design-demo"} target="_blank" rel="noopener noreferrer">
                    <Button className="p-2">
                        <Github />
                    </Button>
                </Link>
                <Link
                    to={"https://github.com/Rich1997/fitnesso-design-demo/blob/master/README.md"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="p-2">
                        <Info />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
