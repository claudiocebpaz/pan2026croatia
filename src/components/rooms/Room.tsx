import React, { useMemo, useState } from "react";
import { ImageLibrary } from "../../utils/ImageUtils";
import ImagesSection, { ImageItem } from "../home/ImagesSection";
import TextSection, { FeatureItem } from "../home/TextSection";
import SelectorSection, {
  CohortItem,
  Level1Option,
  Level2Option,
} from "../home/SelectorSection";
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
    cohorts: CohortItem[];
    bookingOptions: { [key: number]: { label: string; link: string } };
    level1Options?: Level1Option[];
    level2Options?: Record<number, Level2Option[]>;
  };
};

const Room: React.FC<RoomProps> = ({
  roomData,
  layoutType = "uneven",
  selectors,
}) => {
  const { text, bookingOptions, imagesKey, disclaimer } = roomData;

  const cohorts: CohortItem[] = selectors?.cohorts || [];
  const level1Options = selectors?.level1Options;
  const level2Options = selectors?.level2Options;

  // 🏆 Optimización: Solo obtener imágenes una vez
  const images: ImageItem[] = useMemo(
    () => ImageLibrary.getImages(imagesKey),
    [imagesKey]
  );

  // State for hierarchical selection
  const [selectedLevel1, setSelectedLevel1] = useState<Level1Option | null>(
    level1Options?.[0] || null
  );
  const [selectedLevel2, setSelectedLevel2] = useState<Level2Option | null>(
    null
  );

  // State for legacy cohort selection
  const availableCohorts = useMemo(
    () => cohorts.filter((cohort) => !cohort.soldout),
    [cohorts]
  );
  const defaultSelected = useMemo(
    () => (availableCohorts.length ? availableCohorts[0] : cohorts[0]),
    [availableCohorts, cohorts]
  );
  const [selectedCohort, setSelectedCohort] = useState<CohortItem>(
    defaultSelected || cohorts[0]
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

        {/* Selector moved below photos and descriptions */}
        <div className="mt-8">
          {selectors ? (
            level1Options && level2Options ? (
              <SelectorSection
                level1Options={level1Options}
                level2Options={level2Options}
                selectedLevel1={selectedLevel1}
                setSelectedLevel1={setSelectedLevel1}
                selectedLevel2={selectedLevel2}
                setSelectedLevel2={setSelectedLevel2}
              />
            ) : cohorts.length > 0 ? (
              <SelectorSection
                cohorts={cohorts}
                bookingOptions={selectors.bookingOptions}
                selectedCohort={selectedCohort}
                setSelectedCohort={setSelectedCohort}
              />
            ) : (
              <div className="text-center text-gray-500">
                No booking options available
              </div>
            )
          ) : (
            <SelectorSection bookingOptions={bookingOptions || []} />
          )}
        </div>

        {/* Disclaimer moved below selector */}
        {disclaimer && (
          <p className="mt-4 text-sm text-gray-500 italic text-center">
            {disclaimer.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      <RoomPricing bookingOptions={bookingOptions} />
    </div>
  );
};

export default Room;
