import InputWithIcon from "@/components/inputs/TextInput";
import { useState } from "react";
import icon1 from "@/assets/icon/search-normal.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataBlogs } from "@/FakeData/FakeData";
import CardBlogs from "@/components/Cards/CardBlogs";
import { Button } from "@/components/ui/button";
import icon2 from "@/assets/icon/arrow-down.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [ser, setSer] = useState("");
  const taps = [
    {
      id: 1,
      title: "ALL",
      element: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataBlogs.map((card) => (
            <Link to="/blogs-details">
              <CardBlogs dataCard={card} key={card.id} />
            </Link>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      title: "Day Tours",
      element: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataBlogs.slice(8).map((card) => (
            <Link to="/blogs-details">
              <CardBlogs dataCard={card} key={card.id} />
            </Link>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      title: "Half Day Tour",
      element: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataBlogs.slice(3, 12).map((card) => (
            <Link to="/blogs-details">
              <CardBlogs dataCard={card} key={card.id} />
            </Link>
          ))}
        </div>
      ),
    },
    {
      id: 4,
      title: "Night Tours",
      element: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataBlogs.slice(5, 20).map((card) => (
            <Link to="/blogs-details">
              <CardBlogs dataCard={card} key={card.id} />
            </Link>
          ))}
        </div>
      ),
    },
    {
      id: 5,
      title: "Layover",
      element: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataBlogs.slice(10, 15).map((card) => (
            <Link to="/blogs-details">
              <CardBlogs dataCard={card} key={card.id} />
            </Link>
          ))}
        </div>
      ),
    },
  ];
  return (
    <>
      <div className=" bg-[url(/src/assets/bg-3.svg)] bg-cover">
        <div className=" bg-linear-to-t from-[#000000] via-[#000000AF] to-[#00000000] p-10 pt-40">
          <p className="text-[#FFFFFF] text-3xl lg:text-5xl font-bold">Blogs</p>
        </div>
      </div>
      <div className=" container py-7.5 space-y-5">
        <div className="bg-[#F9FAFB] rounded-4xl p-8 flex items-center gap-4">
          <InputWithIcon
            isRequired
            placeholder="What article are you looking for"
            value={ser}
            onChange={(e) => setSer(e.target.value)}
            icon={icon1}
            className=" rounded-full!"
          />
          <button className="btn2 py-4">Search</button>
        </div>
        <Tabs defaultValue={taps?.[0]?.title} className="gap-14!">
          <TabsList className=" flex items-center w-full justify-between!">
            <div className="w-fit flex items-center gap-4">
              <p className="text-[#A5A5A5] text-base font-normal">
                Popular tags :
              </p>
              <div className="flex items-center gap-2">
                {taps.map((tab) => (
                  <TabsTrigger
                    className="py-3! px-6! rounded-full border hover:bg-gray-200! data-[state=active]:bg-gray-200! cursor-pointer  border-[#EEEEEE]"
                    key={tab.id}
                    value={tab.title}
                  >
                    <p className="capitalize text-[#333333]! font-normal! text-sm!">{`${tab.title}`}</p>
                  </TabsTrigger>
                ))}
              </div>
            </div>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-[#1D1F1F] font-medium text-base border-[#EEEEEE]! py-3! cursor-pointer rounded-full! px-5!"
                  >
                    Sort by
                    <img src={icon2} alt="" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border-[#EEEEEE]!">
                  <DropdownMenuGroup className="space-y-2!">
                    <DropdownMenuItem className="hover:bg-gray-200!">
                      Day Tours
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200!">
                      Half Day Tour
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200!">
                      Night Tours
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-gray-200!">
                      Layover
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TabsList>
          {taps.map((tab) => (
            <TabsContent key={tab.id} value={tab.title}>
              {tab.element}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
