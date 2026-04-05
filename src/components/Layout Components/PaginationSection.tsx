import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationProps {
  page: number;
  last_page: number;
  setPage: (page: number) => void;
  perPage?: number;
  setPerPage?: (value: number) => void;
}

const PaginationSection: React.FC<PaginationProps> = ({
  page,
  last_page,
  setPage,
}) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < last_page) setPage(page + 1);
  };

  const getPages = () => {
    const pages: (number | string)[] = [];
    if (last_page <= 5) {
      for (let i = 1; i <= last_page; i++) pages.push(i);
    } else {
      if (page <= 3) pages.push(1, 2, 3, "...", last_page);
      else if (page >= last_page - 2)
        pages.push(1, "...", last_page - 2, last_page - 1, last_page);
      else pages.push(1, "...", page, "...", last_page);
    }
    return pages;
  };

  return (
    <div className="flex items-center lg:flex-row flex-col-reverse lg:justify-between justify-start flex-wrap gap-4 rounded-xl py-3 mt-2 ">
      <div className="">
        <p className="text-[#CCCCCC] font-normal text-base flex items-center gap-1">
          From <span className="text-[#666666]">1</span> To
          <span className="text-[#666666]">4</span> out of{" "}
          <span className="text-[#1A1A1A] font-medium">250</span> results
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={` flex items-center gap-2 text-base px-6 py-2 border rounded-full border-[#EEEEEE] bg-[#FCFCFC] cursor-pointer font-medium ${
            page === 1
              ? "text-[#8F8F90]  cursor-not-allowed!"
              : "text-[#1D1F1F] "
          }`}
        >
          <ChevronLeftIcon className="size-5" />
          Back
        </button>

        {getPages().map((p, i) =>
          p === "..." ? (
            <span
              key={i}
              className="size-11 flex items-center justify-center rounded-full cursor-pointer text-[#2B2B2B] font-semibold bg-[#FCFCFC]"
            >
              ...
            </span>
          ) : (
            <button
              key={i}
              onClick={() => setPage(Number(p))}
              className={`size-11 flex justify-center items-center cursor-pointer duration-300 transition-all rounded-full font-semibold ${
                p === page
                  ? "bg-brand-blue text-white"
                  : "border border-[#EEEEEE] text-[#1D1F1F] "
              }`}
            >
              {p}
            </button>
          ),
        )}

        <button
          onClick={handleNext}
          disabled={page === last_page}
          className={`flex items-center gap-2 text-base px-6 py-2 rounded-full bg-brand-blue text-white cursor-pointer font-medium ${
            page === last_page
              ? "text-[#8F8F90]  cursor-not-allowed!"
              : " text-[#212121] "
          }`}
        >
          Next
          <ChevronRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default PaginationSection;
