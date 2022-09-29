import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Themes } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Area,
  Bar,
  PieChart,
  Line,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu, themeSettings, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : 'light'}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
                    {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <></>
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <Themes />}

              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calendar" element={<Calendar />} />

                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<PieChart />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
