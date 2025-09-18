import Timeline from "./Timeline";
import events from "../../data/Events.json";

export default function ActivitiesTimeline() {
  return (
    <div className="bg-gray-50">
      {/* Same container width as ActivitiesHeader */}
      <div className="mx-auto max-w-7xl px-6 lg:ml-auto">
        <div className="max-w-6xl py-12 w-full">
          <Timeline events={events} />
        </div>
      </div>
    </div>
  );
}
