import DJTemplate from "./DJTemplate";

export default function DjMorePower() {
  return (
    <DJTemplate
      name="MorePower"
      subtitle="An immersive fitness experience with an otherworldly twist"
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/morepower.jpg"
      imageClassName="w-full max-w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="whitespace-pre-line">
            Morepower is a San Francisco-based immersive fitness experience with
            an otherworldly twist designed to dazzle and delight. Because:
            what’s better than having power?
            <br />
            <br />
            Join Morepower’s legendary <strong>Dr. Aloysius Morp</strong>,{" "}
            <strong>Certified Summoner Shahleelah Bibble</strong>, and the
            inimitable <strong>Mister A. Zello</strong> for a theatrical fitness
            journey that will leave you panting for more.
            <br />
            <br />
            Behold! Eternal release beckons with vigor.
          </p>
          <p className="mt-4 whitespace-pre-line">
            Please join us wearing fitness attire, expecting to move your body,
            sweat to dance music, summon the swarm, and open a portal to another
            dimension.
          </p>
        </>
      }
    />
  );
}
