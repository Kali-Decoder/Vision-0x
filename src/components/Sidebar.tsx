"use client";
import { Eye } from "lucide-react";
import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <section id="sidebar">
      <a href="#" className="brand px-2">
        <Eye className="w-10 h-10 text-black" />
        <span className="text mx-2">Vision-0x</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard bx-sm"></i>
            <span className="text">Home</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
