import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider';

function Sidebar() {
  const {activeMenu, setActiveMenu, screenSize} = useStateContext();

  const handleSidebar = () => {
    if(activeMenu && screenSize <= 900) setActiveMenu(!activeMenu);
  }

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black bg-light-gray text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-teal-300 m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-gray">
      {activeMenu ? (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <RiAdminFill />
              <span>Admin Dashboard</span>
            </Link>
            <TooltipComponent content="Close Sidebar" position="BottomCenter" opensOn="Hover">
              <button
                type="button"
                onClick={() => setActiveMenu((prevState) => !prevState)}
                className="text-xl rounded-full p-3 hover:bg-teal-300 mt-4 block"
              >
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Sidebar;
