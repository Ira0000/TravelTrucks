import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "../utils/icon";
import { cn } from "../utils/cn";
import { resetFilters } from "../redux/campers/slice";
import { useAppDispatch } from "../redux/hooks";

export default function Navigation() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return cn("text-s text-[#101828] cursor-pointer ", {
      "text-[#D84343] pointer-events-none": isActive,
    });
  };

  const handleNavLinkClick = (to: string): void => {
    if (location.pathname !== to) {
      // Only dispatch if not already on the page
      dispatch(resetFilters());
    }
  };

  return (
    <header className="sticky top-0 p-4 md:p-6 flex justify-end lg:justify-center  bg-[#F2F4F7] border border-[#F2F4F7] z-50 shadow-sm w-full">
      <Link to="/" className="absolute top-7  left-2 md:left-16 cursor-pointer">
        <Icon id="icon-logo" h={16} w={136} />
      </Link>
      <nav className="flex gap-3 md:gap-8 flex-col md:flex-row">
        <NavLink
          to="/"
          className={({ isActive }) => buildLinkClass({ isActive })}
          onClick={() => handleNavLinkClick("/")}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => buildLinkClass({ isActive })}
          onClick={() => handleNavLinkClick("/catalog")}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
