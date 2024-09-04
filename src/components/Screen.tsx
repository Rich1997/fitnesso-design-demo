import Layout from "./Layout";
import SettingsDrawer from "./SettingsDrawer";

const Screen = () => {
    return (
        <div className="relative flex min-h-patch flex-col sm:px-8 p-0 bg-gradient-to-r from-teal-400 to-yellow-200 items-center justify-center">
            <div className="sm:w-[412px] w-screen h-dvh max-h-[915px] sm:py-4 pt-4 pb-0">
                <SettingsDrawer />
                <div className="bg-background rounded-xl overflow-clip h-[calc(100%-24px)]">
                    <Layout />
                </div>
            </div>
        </div>
    );
};

export default Screen;
