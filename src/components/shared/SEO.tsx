import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ title, description, keywords, image }: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let tag = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);

    // Open Graph / Twitter
    updatePropertyTag("og:title", title);
    updatePropertyTag("og:description", description);
    updatePropertyTag("twitter:title", title);
    updatePropertyTag("twitter:description", description);

    if (image) {
      updatePropertyTag("og:image", image);
      updatePropertyTag("twitter:image", image);
    }
  }, [title, description, keywords, image]);

  return null;
};

export default SEO;
