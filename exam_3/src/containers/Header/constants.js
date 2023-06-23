import { BiUser, BiSearch, BiHeart } from "react-icons/bi";

export const HEADER_NAVIGATION_LINKS = [
  { label: "HOME", value: "/" },
  { label: "CHARACTERS", value: "/characters" },
  { label: "COMICS", value: "/comics" },
  { label: "MOVIE", value: "/movies" },
];

export const HEADER_NAVIGATION_ICONS = [
  { label: "Search", value: "/search", icon: <BiSearch /> },
  { label: "Authorization", value: "/login", icon: <BiUser /> },
  { label: "Favorites", value: "/favorites", icon: <BiHeart /> },
];