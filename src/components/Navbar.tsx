import {
  Calendar,
  CreditCard,
  EllipsisVertical,
  Home,
  Menu,
  MessageSquare,
  Settings,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-full w-full shadow-md py-3 px-4 md:px-6 lg:px-8 flex items-center justify-between relative">
      {/* Logo */}
      <img src="/TestLogo.svg" alt="TestLogo" className="h-8 2xl:h-[45px] w-auto" />

      {/* Desktop Nav Links */}
      <ul className="hidden xl:flex items-center gap-4 text-[#072635] text-sm md:text-base xl:text-[18px] font-medium">
        <li className="flex items-center gap-[6px] text-[14px] 2xl:text-base hover:bg-[#01F0D0] px-4 py-2 2xl:py-3 rounded-full cursor-pointer">
          <Home size={18} />
          <span>Overview</span>
        </li>
        <li className="flex items-center gap-[6px] text-[14px] 2xl:text-base bg-[#01F0D0] px-4 py-2 2xl:py-3 rounded-full cursor-pointer">
          <Users size={18} />
          <span>Patients</span>
        </li>
        <li className="flex items-center gap-[6px] text-[14px] 2xl:text-base hover:bg-[#01F0D0] px-4 py-2 2xl:py-3 rounded-full cursor-pointer">
          <Calendar size={18} />
          <span>Schedule</span>
        </li>
        <li className="items-center gap-[6px] text-[14px] 2xl:text-base hover:bg-[#01F0D0] px-4 py-3 rounded-full cursor-pointer hidden 2xl:flex">
          <MessageSquare size={18} />
          <span>Message</span>
        </li>
        <li className="flex items-center gap-[6px] text-[14px] 2xl:text-base hover:bg-[#01F0D0] px-4 py-2 2xl:py-3 rounded-full cursor-pointer">
          <CreditCard size={18} />
          <span>Transactions</span>
        </li>
      </ul>

      {/* Profile + Icons */}
      <div className="hidden xl:flex items-center gap-2">
        <img
          src="/doctor-sm.png"
          srcSet="/doctor-sm.png 1x, /doctor-lg.png 2x"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col text-[#072635] text-sm">
          <h1 className="font-semibold">Dr. Jose Simmons</h1>
          <p>General Practitioner</p>
        </div>
        <div className="flex items-center gap-2 ml-2">
          <Settings size={22} />
          <EllipsisVertical size={22} />
        </div>
      </div>

      {/* Hamburger - visible on small & tablet screens */}
      <button
        className="xl:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="fixed top-0 right-0 w-[70%] max-w-sm h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 xl:hidden transition-all duration-300">
          <button
            className="self-end mb-4 duration-300 transition"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>

          {[
            ["Overview", <Home size={18} />],
            ["Patients", <Users size={18} />],
            ["Schedule", <Calendar size={18} />],
            ["Message", <MessageSquare size={18} />],
            ["Transactions", <CreditCard size={18} />],
          ].map(([label, icon], idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 p-3 hover:bg-[#01F0D0] rounded-full"
            >
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
