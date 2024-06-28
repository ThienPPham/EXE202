import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import phone_case_icon from "../image/phone_case_icon.png";
import charm_icon from "../image/charm_image/charm_icon.png";
import picture_icon from "../image/picture_icon.png";

export const SidebarData = [
  {
    title: "Phone Case",
    // path: "/",
    icon: (
      <img style={{ width: "35px", height: "35px" }} src={phone_case_icon} />
    ),
    cName: "nav-text",
  },
  {
    title: "Charms",
    // path: "/reports",
    icon: <img style={{ width: "30px", height: "40px" }} src={charm_icon} />,
    cName: "nav-text",
  },
  {
    title: "Image Uploaded",
    // path: "/products",
    icon: <img style={{ width: "30px", height: "40px" }} src={picture_icon} />,
    cName: "nav-text",
  },
  {
    title: "Team",
    // path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    // path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Support",
    // path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
