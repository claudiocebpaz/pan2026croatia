import React, { useMemo } from "react";
import { ImageLibrary } from "../../utils/ImageUtils";
import ImagesSection, { ImageItem } from "../home/ImagesSection";
import TextSection, { FeatureItem } from "../home/TextSection";
import RoomPricing from "./RoomPricing";

type RoomProps = {
  roomData: {
    text: {
      price?: string;
      tiers?: {
        label: string;
        price: string;
        note?: string;
      }[];
      title: string;
      subtitle: string;
      features: FeatureItem[];
    };
    bookingOptions?: {
      label: string;
      link: string;
      soldout: boolean;
    }[];
    imagesKey: string;
    disclaimer?: string;
  };
  layoutType?: "even" | "uneven";
  selectors?: {
    cohorts: any[];
    bookingOptions: { [key: number]: { label: string; link: string } };
    level1Options?: any[];
    level2Options?: Record<number, any[]>;
  };
};

const Room: React.FC<RoomProps> = ({ roomData, layoutType = "uneven" }) => {
  const { text, bookingOptions, imagesKey, disclaimer } = roomData;

  // 🏆 Optimización: Solo obtener imágenes una vez
  const images: ImageItem[] = useMemo(
    () => ImageLibrary.getImages(imagesKey),
    [imagesKey]
  );

  const isEvenLayout = layoutType === "even";

  return (
    <div
      className={`overflow-hidden ${
        isEvenLayout ? "bg-white" : "bg-gray-50"
      } py-12 sm:py-20`}
    >
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div
            className={`lg:col-span-8 ${
              isEvenLayout ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <ImagesSection images={images} />
          </div>

          <div
            className={`lg:col-span-4 ${
              isEvenLayout ? "lg:order-last" : "lg:order-first"
            } space-y-8`}
          >
            <TextSection
              price={text.price}
              tiers={text.tiers}
              title={text.title}
              subtitle={text.subtitle}
              features={text.features}
            />
          </div>
        </div>
      </div>
      <RoomPricing bookingOptions={bookingOptions} />

      {/* Disclaimer moved below RoomPricing */}
      {disclaimer && (
        <div className="mx-auto max-w-10xl px-6 lg:px-8 mt-2">
          <p className="text-sm text-gray-500 italic text-center">
            {disclaimer.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default Room;
