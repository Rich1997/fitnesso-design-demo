import React from "react";
import Layout from "./Layout";

const Screen = () => {
    return (
        <div className="relative flex min-h-patch flex-col sm:p-8 p-0 bg-gradient-to-r from-teal-400 to-yellow-200 items-center justify-center">
            <div className="sm:h-[866px] h-dvh sm:w-[412px] w-screen bg-background rounded-xl overflow-clip">
                <Layout />
            </div>
        </div>
    );
};

export default Screen;
