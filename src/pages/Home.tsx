// src/pages/Home.tsx
import SEO from "../components/shared/SEO";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Hosts from "../components/home/Hosts";
import Sanctuary from "../components/home/Sanctuary";
// import RoomsOverview from "../components/home/RoomsOverview";
// import FAQ from "../components/home/FAQ";
import CohortDates from "../components/home/CohortDates";


function Home() {
  return (
    <>
      <SEO
        title="PAN - Sanctuary"
        description="7-day wellness retreat featuring yoga, sound baths, and world-class DJs"
        keywords="retreat, wellness, Croatia, DJ, yoga"
        image="/logosanctuary.webp"
      />
      <Hero />
      <CohortDates />
      <About />
      <Hosts />
      <Sanctuary />
      {/* <RoomsOverview /> */}
      {/* <FAQ /> */}
    </>
  );
}

export default Home;
