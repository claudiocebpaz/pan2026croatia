import DJTemplate from "./DJTemplate";

export default function DJErikaAlkemiss() {
  return (
    <DJTemplate
      name="Alkemiss Erika"
      subtitle={
        <>
          <strong>San Francisco-based DJ</strong> and <strong>producer</strong>{" "}
          whose musical journey is deeply rooted in the vibrant{" "}
          <strong>'90s rave scene</strong>.
        </>
      }
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/erikaalkemiss.jpeg"
      imageClassName="w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="font-quattrocento mb-3 whitespace-pre-line">
            Her sound is a captivating blend of <strong>deep</strong>,{" "}
            <strong>organic</strong>, <strong>melodic</strong>, and{" "}
            <strong>progressive</strong> elements, crafting{" "}
            <em>immersive soundscapes</em> that forge{" "}
            <em>profound connections</em> on the <strong>dance floor</strong>.
          </p>
          <p className="whitespace-pre-line">
            <strong>Erika</strong>'s talent has earned her performances
            alongside renowned artists such as <strong>Armen Miran</strong>,{" "}
            <strong>Volen Sentir</strong>, <strong>Sahar Z</strong>,{" "}
            <strong>Jimi Jules</strong>, <strong>Unders</strong>,{" "}
            <strong>Mita Gami</strong>, <strong>Budakid</strong>,{" "}
            <strong>Sabo</strong>, <strong>Niki Sadeki</strong> and more.
            <br />
            <br />
            Playing at iconic venues in <strong>SF</strong>:{" "}
            <strong>Audio</strong>, <strong>The Midway</strong>, and{" "}
            <strong>Public Works</strong>, and in <strong>Miami</strong> at{" "}
            <strong>Do Not Sit on the Furniture</strong>.<br />
            <br />
            Also playing internationally in <strong>Panama</strong> at{" "}
            <strong>Radio Venao</strong> gatherings, <strong>Colombia</strong>,
            and <strong>Israel</strong>.
          </p>
          <p className="mt-4 whitespace-pre-line">
            Her tracks are characterized by <strong>hypnotic rhythms</strong>,{" "}
            <strong>lush atmospheres</strong>, and{" "}
            <strong>emotive melodies</strong> that resonate with listeners on a{" "}
            <em>profound level</em>, channeling her life experiences into every
            production.
            <br />
            <br />
            Drawing inspiration from <strong>world music</strong>, Erika infuses
            her tracks with <strong>tribal percussion</strong> and{" "}
            <strong>ethereal, desert-inspired textures</strong>.<br />
            <br />
            This unique approach has caught the attention of prominent artists
            and labels in the <strong>electronic music scene</strong>.<br />
            <br />
            As she continues to evolve her sound,{" "}
            <strong>Alkemiss Erika</strong> focuses on crafting releases that{" "}
            <em>capture the energy</em> of her{" "}
            <strong>live performances</strong>.
          </p>
        </>
      }
    />
  );
}
