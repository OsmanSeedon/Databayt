"use client";
import Databayt from "../Text/Databayt";
import Burger from "./Burger";
import Nav from "./Nav";

const Header = () => {
  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30">
      <Databayt />
      <Nav />
      <Burger />
    </nav>
  );
};
export default Header;
