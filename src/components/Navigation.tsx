import { Link, NavLink } from "react-router-dom";
import Icon from "../utils/icon";
import { cn } from "../utils/cn";

const Navigation = () => {
  const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
    return cn("text-s text-[#101828] ", { "text-[#D84343]": isActive });
  };

  return (
    <header className="sticky top-0 flex items-center justify-center bg-[#F7F7F7] p-6 border border-[#F2F4F7]">
      <Link to="/" className="absolute top-7 left-16">
        <Icon id="icon-logo" h={16} w={136} />
      </Link>
      <nav className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) => buildLinkClass({ isActive })}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => buildLinkClass({ isActive })}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
