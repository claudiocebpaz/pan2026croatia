import React from "react";
import Logo from "../../assets/logosanctuary.png";

type RoomSeparatorProps = {
  title: string;
  subtitle: string;
  id: string;
};

const RoomSeparator: React.FC<RoomSeparatorProps> = ({
  title,
  subtitle,
  id,
}) => {
  return (
    <div className="bg-gray-950 py-4" id={id}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Flex container to keep the image on the left */}
        <div className="mx-auto max-w-2xl lg:mx-0 flex items-center lg:max-w-5xl">
          {/* Logo Image always on the left */}
          <div className="w-1/4 flex justify-start lg:w-1/6">
            <img
              src={Logo}
              alt={`${title} Logo`}
              className="h-24 w-auto sm:h-36"
            />
          </div>

          {/* Text block on the right */}
          <div className="mx-2 w-3/4 text-left md:-mx-2">
            <h2 className="font-cinzel text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="font-quattrocento text-sm sm:text-lg text-pretty text-gray-300">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSeparator;
