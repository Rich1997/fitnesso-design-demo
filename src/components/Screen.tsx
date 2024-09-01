import Layout from "./Layout";

const Screen = () => {
    return (
        <div className="relative flex min-h-patch flex-col p-8 bg-gradient-to-r from-teal-400 to-yellow-200 items-center justify-center">
            <div className="h-dvh sm:w-[412px] w-screen bg-background rounded-xl overflow-clip">
                <Layout />
            </div>
        </div>
    );
};

export default Screen;
