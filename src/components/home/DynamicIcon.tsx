// src/components/DynamicIcon.tsx

// Import React and Suspense for lazy loading
import React, { Suspense } from "react";
// Import the heroicons mapping we defined
import { heroicons } from "../../utils/icons.ts";

// Define props for the DynamicIcon component
type DynamicIconProps = {
  iconName: string; // The icon name coming from JSON (e.g., "HomeIcon")
  className?: string; // Optional CSS classes for styling the icon
};

/**
 * DynamicIcon component dynamically imports and renders the icon specified by iconName.
 * It uses the mapping from src/icons/heroicons.ts so that only the required icons are loaded.
 */
const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, className }) => {
  // Get the dynamic import function for the requested icon
  const importer = heroicons[iconName];

  // If the icon is not found in the mapping, log an error and return null.
  if (!importer) {
    console.error(`Icon ${iconName} not found in heroicons mapping.`);
    return null;
  }

  // Lazy-load the icon component (casting to the expected type)
  const IconComponent = React.lazy(
    importer as () => Promise<{ default: React.ComponentType<any> }>
  );

  return (
    // Wrap with Suspense to handle the lazy loading state.
    <Suspense fallback={null}>
      <IconComponent className={className} aria-hidden="true" />
    </Suspense>
  );
};

export default DynamicIcon;
