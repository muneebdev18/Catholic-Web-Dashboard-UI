import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaServicestack,
  FaTags,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa"; // Icons for navigation
import { FaChartSimple } from "react-icons/fa6";
import { IoBagHandleSharp,IoNotifications } from "react-icons/io5";

import { IoMdSettings } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";

export const navLinks = [
  { name: "Home", page: "/" },
  { name: "About Us", page: "/about" },
  { name: "Services", page: "/service" },
  { name: "Community", page: "/community" },
  { name: "Categories", page: "/category" },
  { name: "Events", page: "/events" },
  { name: "Contact Us", page: "/contact" },
];

export const sidebarNavLinks = [
  { name: "Home", page: "/", icon: FaHome  },
  { name: "About Us", page: "/about", icon: FaInfoCircle },
  { name: "Services", page: "/service", icon: FaServicestack  },
  { name: "Community", page: "/community", icon: FaUsers},
  { name: "Categories", page: "/category", icon: FaTags  },
  { name: "Events", page: "/events", icon: FaCalendarAlt  },
  { name: "Contact Us", page: "/contact", icon: FaEnvelope },
];



export const SIDEBAR_ITEMS = [
    { name: "Overview", Icon: FaChartSimple, color: "#F59E0B", href: "/dashboard", size:15 },
    // { name: "Users", Icon: IoBagHandleSharp, color: "#8B5CF6", href: "/property", size:15 },
    { name: "Users Management", Icon: FaUsers , color: "#EC4899", href: "/dashboard/users", size:15 },
    { name: "Admin Management", Icon: MdAdminPanelSettings, color: "#10B981", href: "/dashboard/adminmanagement", size:15 },
    // { name: "Property Category", Icon: BiSolidCategoryAlt, color: "#C7253E", href: "/propertycategory", size:15 },
    { name: "Notifications", Icon: IoNotifications, color: "#F59E0B", href: "/dashboard/notifications", size:15 },
    { name: "Settings", Icon: IoMdSettings, color: "#6EE7B7", href: "/dashboard/settings", size:15 },
];