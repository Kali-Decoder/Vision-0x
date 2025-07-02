"use client";
import { FC } from "react";
import { Menu, Moon, Search, Sun } from "lucide-react";
const Navbar: FC = () => {
  return (
    <nav>
      <Menu />
      <form action="#">
        <div className="form-input">
          <input
            type="search"
            placeholder="Search Address or ENS or NAD Name"
          />
          <button type="submit" className="search-btn p-2">
            <Search />
          </button>
        </div>
      </form>
      <input type="checkbox" className="checkbox" id="switch-mode" hidden />
      <label className="swith-lm" htmlFor="switch-mode">
        <Moon />
        <Sun />
        <div className="ball"></div>
      </label>
    </nav>
  );
};

export default Navbar;
