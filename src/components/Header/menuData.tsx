import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 3,
        title: "FAQ",
        path: "/",
        newTab: false,
      },
      {
        id: 46,
        title: "Term & Condition",
        path: "/",
        newTab: false,
      },
      {
        id: 47,
        title: "Privacy Police",
        path: "/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
