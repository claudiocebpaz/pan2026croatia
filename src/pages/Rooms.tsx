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
        title="Single Rooms"
        subtitle="Step into a birthday dream—refined suites where comfort meets celebration."
        id="single-rooms"
      />
      <Room roomData={IslandHomeSData} />
      <Room roomData={CastleSuiteData} />

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
      <Room
        roomData={TentSharedData}
        layoutType="even"
        selectors={{
          level1Options: TentSharedData.selectors.level1Options,
          level2Options: TentSharedData.selectors.level2Options,
          cohorts: TentSharedData.selectors.legacy.cohorts,
          bookingOptions: TentSharedData.selectors.legacy.bookingOptions,
        }}
      />

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
