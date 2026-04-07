import { Button } from "@/components/ui/button";
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
import { Menu, ChevronDown } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/icon/logo.svg";
import closeIcon from "@/assets/icon/close.svg";
import usd from "@/assets/icon/global.svg";
import { Link, NavLink } from "react-router-dom";
import SelectLang from "@/paga/Auth/components/SelectLang";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-white">
      <div className="container flex items-center justify-between">
        <div>
          <img src={logo} alt="" className=" w-30 lg:w-57.5 h-auto" />
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          <NavLink
            to="/"
            className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
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
            to="/about"
            className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
          >
            Blogs
          </NavLink>
        </div>

        <div className="items-center gap-2 hidden lg:flex">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className=" py-2 px-4 w-fit rounded-full text-[#1D1F1F] transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white flex items-center justify-center gap-2">
                <img src={usd} alt="icon" className="size-5" />
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
                        <img src={closeIcon} className="size-7!" alt="" />
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
          <NavLink to="/auth/login" className="btn1">
            Sign in
          </NavLink>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center gap-2 lg:hidden">
              <Link to={"/cart"}>
                <div className="border border-[#EEEEEE] rounded-full size-11 flex items-center justify-center text-[#1D1F1F]">
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
              </Link>

              <div className="border border-[#EEEEEE] rounded-full size-11 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none shadow-none text-[#1D1F1F] size-12"
                >
                  <Menu className="size-5" />
                </Button>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 space-y-6 bg-white">
            <div className="flex flex-col gap-2 items-start">
              <NavLink
                to="/"
                className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/blogs"
                className="text-base font-medium text-[#1D1F1F] py-2 px-4 rounded-4xl hover:bg-gray-200"
              >
                Blogs
              </NavLink>
              <NavLink to="/auth/login" className="btn1">
                Sign in
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
