import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

interface DJTemplateProps {
  name: React.ReactNode;
  subtitle: React.ReactNode;
  imageUrl: string;
  content: React.ReactNode;
  imageClassName?: string;
}

export default function DJTemplate({
  name,
  subtitle,
  imageUrl,
  content,
  imageClassName = "w-full h-auto rounded shadow-lg object-cover",
}: DJTemplateProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <div
        className="w-full md:w-1/2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={imageUrl}
          alt={typeof name === "string" ? name : "DJ"}
          className={imageClassName}
        />
      </div>

      <div className="md:w-2/3">
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between w-full">
            <h3 className="font-cinzel text-2xl font-semibold">{name}</h3>
            <span className="md:hidden">
              {isExpanded ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </span>
          </div>
          <p className="font-quattrocento italic mb-3 text-amber-400">
            {subtitle}
          </p>
        </div>
        <div
          className={`font-quattrocento overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-0"
          } md:max-h-full`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
