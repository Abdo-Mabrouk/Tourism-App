import Footar from "@/components/Footar/Footar";
import Navbar from "@/components/Navbar/Navbar";
import Navbar2 from "@/components/Navbar/Navbar2";
import { Outlet, ScrollRestoration, useLocation } from "react-router";

function NestedPaga() {
  const location = useLocation();

  const pathname = location.pathname;
  return (
    <>
      {pathname === "/" ||
      pathname === "/home" ||
      pathname === "/visiting-pyramids-giza" ||
      pathname === "/about" ||
      pathname === "/contact-us" ||
      pathname === "/all-frequently-asked" ||
      pathname === "/blogs-details" ||
      pathname === "/blogs" ? (
        <Navbar />
      ) : (
        <Navbar2 />
      )}
      <ScrollRestoration />
      <Outlet />
      <Footar />
    </>
  );
}

export default NestedPaga;
