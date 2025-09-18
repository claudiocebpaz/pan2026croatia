import DJTemplate from "./DJTemplate";

export default function DJSone() {
  return (
    <DJTemplate
      name={<strong>Sone</strong>}
      subtitle="Popera Singer, Songwriter & Performer"
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/sone.jpeg"
      imageClassName="w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            <strong>Sone</strong> is the only <strong>pop singer</strong> of her
            generation that has the <strong>voice</strong>,{" "}
            <strong>technique</strong> and <strong>power</strong> to sing over
            an orchestra and dominate an opera stage.
            <br />
            <br />
            She has the ability to balance <strong>
              vocal power
            </strong> with <em>vulnerability</em> both onstage and in the
            studio; she does the same with her lyrics, unafraid to share a piece
            of herself through each song.
            <br />
            <br />
            Sone is able to control her voice in a way that has a{" "}
            <em>unique and alluring quality</em> that draws in and entrances
            listeners, bringing to the table a new genre:{" "}
            <strong>Popera</strong>.
          </p>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            <strong>Sone</strong> sang her way through childhood.
            <br />
            <br />
            While she was born in the <strong>United States</strong>, she spent
            a great deal of time in <strong>Russia</strong>.<br />
            <br />
            At the age of 10 she flew to <strong>Moscow</strong> and opened a
            concert in the <strong>Kremlin</strong> with her grandfather,{" "}
            <strong>Vyacheslav Dobrynin</strong> – one of the most famous and
            impactful Russian pop singers from the 90s.
            <br />
            <br />
            When she was 15 she performed in <strong>
              Crocus City Hall
            </strong>{" "}
            on live television in front of a live audience of 10,000.
          </p>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            When she wasn't in Russia, <strong>Sone</strong> pursued her
            education at <strong>Pleasantville High School</strong> in{" "}
            <strong>Westchester County</strong> (<strong>New York</strong>).
            <br />
            <br />
            In her last year of high school she attended the{" "}
            <strong>Manhattan School of Music Pre-college Program</strong>,
            which then led her to pursue <strong>opera</strong>.
          </p>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            <strong>Sone</strong> left the states at 18 and moved to{" "}
            <strong>Germany</strong> for five years, learning the language and
            attaining her <strong>bachelor's degree in Opera Voice</strong> in{" "}
            <strong>Hamburg</strong>.
          </p>
        </>
      }
    />
  );
}
