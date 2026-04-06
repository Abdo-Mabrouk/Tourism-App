import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ReactElement } from "react";

type TabItem = {
  id?: number;
  title: string;
  icon?: string;
  iconActive?: string;
  element: ReactElement;
  onClick?: () => void;
};

type TapsComponentsProps = {
  taps: TabItem[];
  TabsClassName?: string;
  TabsListClassName?: string;
  TabsTriggerClassName?: string;
  TabsContentClassName?: string;
  isReverse?: boolean;
};

export default function TapsComponents({
  taps,
  TabsClassName,
  TabsListClassName,
  TabsTriggerClassName,
  TabsContentClassName,
  isReverse = false,
}: TapsComponentsProps) {
  return (
    <Tabs defaultValue={taps?.[0]?.title} className={` ${TabsClassName}`}>
      <TabsList className={` ${TabsListClassName}`}>
        <div className="w-full flex items-center gap-4  ">
          {taps.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.title}
              className={`group ${TabsTriggerClassName}`}
              onClick={(e) => {
                if (tab.onClick) {
                  e.preventDefault(); 
                  tab.onClick();
                }
              }}
            >
              <div className="flex items-center gap-2.5">
                {isReverse ? (
                  <>
                    {/* icon */}
                    {tab.icon && (
                      <span className="block size-4 group-data-[state=active]:hidden">
                        <img src={tab.icon} alt={`icon ${tab.title}`} />
                      </span>
                    )}

                    {/* active icon */}
                    {tab.iconActive && (
                      <span className="hidden size-4 group-data-[state=active]:block">
                        <img src={tab.iconActive} alt={`icon ${tab.title}`} />
                      </span>
                    )}

                    <p className="capitalize">{tab.title}</p>
                  </>
                ) : (
                  <>
                    <p className="capitalize">{tab.title}</p>

                    {/* icon */}
                    {tab.icon && (
                      <span className="block size-6 group-data-[state=active]:hidden">
                        <img src={tab.icon} alt={`icon ${tab.title}`} />
                      </span>
                    )}

                    {/* active icon */}
                    {tab.iconActive && (
                      <span className="hidden size-6 group-data-[state=active]:block">
                        <img src={tab.iconActive} alt={`icon ${tab.title}`} />
                      </span>
                    )}
                  </>
                )}
              </div>
            </TabsTrigger>
          ))}
        </div>
      </TabsList>

      {taps.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.title}
          className={` max-w-screen ${TabsContentClassName}`}
        >
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
}
