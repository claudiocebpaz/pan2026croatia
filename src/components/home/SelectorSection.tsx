import React, { useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export type Level1Option = {
  id: number;
  title: string;
  description: string | { __html: string };
};

export type Level2Option = {
  id: number;
  title: string;
  description: string | { __html: string };
  link: string;
  soldout: boolean;
  oneSpotLeft?: boolean;
};

export type CohortItem = {
  id: number;
  title: string;
  description: string | { __html: string };
  soldout: boolean;
  oneSpotLeft?: boolean;
};

type SelectorSectionProps =
  | {
      level1Options: Level1Option[];
      level2Options: Record<number, Level2Option[]>;
      selectedLevel1: Level1Option | null;
      setSelectedLevel1: (option: Level1Option | null) => void;
      selectedLevel2: Level2Option | null;
      setSelectedLevel2: (option: Level2Option | null) => void;
    }
  | {
      cohorts: CohortItem[];
      bookingOptions: { [key: number]: { label: string; link: string } };
      selectedCohort: CohortItem;
      setSelectedCohort: (cohort: CohortItem) => void;
    }
  | {
      bookingOptions: {
        label: string;
        link: string;
        soldout: boolean;
      }[];
    };

const SelectorSection: React.FC<SelectorSectionProps> = (props) => {
  // Handle hierarchical selection
  if ("level1Options" in props) {
    const {
      level1Options,
      level2Options,
      selectedLevel1 = null,
      setSelectedLevel1,
      selectedLevel2 = null,
      setSelectedLevel2,
    } = props;

    // Reset selections on mount
    useEffect(() => {
      setSelectedLevel1(null);
      setSelectedLevel2(null);
    }, []);

    // Reset Level 2 when Level 1 changes
    useEffect(() => {
      if (selectedLevel1) {
        if (
          selectedLevel2 &&
          !level2Options[selectedLevel1.id]?.some(
            (opt) => opt.id === selectedLevel2.id
          )
        ) {
          setSelectedLevel2(null);
        }
      } else {
        setSelectedLevel1(null);
        setSelectedLevel2(null);
      }
    }, [selectedLevel1, level2Options, selectedLevel2]);

    const isButtonDisabled = !selectedLevel2 || selectedLevel2.soldout;

    return (
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Tent Options</h3>
        <RadioGroup
          value={selectedLevel1}
          onChange={setSelectedLevel1}
          className="space-y-4"
        >
          {level1Options.map((option) => (
            <div key={option.id} className="space-y-2">
              <RadioGroup.Option
                value={option}
                className={({ checked }) =>
                  `min-h-20 relative flex w-full cursor-pointer rounded-lg border bg-white p-3 shadow-xs focus:outline-none ${
                    checked
                      ? "border-yellow-300 ring-1 ring-yellow-300 bg-yellow-50"
                      : "border-gray-300"
                  }`
                }
              >
                {({ checked }) => (
                  <>
                    <span className="flex flex-1 flex-col space-y-1">
                      <span className="block text-sm font-medium text-gray-900 break-words">
                        {option.title}
                      </span>
                      <span
                        className="text-sm text-gray-500 break-words"
                        dangerouslySetInnerHTML={
                          typeof option.description === "string"
                            ? { __html: option.description }
                            : option.description
                        }
                      />
                    </span>
                    {checked && (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-7 text-gray-700"
                      />
                    )}
                  </>
                )}
              </RadioGroup.Option>

              {selectedLevel1?.id === option.id && (
                <div className="transition-all duration-300 ease-in-out">
                  <RadioGroup
                    value={selectedLevel2}
                    onChange={setSelectedLevel2}
                    className="space-y-2 ml-4"
                  >
                    {level2Options[option.id]?.map((level2Option) => (
                      <RadioGroup.Option
                        key={level2Option.id}
                        value={level2Option}
                        disabled={level2Option.soldout}
                        className={({ checked }) =>
                          `h-16 relative flex w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-3 shadow-xs focus:outline-none ${
                            checked
                              ? "border-yellow-300 ring-1 ring-yellow-300 bg-yellow-50"
                              : "opacity-60 hover:opacity-100 transition-opacity duration-200 !important"
                          } ${
                            level2Option.soldout
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`
                        }
                      >
                        {({ checked }) => (
                          <>
                            <span className="flex flex-1 flex-col">
                              <span className="block text-sm font-medium text-gray-900">
                                {level2Option.title}
                                {level2Option.soldout && (
                                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                                    Sold Out
                                  </span>
                                )}
                                {!level2Option.soldout &&
                                  level2Option.oneSpotLeft && (
                                    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-2 text-xs font-medium text-yellow-700">
                                      One Spot Left
                                    </span>
                                  )}
                              </span>
                              <span
                                className="-mt-0.5 text-sm text-gray-500"
                                dangerouslySetInnerHTML={
                                  typeof level2Option.description === "string"
                                    ? { __html: level2Option.description }
                                    : level2Option.description
                                }
                              />
                            </span>
                            {checked && (
                              <CheckCircleIcon
                                aria-hidden="true"
                                className="h-7 w-7 text-gray-700"
                              />
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div>
              )}
            </div>
          ))}
        </RadioGroup>

        <div className="mt-8">
          <a
            href={selectedLevel2?.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center w-full px-4 py-2 bg-yellow-300 text-gray-700 rounded transition-colors ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-500"
            }`}
            onClick={(e) => {
              if (isButtonDisabled) e.preventDefault();
            }}
          >
            {selectedLevel2
              ? `Book Now - ${
                  typeof selectedLevel2.description === "string"
                    ? selectedLevel2.description
                    : "Selected Option"
                }`
              : "Please select tent"}
          </a>
        </div>
      </div>
    );
  }

  // Handle cohort-based selection (legacy)
  if ("cohorts" in props) {
    const { cohorts, bookingOptions, selectedCohort, setSelectedCohort } =
      props;

    const isButtonDisabled =
      cohorts.every((cohort) => cohort.soldout) || selectedCohort.soldout;

    return (
      <div>
        <div className="mt-8">
          <RadioGroup
            value={selectedCohort}
            onChange={setSelectedCohort}
            className="flex flex-col gap-4"
          >
            {cohorts.map((cohort) => (
              <RadioGroup.Option
                key={cohort.id}
                value={cohort}
                disabled={cohort.soldout}
                className={({ checked }) =>
                  `h-16 relative flex w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-3 shadow-xs focus:outline-none ${
                    checked ? "border-gray-700 ring-2 ring-gray-700" : ""
                  } ${cohort.soldout ? "opacity-50 cursor-not-allowed" : ""}`
                }
              >
                {({ checked }) => (
                  <>
                    <span className="flex flex-1 flex-col">
                      <span className="block text-sm font-medium text-gray-900">
                        {cohort.title}
                        {cohort.soldout && (
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                            Sold Out
                          </span>
                        )}
                        {!cohort.soldout && cohort.oneSpotLeft && (
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-2 py-2 text-xs font-medium text-yellow-700">
                            One Spot Left
                          </span>
                        )}
                      </span>
                      <span
                        className="-mt-0.5 text-sm text-gray-500"
                        dangerouslySetInnerHTML={
                          typeof cohort.description === "string"
                            ? { __html: cohort.description }
                            : cohort.description
                        }
                      />
                    </span>
                    {checked && (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-7 text-gray-700"
                      />
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="mt-8">
          <a
            href={bookingOptions[selectedCohort.id].link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-center w-full px-4 py-2 bg-yellow-300 text-gray-700 rounded transition-colors ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-500"
            }`}
            onClick={(e) => {
              if (isButtonDisabled) e.preventDefault();
            }}
          >
            {bookingOptions[selectedCohort.id].label}
          </a>
        </div>
      </div>
    );
  }

  // Fallback legacy rendering
  const { bookingOptions } = props;
  const hasAvailableOption = bookingOptions.some((item) => !item.soldout);

  return (
    <div>
      <div className="mt-2 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        {bookingOptions.map((item, index) => (
          <a
            key={index}
            href={item.soldout ? "#" : item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2 bg-yellow-300 text-gray-700 rounded transition-colors ${
              item.soldout
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-yellow-500"
            }`}
            onClick={(e) => {
              if (item.soldout) e.preventDefault();
            }}
          >
            <span className="font-bold">{item.label}</span>
          </a>
        ))}
      </div>
      {hasAvailableOption && (
        <p className="mt-2 text-center text-sm text-gray-500">
          Buy now Pay later option available.
        </p>
      )}
    </div>
  );
};

export default SelectorSection;
