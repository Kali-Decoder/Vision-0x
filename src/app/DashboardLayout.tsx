"use client";
import { useEffect } from "react";
import {
  setActiveMenuItem,
  toggleSidebar,
  toggleSearch,
  handleDarkModeSwitch,
  initMenuToggle,
  initDropdownMenus,
} from "@/utils/uiHandlers";

export default function DashboardLayout({children}:any) {
  useEffect(() => {
    setActiveMenuItem("#sidebar .side-menu.top li a");
    toggleSidebar("#content nav .bx.bx-menu", "sidebar");
    toggleSearch(
      "#content nav form .form-input button",
      "#content nav form .form-input button .bx",
      "#content nav form"
    );
    handleDarkModeSwitch("switch-mode");
    initMenuToggle(".notification", ".profile", ".notification-menu", ".profile-menu");
    initDropdownMenus();
  }, []);

  return <>
    {children}
  </>;
}
