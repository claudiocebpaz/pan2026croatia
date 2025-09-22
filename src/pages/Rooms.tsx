// src/pages/Rooms.tsx
import SEO from "../components/shared/SEO";
import Room from "../components/rooms/Room";
import RoomSeparator from "../components/rooms/RoomSeparator";

// import SharedRoomData from "../data/SharedRoom.json";
import IslandHomeSData from "../data/IslandHomeS.json";
import IslandHomeMData from "../data/IslandHomeM.json";
import GlampingLodgeSData from "../data/GlampingLodgeS.json";
import GlampingLodgeSSeaSunsetData from "../data/GlampingLodgeSSeaSunset.json";
import GlampingLodgeMData from "../data/GlampingLodgeM.json";
import GlampingLodgeMSeaSunsetData from "../data/GlampingLodgeMSeaSunset.json";
import OTendtData from "../data/OTent.json";

function Rooms() {
  return (
    <div>
      <SEO
        title="PAN Rooms"
        description="7-day wellness retreat featuring yoga, sound baths, and world-class DJs"
        keywords="retreat, wellness, France, DJ, yoga"
        image="/logosanctuary.webp"
      />
      <RoomSeparator
        title="O-Tents"
        subtitle="Sleep under canvas with comfort reimagined—our O-Tents blend the charm of camping with the ease of modern amenities."
        id="day-passes"
      />
      <Room roomData={OTendtData} pricingTiers={OTendtData.pricingTiers} />
      <RoomSeparator
        title="Glamping Lodges"
        subtitle="Experience eco-chic lodges that blend rustic charm with modern luxury, surrounded by breathtaking Adriatic views."
        id="double-rooms"
      />
      <Room
        roomData={GlampingLodgeMData}
        pricingTiers={GlampingLodgeMData.pricingTiers}
        layoutType="even"
      />
      <Room
        roomData={GlampingLodgeSData}
        pricingTiers={GlampingLodgeSData.pricingTiers}
      />

      <RoomSeparator
        title="Island Homes"
        subtitle="Your private eco-luxury sanctuary in the Adriatic—six days of sun, sea, and community on our very own island."
        id="single-rooms"
      />
      <Room
        roomData={IslandHomeMData}
        pricingTiers={IslandHomeMData.pricingTiers}
        layoutType="even"
      />
      <Room
        roomData={IslandHomeSData}
        pricingTiers={IslandHomeSData.pricingTiers}
      />
      <RoomSeparator
        title="Sea & Sunset Glamping Lodges"
        subtitle="The best views in the house—wake up to stunning Adriatic sunsets from your eco-luxury lodge."
        id="single-rooms"
      />
      <Room
        roomData={GlampingLodgeMSeaSunsetData}
        pricingTiers={GlampingLodgeMSeaSunsetData.pricingTiers}
        layoutType="even"
      />
      <Room
        roomData={GlampingLodgeSSeaSunsetData}
        pricingTiers={GlampingLodgeSSeaSunsetData.pricingTiers}
      />

      {/* <RoomSeparator
        title="Glamping"
        subtitle="A luxury shared glamping experience for up to 6 people"
        id="tent-rooms"
      />
      <Room roomData={TentSharedData} layoutType="even" /> */}

      {/* <Room roomData={DayPassData} /> */}

      {/* <Room roomData={RiverRoomData} />
      <Room roomData={SkylightRoomData} layoutType="even" />
      <Room roomData={PoolViewRoomData} />
      <Room roomData={BungalowRoomData} layoutType="even" />
      <Room roomData={PoolMuralRoomData} /> */}
    </div>
  );
}

export default Rooms;
