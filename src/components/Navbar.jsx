import React, { useState } from "react";
import { Home, ListTodo, User, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

const NavItem = ({ to, icon: Icon, isHovered, label }) => (
  <Link
    to={to}
    className="flex items-center justify-center lg:justify-start lg:w-28 bg-black p-2 rounded-full border border-white/20
      transition-all duration-300 hover:bg-[#7b93fe] hover:text-white relative"
  >
    <div className="flex items-center gap-2">
    <Icon className="w-6 h-6 text-white" />
    <span className="text-white hidden lg:block">{label}</span>
    </div>
  
  </Link>
);

const Navbar = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/projects", icon: ListTodo, label: "Projects" },
    { to: "/about", icon: User, label: "About" },
    { to: "/contact", icon: MailCheck, label: "Contact" },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div
      className="fixed lg:top-1/2 bottom-0 left-0 lg:left-auto lg:right-0 w-full lg:w-auto 
      lg:-translate-y-1/2 z-50 bg-transparent backdrop-blur-sm lg:backdrop-blur-none"
    >
      <nav className="w-full max-w-lg mx-auto px-4 py-4 lg:py-0 lg:px-6">
        <div className="flex flex-row lg:flex-col justify-center items-center gap-8 lg:gap-6">
          {navItems.map((item) => (
            <div
              key={item.to}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className=""
            >
              <NavItem
                to={item.to}
                icon={item.icon}
                isHovered={hoveredItem === item.label}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
