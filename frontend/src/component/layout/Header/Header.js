import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "24vmax",
  navColor1: "rgb(255, 179, 170,1)",
  logoHoverSize: "15px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "About",
  link4Text: "Login",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/about",
  link4Url: "/login",
  link1Size: "1.5vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  link4Color: "rgba(35,35,35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  link2Margin: "3vmax",
  link3Margin: "1vmax",
  link4Margin: "5vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "4vmax",
};

const Header = () => {
  return <>
    <ReactNavbar {...options} />
  </>
};

export default Header;
