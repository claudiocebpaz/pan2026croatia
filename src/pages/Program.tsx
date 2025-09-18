import SEO from "../components/shared/SEO";
import ActivitiesHeader from "../components/activities/ActivitiesHeader";
import ActivitiesTimeline from "../components/activities/ActivitiesTimeline";


const Program = () => {
  return (
    <>
      <SEO
        title="PAN Program"
        description="7-day wellness retreat featuring yoga, sound baths, and world-class DJs"
        keywords="retreat, wellness, France, DJ, yoga"
        image="/logosanctuary.webp"
      />
      <ActivitiesHeader />
      <ActivitiesTimeline />
    </>
  );
};

export default Program;
