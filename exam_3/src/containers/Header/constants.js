import { BiUser, BiHeart } from "react-icons/bi";

export const HEADER_NAVIGATION_LINKS = [
  { label: "HOME", value: "/" },
  { label: "CHARACTERS", value: "/characters" },
  { label: "COMICS", value: "/comics" },
  { label: "SERIES", value: "/series" },
];

export const HEADER_NAVIGATION_ICONS = [
  { label: "Authorization", value: "/authorization", icon: <BiUser /> },
  { label: "Favorites", value: "/favorites", icon: <BiHeart /> },
];