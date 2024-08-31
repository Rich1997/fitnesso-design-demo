import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="h-full relative">
            <div className="pt-12 h-[calc(100%-80px)] min-h-0 flex flex-col">
                <Outlet />
            </div>
            <Navbar />
        </div>
    );
};

export default Layout;
