import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import icon from "@/assets/icon/discount-shape3.svg";
import { Menu, ChevronDown, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/icon/logo.svg";
import USD from "@/assets/icon/global.svg";
import usd from "@/assets/icon/global.svg";
import { Link, NavLink } from "react-router-dom";
import SelectLang from "@/paga/Auth/components/SelectLang";
import { useState } from "react";

const ORANGE = "#F7941D";

function desktopNavLinkClass({ isActive }: { isActive: boolean }) {
  return `text-sm px-2 py-2 rounded-md transition-colors ${
    isActive
      ? "font-semibold text-[#024084] bg-gray-100"
      : "font-medium text-[#1D1F1F] hover:text-[#024084] hover:bg-gray-50"
  }`;
}

export default function Navbar2() {
  const [open,setOpen]=useState<boolean>(false)
  function togel() {
    setOpen(!open)
  }
  const bottomLinks = (
    <>
      <NavLink to="/" className={desktopNavLinkClass}>
        Home
      </NavLink>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200">
            Egypt Tours <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="p-0! border-0 rounded-2xl bg-white/90 shadow-lg"
        >
          <DropdownMenuItem className="p-0! px-3">
            <NavLink
              to="/one-day-tours"
              className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
            >
              One Day Tours
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" opacity-0 group-hover:opacity-100"
              />
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0! px-3">
            <NavLink
              to="/one-day-tours"
              className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
            >
              Multi Days Tours
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" opacity-0 group-hover:opacity-100"
              />
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0! px-3">
            <NavLink
              to="/one-day-tours"
              className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
            >
              Nile Cruises
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" opacity-0 group-hover:opacity-100"
              />
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0! px-3">
            <NavLink
              to="/one-day-tours"
              className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
            >
              Shore Excursions
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" opacity-0 group-hover:opacity-100"
              />
            </NavLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <NavLink to="/rent-car" className={desktopNavLinkClass}>
        Rent Car
      </NavLink>
      <NavLink to="/about" className={desktopNavLinkClass}>
        About Us
      </NavLink>
      <NavLink to="/contact-us" className={desktopNavLinkClass}>
        Contact Us
      </NavLink>
      <NavLink to="/blogs" className={desktopNavLinkClass}>
        Blogs
      </NavLink>
      <NavLink
        to="/make-your-trip"
        className={({ isActive }) =>
          `flex items-center gap-1.5 text-sm font-semibold px-2 py-2 rounded-md transition-colors ${isActive ? "opacity-90" : ""}`
        }
        style={{ color: ORANGE }}
      >
        <img src={icon} alt="" className="size-5!" /> Special offer
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="container">
        {/* Top row: logo | search | actions */}
        <div className="flex items-center justify-between gap-3 py-3 lg:py-4">
          <NavLink to="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Sun Pyramids Tours"
              className="h-9 w-30 lg:w-auto sm:h-10"
            />
          </NavLink>
          <div className="hidden lg:flex flex-1 justify-center px-6 max-w-2xl mx-auto">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
              <input
                type="search"
                placeholder="Find places and things to do"
                className="form-control rounded-full ps-10 py-3!"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className=" hidden py-2 px-4 w-fit rounded-full text-[#1D1F1F] transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white lg:flex items-center justify-center gap-2">
                  <img src={USD} alt="icon" className="size-5" />
                  <p className=" text-base font-medium ">- USD</p>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white rounded-3xl border-0">
                <AlertDialogHeader>
                  <AlertDialogTitle className="w-full">
                    <div className="flex items-center justify-between w-full">
                      <p className="text-[#1D1F1F] font-medium text-xl">
                        Language and Currency
                      </p>
                      <div className="">
                        <AlertDialogCancel className="size-11! cursor-pointer p-0! rounded-full! border border-[#EEEEEE]">
                          <img src={usd} className="size-7!" alt="" />
                        </AlertDialogCancel>
                      </div>
                    </div>
                  </AlertDialogTitle>
                  <AlertDialogDescription className=" w-full!">
                    <SelectLang />
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>

            <Link to={"/cart"}>
              <div className="border border-[#D1D5DB] rounded-full size-10 flex items-center justify-center text-[#1D1F1F] cursor-pointer hover:bg-gray-50 transition-colors">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={togel}
              className="border-[#D1D5DB] shadow-none text-[#1D1F1F] size-10"
            >
              <Menu className="size-5" />
            </Button>
            <NavLink
              to="/auth/login"
              className="hidden sm:inline-flex rounded-full border border-[#D1D5DB] bg-white px-4 py-2 text-sm font-medium text-[#1D1F1F] hover:bg-gray-50 transition-colors"
            >
              Sign in
            </NavLink>
          </div>
        </div>
        {/* link of pages */}
        {open&&<>
          <Sheet>
          <div className="p-6 space-y-6 bg-white">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] pointer-events-none" />
              <input
                type="search"
                placeholder="Find places and things to do"
                className="form-control rounded-full ps-10 py-3!"
              />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gray-100" : "hover:bg-gray-200"
                  } text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-xl w-full`
                }
              >
                Home
              </NavLink>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200">
                    Egypt Tours <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="p-0! border-0 rounded-2xl bg-white/90 shadow-lg"
                >
                  <DropdownMenuItem className="p-0! px-3">
                    <NavLink
                      to="/one-day-tours"
                      className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
                    >
                      One Day Tours
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className=" opacity-0 group-hover:opacity-100"
                      />
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0! px-3">
                    <NavLink
                      to="/one-day-tours"
                      className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
                    >
                      Multi Days Tours
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className=" opacity-0 group-hover:opacity-100"
                      />
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0! px-3">
                    <NavLink
                      to="/one-day-tours"
                      className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
                    >
                      Nile Cruises
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className=" opacity-0 group-hover:opacity-100"
                      />
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-0! px-3">
                    <NavLink
                      to="/one-day-tours"
                      className="text-base font-medium text-[#1D1F1F] hover:text-brand-blue group py-2 px-4 rounded-4xl hover:bg-gray-200 flex items-center justify-between w-full gap-2"
                    >
                      Shore Excursions
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className=" opacity-0 group-hover:opacity-100"
                      />
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <NavLink
                to="/rent-car"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gray-100" : "hover:bg-gray-50"
                  } text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-xl w-full`
                }
              >
                Rent Car
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gray-100" : "hover:bg-gray-50"
                  } text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-xl w-full`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gray-100" : "hover:bg-gray-50"
                  } text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-xl w-full`
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-gray-100" : "hover:bg-gray-50"
                  } text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-xl w-full`
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/make-your-trip"
                className="flex items-center gap-2 text-base font-semibold text-brand py-2 px-4 rounded-xl w-full hover:bg-[#FFF7ED]"
              >
                <img src={icon} alt="" className="size-5!" /> Special offer
              </NavLink>
              <button
                type="button"
                className="w-full flex items-center gap-2 py-2 px-4 rounded-xl font-medium text-[#1D1F1F] hover:bg-gray-50 text-base"
              >
                <FontAwesomeIcon icon={faGlobe} />
              </button>
              <NavLink
                to="/auth/login"
                className="w-full text-center rounded-lg border border-[#D1D5DB] py-2.5 text-sm font-medium text-[#1D1F1F]"
              >
                Sign in
              </NavLink>
              <NavLink to="/make-your-trip" className="btn1 w-full text-center">
                Make Your Trip
              </NavLink>
            </div>
          </div>
        </Sheet>
        </>}
        {/* Bottom row: main links + CTA (desktop) */}
        <div className="hidden lg:flex items-center justify-between pb-3 pt-0">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
            {bottomLinks}
          </div>
          <NavLink to="/make-your-trip" className="btn1 w-fit text-center">
            Make Your Trip
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
