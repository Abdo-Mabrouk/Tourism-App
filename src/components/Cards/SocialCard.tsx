type Props = {
  image: string;
  icon: string;
  link: string;
  height?:string
};

export function SocialCard({ image, icon, link,height="390px" }: Props) {
  return (
    <div style={{height:`${height}`}} className="relative rounded-2xl  overflow-hidden cursor-pointer">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <img src={image} alt="" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <img src={icon} alt="" className="size-14!" />
        </div>
      </a>
    </div>
  );
}
