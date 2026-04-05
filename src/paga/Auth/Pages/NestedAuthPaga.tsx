import { Outlet, ScrollRestoration } from "react-router";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SelectLang from "../components/SelectLang";

function NestedAuthPaga() {
  return (
    <div className=" h-auto mih-h-screen p-5 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className=" px-0 md:px-20 lg:px-30 space-y-5">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="border py-2 px-4 w-fit rounded-full text-[#1D1F1F] transition-colors duration-300 cursor-pointer hover:bg-black hover:text-white border-[#EEEEEE] flex items-center justify-center gap-2">
              <img
                src="/src/assets/icon/global.svg"
                alt="icon"
                className="size-5"
              />
              <p className=" text-base font-medium ">English </p>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white rounded-3xl border-0">
            <AlertDialogHeader >
              <AlertDialogTitle className="w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#1D1F1F] font-medium text-xl">
                    Language and Currency
                  </p>
                  <div className="">
                    <AlertDialogCancel className="size-11! cursor-pointer p-0! rounded-full! border border-[#EEEEEE]">
                      <img
                        src="/src/assets/icon/close.svg"
                        className="size-7!"
                        alt=""
                      />
                    </AlertDialogCancel>
                  </div>
                </div>
              </AlertDialogTitle>
              <AlertDialogDescription className=" w-full!">
                <SelectLang/>
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
        <ScrollRestoration />
        <Outlet />
      </div>
      <div className=" hidden lg:block overflow-hidden rounded-4xl max-h-160 ">
        <img
          src="/src/assets/nnnnnn.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default NestedAuthPaga;
