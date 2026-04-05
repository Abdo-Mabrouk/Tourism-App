import starFull from "@/assets/icon/star.svg";

function Rateing({ rating = 0 }) {
  function getStar(num: number) {
    if (rating >= num) {
      return <img src={starFull} alt="full" className=" size-4.5! md:size-6!" />;
    } else if (rating >= num - 0.5) {
      return <img src={starFull} alt="half" className=" size-4.5! md:size-6! grayscale" />;
    } else {
      return <img src={starFull} alt="empty" className=" size-4.5! md:size-6! grayscale" />;
    }
  }

  return (
    <div className="icon flex gap-0.5 md:gap-1 items-center text-amber-300">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} className="inline-block">
          {getStar(num)}
        </span>
      ))}
    </div>
  );
}

export default Rateing;
