import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: FC = () => {
  const linkBase =
    "px-6 py-2 text-base font-medium transition-colors duration-200";
  const linkInactive = "text-white/70 hover:text-white";
  const linkActive =
    "text-white border-b-2 border-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1A0021] bg-opacity-90 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16">
        <NavLink
          to="/"
          aria-label="GramCourses home"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5]"
        >
          GramCourses
        </NavLink>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            end
            aria-label="Home"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            aria-label="Features"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/pricing"
            aria-label="Pricing"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/creators"
            aria-label="Creators"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Creators
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
