import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  useImageCarousel,
  DEFAULT_FADE_DURATION,
  DEFAULT_IMAGE_CHANGE_DELAY,
  ImageLibrary,
} from "../../utils/ImageUtils";

function MobileImageCarousel() {
  const imageChangeDelay = DEFAULT_IMAGE_CHANGE_DELAY;
  const allImages = ImageLibrary.getImages("about");

  return (
    <div className="md:hidden relative left-1/2 -translate-x-1/2 w-screen">
      {allImages.length > 0 && (
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: imageChangeDelay, disableOnInteraction: false }}
          loop
          speed={1000}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="w-screen"
        >
          {allImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-screen aspect-video">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-screen h-auto object-contain rounded bg-gray-50 shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

function DesktopImageMosaic() {
  const fadeDuration = DEFAULT_FADE_DURATION;
  const imageChangeDelay = DEFAULT_IMAGE_CHANGE_DELAY;
  const { slots } = useImageCarousel(
    "about",
    4,
    fadeDuration,
    imageChangeDelay
  );

  return (
    <div className="hidden md:flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
      {slots.length === 4 && (
        <>
          {/* Slot 0 */}
          <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end relative">
            <img
              key={slots[0].current.id}
              alt={slots[0].current.alt}
              src={slots[0].current.src}
              loading="eager"
              style={{ transition: `opacity ${fadeDuration}ms` }}
              className={`aspect-7/5 w-[37rem] max-w-none rounded bg-gray-50 object-cover ${
                slots[0].fading ? "opacity-0" : "opacity-100"
              }`}
            />
            {slots[0].next && (
              <img
                alt={slots[0].next.alt}
                src={slots[0].next.src}
                loading="eager"
                style={{ transition: `opacity ${fadeDuration}ms` }}
                className={`absolute top-0 left-0 aspect-7/5 w-[37rem] max-w-none rounded bg-gray-50 object-cover ${
                  slots[0].fading ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>

          <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
            {/* Slot 1 */}
            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto relative">
              <img
                key={slots[1].current.id}
                alt={slots[1].current.alt}
                src={slots[1].current.src}
                loading="eager"
                style={{ transition: `opacity ${fadeDuration}ms` }}
                className={`aspect-4/3 w-[24rem] max-w-none flex-none rounded bg-gray-50 object-cover lg:translate-x-10 ${
                  slots[1].fading ? "opacity-0" : "opacity-100"
                }`}
              />
              {slots[1].next && (
                <img
                  alt={slots[1].next.alt}
                  src={slots[1].next.src}
                  loading="eager"
                  style={{ transition: `opacity ${fadeDuration}ms` }}
                  className={`absolute top-0 left-0 aspect-4/3 w-[24rem] max-w-none flex-none rounded bg-gray-50 object-cover lg:translate-x-10 ${
                    slots[1].fading ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
            {/* Slot 2 */}
            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none relative">
              <img
                key={slots[2].current.id}
                alt={slots[2].current.alt}
                src={slots[2].current.src}
                loading="eager"
                style={{ transition: `opacity ${fadeDuration}ms` }}
                className={`aspect-7/5 w-[37rem] max-w-none flex-none rounded bg-gray-50 object-cover lg:translate-x-10 ${
                  slots[2].fading ? "opacity-0" : "opacity-100"
                }`}
              />
              {slots[2].next && (
                <img
                  alt={slots[2].next.alt}
                  src={slots[2].next.src}
                  loading="eager"
                  style={{ transition: `opacity ${fadeDuration}ms` }}
                  className={`absolute top-0 left-0 aspect-7/5 w-[37rem] max-w-none flex-none rounded bg-gray-50 object-cover lg:translate-x-10 ${
                    slots[2].fading ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
            {/* Slot 3 */}
            <div className="hidden sm:block flex-auto lg:w-auto lg:flex-none lg:translate-x-10 relative">
              <img
                key={slots[3].current.id}
                alt={slots[3].current.alt}
                src={slots[3].current.src}
                loading="eager"
                style={{ transition: `opacity ${fadeDuration}ms` }}
                className={`aspect-4/3 w-[24rem] rounded bg-gray-50 object-cover ${
                  slots[3].fading ? "opacity-0" : "opacity-100"
                }`}
              />
              {slots[3].next && (
                <img
                  alt={slots[3].next.alt}
                  src={slots[3].next.src}
                  loading="eager"
                  style={{ transition: `opacity ${fadeDuration}ms` }}
                  className={`absolute top-0 left-0 aspect-4/3 w-[24rem] rounded bg-gray-50 object-cover ${
                    slots[3].fading ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function AboutImages() {
  return (
    <>
      <MobileImageCarousel />
      <DesktopImageMosaic />
    </>
  );
}
