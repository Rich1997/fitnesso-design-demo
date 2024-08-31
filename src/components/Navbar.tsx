import { Apple, Dumbbell, House, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { path: "/", label: "Home", icon: House },
        { path: "/exercises", label: "Exercises", icon: Dumbbell },
        { path: "/diet", label: "Diet", icon: Apple },
        { path: "/profile", label: "Profile", icon: User },
    ];

    return (
        <div className="h-[80px] w-full bg-muted/70 absolute bottom-0">
            <div className="flex items-center justify-around h-full px-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-accent flex flex-col items-center gap-2"
                                : "text-muted-foreground/50 flex flex-col items-center gap-2"
                        }
                        end={item.path === "/"}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon size={20} fill={isActive ? "currentColor" : "none"} />
                                <span className="text-xs">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
