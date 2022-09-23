import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Cart, Chat, Notification, UserProfile } from "./";
import { useStateContext } from "../contexts/ContextProvider";
import { CgUser } from "react-icons/cg";

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
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
  }, [screenSize]);

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

      <div className="flex">
        <NavButton
          title="Cart"
          func={() => handleClick("cart")}
          color="black"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Notification"
          dotColor="yellow"
          func={() => handleClick("notification")}
          color="black"
          icon={<RiNotification3Line />}
        />
        <NavButton
          title="Chat"
          dotColor="blue"
          func={() => handleClick("chat")}
          color="black"
          icon={<BsChatLeft />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-2 hover:bg-teal-300 text-xl rounded"
            onClick={() => handleClick("userProfile")}
          >
            <CgUser />
            <p>
              <span>Welcome, </span> <span>User</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
}

const NavButton = ({ title, func, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter" opensOn="Hover">
      <button
        type="button"
        onClick={func}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-teal-300"
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
