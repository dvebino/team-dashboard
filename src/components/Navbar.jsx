import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Chat, Notification } from "./";
import { useStateContext } from "../contexts/ContextProvider";
import { CgUser } from "react-icons/cg";

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    setThemeSettings,
    currentMode
  } = useStateContext();

  useEffect(() => {
    const resizeFunc = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", resizeFunc);
    resizeFunc();
    return () => window.removeEventListener("resize", resizeFunc);
  });
  //will actively check for size, removes sidebar if under 900
  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {!activeMenu ? (
        <NavButton
          title="Menu"
          func={() => setActiveMenu((prevMenu) => !prevMenu)}
          color="black"
          icon={<AiOutlineMenu />}
        />
      ) : (
        <div></div>
      )}

      <div className={`flex ${currentMode === "Dark" ? "text-white" : "text-black"}`}>
        <NavButton
          title="Settings"
          func={() => setThemeSettings(true)}
          icon={<FiSettings />}
        />
        <NavButton
          title="Chat"
          dotColor="red"
          func={() => handleClick("chat")}
          icon={<BsChatLeft />}
        />
        <div
            className="flex items-center gap-2 cursor-pointer p-2 text-xl rounded"
            onClick={() => handleClick("notification")}
          >
            <CgUser />
            <p>
              <span>Welcome, User!</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
}

const NavButton = ({ title, func, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter" opensOn="Hover" width="100px" height="45px" animation={{open: {effect:"FadeIn", duration: 500, delay: 0}}}>
      <button
        type="button"
        onClick={func}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-teal-500"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

export default Navbar;
