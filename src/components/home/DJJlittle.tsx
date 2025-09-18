import DJTemplate from "./DJTemplate";

export default function DJJlittle() {
  return (
    <DJTemplate
      name="JLittle"
      subtitle={
        <>
          <strong>Live DJ</strong> & <strong>Music Producer</strong>
        </>
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/JLittle.jpeg"
      imageClassName="w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      
      content={
        <>
          <p className="whitespace-pre-line">
            <strong>JLittle</strong> first got behind the decks in{" "}
            <strong>2021</strong>.<br />
            <br />
            She exploded onto the scene in <strong>San Francisco, CA</strong> as
            crowds connected with her <em>captivating</em>,{" "}
            <em>passion-filled</em>, <em>high energy sets</em>.<br />
            <br />
            She uniquely weaves together genres including{" "}
            <strong>techno</strong>, <strong>indie dance</strong>,{" "}
            <strong>tech-house</strong>, <strong>hard dance</strong>,{" "}
            <strong>latin tech</strong>, and <strong>afro-house</strong>.<br />
            <br />
            She runs a music events & promotions company{" "}
            <strong>&#123;Soundproof&#125;</strong>, and a record label{" "}
            <strong>&#123;Soundproof Records&#125;</strong>.<br />
            <br />
            <strong>JLittle</strong> has rapidly established herself as a{" "}
            <strong>rising force</strong> in the industry, playing in numerous{" "}
            <strong>states</strong> and <strong>countries</strong> and is now
            focused on <strong>music production</strong>, with her first release
            in <strong>2024</strong>.
          </p>
          <p className="mt-4 whitespace-pre-line">
            Beyond the Bay Area's biggest venues, she's played:
            <br />
            <br />
            <strong>Splash House Festival</strong> – Palm Springs, CA
            <br />
            <strong>John Summit Presents Experts Only</strong> – Tahoe, NV
            <br />
            <strong>Frisco, CO</strong> / <strong>Portland, OR</strong> /{" "}
            <strong>Los Angeles, CA</strong> / <strong>Breckenridge, CO</strong>
            <br />
            <strong>Reno, NV</strong> / <strong>Tempe, AZ</strong> /{" "}
            <strong>Burning Man, NV</strong> / <strong>Paris, France</strong> /{" "}
            <strong>Sacramento, CA</strong>
            <br />
            <strong>Fresh Start Festival</strong> – San Francisco, CA
            <br />
            <strong>Day to Night Festival</strong> – Treasure Island, CA
            <br />
            <strong>Shredfest</strong> – Wilseyville, CA
            <br />
            <strong>Outer Limits Festival</strong> – San Francisco, CA
          </p>
        </>
      }
    />
  );
}
