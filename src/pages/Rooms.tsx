// src/pages/Rooms.tsx
import SEO from "../components/shared/SEO";
import Room from "../components/rooms/Room";
import RoomSeparator from "../components/rooms/RoomSeparator";

import CastleSuiteData from "../data/CastleSuite.json";
// import SharedRoomData from "../data/SharedRoom.json";
import CastleSharedData from "../data/CastleShared.json";
import DayPassData from "../data/DayPass.json";
import CottageSharedData from "../data/CottageShared.json";
import TentSharedData from "../data/TentShared.json";
import IslandHomeSData from "../data/IslandHomeS.json";
import IslandHomeMData from "../data/IslandHomeM.json";

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
        title="Island Homes"
        subtitle="Your private eco-luxury sanctuary in the Adriatic—six days of sun, sea, and community on our very own island."
        id="single-rooms"
      />
      <Room
        roomData={IslandHomeSData}
        pricingTiers={IslandHomeSData.pricingTiers}
      />
      <Room
        roomData={IslandHomeMData}
        pricingTiers={IslandHomeMData.pricingTiers}
        layoutType="even"
      />

      <RoomSeparator
        title="Shared Rooms"
        subtitle="Where friends unwind, stories unfold, and memories are shared under one roof."
        id="double-rooms"
      />
      <Room roomData={CastleSharedData} layoutType="even" />
      <Room roomData={CottageSharedData} />
      <RoomSeparator
        title="Glamping"
        subtitle="A luxury shared glamping experience for up to 6 people"
        id="tent-rooms"
      />
      <Room roomData={TentSharedData} layoutType="even" />

      <RoomSeparator
        title="Day/Night Play Pass"
        subtitle="6 days of music, magic, zero responsibilities—just vibes, views, and birthday mischief."
        id="day-passes"
      />
      <Room roomData={DayPassData} />

      {/* <Room roomData={RiverRoomData} />
      <Room roomData={SkylightRoomData} layoutType="even" />
      <Room roomData={PoolViewRoomData} />
      <Room roomData={BungalowRoomData} layoutType="even" />
      <Room roomData={PoolMuralRoomData} /> */}
    </div>
  );
}

export default Rooms;
