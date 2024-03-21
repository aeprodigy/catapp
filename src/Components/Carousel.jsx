import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image1 from "./carousel/Image1";
import Image2 from "./carousel/Image2";
import Image3 from "./carousel/Image3";
import Image4 from "./carousel/Image4";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div>
    <h1 className="text-center text-2xl text-gray-700 ">Today's Pick</h1>
      <div
        className="embla  max-w-[700px] m-auto w-full px-4 py-4 h-[500px]"
        ref={emblaRef}
      >
        <div className="embla__container">
          <div className="embla__slide p-4">
            <Image1 />
          </div>
          <div className="embla__slide p-4">
            <Image2 />
          </div>
          <div className="embla__slide p-4">
            <Image3 />
          </div>
          <div className="embla__slide p-4">
            <Image4 />
          </div>
        </div>
      </div>
    </div>
  );
}
