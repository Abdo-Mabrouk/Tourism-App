export default function TeamCard({
  img,
  name,
  position,
}: {
  img: string;
  name: string;
  position: string;
}) {
  return (
    <div>
      <div className="lg:py-6 lg:px-4 p-4 rounded-4xl border border-[#E6E6E6] flex flex-col items-center justify-center gap-2 lg:gap-4">
        <img
          src={img}
          alt={`Photo of the employee ${name}`}
          className=" size-25 lg:size-34 rounded-4xl object-cover"
        />
        <div className="space-y-1 text-center">
          <p className=" text-base lg:text-2xl text-[#125E87] font-medium capitalize">
            {name}
          </p>
          <p className=" text-xs lg:text-base text-[#666666] font-normal capitalize">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
