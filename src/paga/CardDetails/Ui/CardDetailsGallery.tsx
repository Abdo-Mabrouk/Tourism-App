import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import img1 from "@/assets/Blogs-1.svg";
import img2 from "@/assets/Blogs-2.svg";
import img3 from "@/assets/Blogs-3.svg";
import img4 from "@/assets/Blogs-4.svg";
import img5 from "@/assets/Blogs-5.svg";
import img6 from "@/assets/Blogs-6.svg";
import img7 from "@/assets/Blogs7.svg";
import img8 from "@/assets/Blogs-8.svg";
import img9 from "@/assets/Blogs-9.svg";
import img10 from "@/assets/Blogs-10.svg";
import img11 from "@/assets/Blogs-11.svg";
import img12 from "@/assets/Blogs-12.svg";
import img13 from "@/assets/Blogs-13.svg";
import iconPlay from "@/assets/icon/play1.svg";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Maximize,
  Minimize,
  Pause,
} from "lucide-react";

export default function CardDetailsGallery() {
  const images: GalleryItem[] = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
  ];
  const galleryRef = useRef<ImageGalleryRef>(null);
  return (
    <div>
      <ImageGallery
        ref={galleryRef}
        items={images}
        onSlide={(index) => console.log("Slid to", index)}
        showPlayButton={true}
        showFullscreenButton={true}
        showNav={true}
        showThumbnails={true}
        thumbnailPosition="bottom"
        autoPlay={false}
        renderLeftNav={(onClick, disabled) => (
          <button
            className="size-11 absolute top-1/2 start-3 -translate-y-1/2 cursor-pointer z-30 rounded-full bg-[#1D1F1FCC] hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center text-white"
            onClick={onClick}
            disabled={disabled}
          >
            <ChevronLeftIcon className="size-5" />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button
            className="size-11 absolute top-1/2 end-3 -translate-y-1/2 cursor-pointer z-30 rounded-full bg-[#1D1F1FCC] hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center text-white"
            onClick={onClick}
            disabled={disabled}
          >
            <ChevronRightIcon className="size-5" />
          </button>
        )}
        renderPlayPauseButton={(onClick, isPlaying) => (
          <button
            onClick={onClick}
            className="size-18 absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer z-30 rounded-full bg-[#1D1F1FCC] hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause className="size-8 text-white" />
            ) : (
              <img src={iconPlay} alt="" className="size-8" />
            )}
          </button>
        )}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            onClick={onClick}
            className="size-10 absolute bottom-5 end-5 text-white cursor-pointer z-30 rounded-full bg-[#1D1F1FCC] hover:bg-brand-blue transition-colors duration-200 flex items-center justify-center"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={18} />}
          </button>
        )}
      />
    </div>
  );
}
