import React, { useMemo } from "react";
import DynamicIcon from "./DynamicIcon";

export type FeatureItem = {
  name: string;
  description: string;
  icon: string;
};

type Tier = {
  label: string;
  price: string;
  note?: string;
};

type TextSectionProps = {
  price?: string;
  tiers?: Tier[];
  title: string;
  subtitle: string;
  features: FeatureItem[];
};

const TextSection: React.FC<TextSectionProps> = ({
  price,
  tiers,
  title,
  subtitle,
  features,
}) => {
  // 🏆 Memoiza la lista de características para evitar cálculos innecesarios
  const renderedFeatures = useMemo(() => {
    return features.map((feature) => (
      <div key={feature.name} className="relative pl-9 mb-4">
        <dt className="inline font-semibold text-gray-900">
          <DynamicIcon
            iconName={feature.icon}
            className="absolute top-1 left-1 w-5 h-5 text-gray-700"
          />
          {feature.name}. <br />
        </dt>
        <dd
          className="inline text-sm"
          dangerouslySetInnerHTML={{ __html: feature.description }}
        />
      </div>
    ));
  }, [features]);

  return (
    <div className="font-inter order-2 lg:col-span-4 lg:order-1">
      {tiers ? (
        <div className="space-y-2">
          {tiers.map((tier) => (
            <div key={`${tier.label}-${tier.price}`}>
              <h2 className="text-md font-semibold text-gray-700">
                {tier.label} - {tier.price}
                {tier.note && (
                  <span className="ml-2 px-1.5 py-0.5 text-xs font-medium text-red-500 border border-red-500 rounded">
                    {tier.note}
                  </span>
                )}
              </h2>
            </div>
          ))}
        </div>
      ) : price ? (
        <h2 className="text-md font-semibold text-gray-700 mb-0.5">{price}</h2>
      ) : null}
      <p className="font-quattrocento mt-1 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        {title}
      </p>
      <p className="font-lora mt-2 text-lg text-gray-600">{subtitle}</p>
      <dl className="mt-6 space-y-8 text-base text-gray-600">
        {renderedFeatures}
      </dl>
    </div>
  );
};

export default TextSection;
