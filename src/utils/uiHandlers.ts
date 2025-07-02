// utils/uiHandlers.ts
export const setActiveMenuItem = (selector: string) => {
    const menuItems = document.querySelectorAll(selector);
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuItems.forEach((el) => el.parentElement?.classList.remove("active"));
        item.parentElement?.classList.add("active");
      });
    });
  };
  
  export const toggleSidebar = (menuBtnSelector: string, sidebarId: string) => {
    const menuBtn = document.querySelector(menuBtnSelector);
    const sidebar = document.getElementById(sidebarId);
  
    menuBtn?.addEventListener("click", () => {
      sidebar?.classList.toggle("hide");
    });
  
    const adjustSidebar = () => {
      if (window.innerWidth <= 576) {
        sidebar?.classList.add("hide");
      } else {
        sidebar?.classList.remove("hide");
      }
    };
  
    window.addEventListener("load", adjustSidebar);
    window.addEventListener("resize", adjustSidebar);
  };
  
  export const toggleSearch = (
    buttonSelector: string,
    iconSelector: string,
    formSelector: string
  ) => {
    const button = document.querySelector(buttonSelector);
    const icon = document.querySelector(iconSelector);
    const form = document.querySelector(formSelector);
  
    button?.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        form?.classList.toggle("show");
        if (form?.classList.contains("show")) {
          icon?.classList.replace("bx-search", "bx-x");
        } else {
          icon?.classList.replace("bx-x", "bx-search");
        }
      }
    });
  };
  
  export const handleDarkModeSwitch = (switchId: string) => {
    const switchMode = document.getElementById(switchId) as HTMLInputElement;
    switchMode?.addEventListener("change", () => {
      if (switchMode.checked) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  };
  
  export const initMenuToggle = (
    notificationSelector: string,
    profileSelector: string,
    notificationMenuSelector: string,
    profileMenuSelector: string
  ) => {
    const notification = document.querySelector(notificationSelector);
    const profile = document.querySelector(profileSelector);
    const notificationMenu = document.querySelector(notificationMenuSelector);
    const profileMenu = document.querySelector(profileMenuSelector);
  
    notification?.addEventListener("click", () => {
      notificationMenu?.classList.toggle("show");
      profileMenu?.classList.remove("show");
    });
  
    profile?.addEventListener("click", () => {
      profileMenu?.classList.toggle("show");
      notificationMenu?.classList.remove("show");
    });
  
    
  };
  
  export const initDropdownMenus = (menuClass = ".menu") => {
    const menus = document.querySelectorAll(menuClass);
    menus.forEach((m) => ((m as HTMLElement).style.display = "none"));
  };
  

  