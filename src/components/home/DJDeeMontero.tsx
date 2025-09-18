import DJTemplate from "./DJTemplate";

export default function DjDeeMontero() {
  return (
    <DJTemplate
      name="Dee Montero"
      subtitle={
        <>
          <strong>DJ</strong>, <strong>Producer</strong> &{" "}
          <strong>Founder of Futurescope</strong>
        </>
      }
      imageUrl="https://whenwedip.com/wp-content/uploads/2024/03/Dee-Montero.jpg"
      content={
        <>
          <p className="whitespace-pre-line">
            <strong>Dee Montero</strong> is a{" "}
            <strong>Belfast-born DJ and producer</strong> whose global journey
            spans over <strong>two decades</strong> in the electronic music
            scene.
            <br />
            <br />
            From his early days as resident DJ at{" "}
            <strong>Café Mambo in Ibiza</strong> to international stages like{" "}
            <strong>Burning Man's Robot Heart</strong> and{" "}
            <strong>Carl Cox's Playground</strong>, Dee has shaped a{" "}
            <em>deeply melodic</em> and <em>cinematic sound</em>.
          </p>
          <p className="mt-4 whitespace-pre-line">
            In 2017, his track <strong>"Halcyon"</strong> was named{" "}
            <strong>Pete Tong's Essential Tune of the Year</strong> on{" "}
            <strong>BBC Radio One</strong>.<br />
            <br />
            He's since released on labels like <strong>Anjunadeep</strong>,{" "}
            <strong>Diynamic</strong>, and <strong>Knee Deep In Sound</strong>,
            and founded his own imprint <strong>Futurescope</strong>—a creative
            space for his collaborations with artists such as{" "}
            <strong>Patrice Baumel</strong> and <strong>Fort Romeau</strong>.
          </p>
          <p className="mt-4 whitespace-pre-line">
            With recent releases like the <strong>"Aquila" EP</strong> on{" "}
            <strong>Purified Records</strong> and <strong>"Retina"</strong> on{" "}
            <strong>Mobilee</strong>, Dee continues to <em>evolve his sound</em>
            .
            <br />
            <br />
            His upcoming sophomore album, <strong>"Stay Fiction"</strong>, is
            set to release in <strong>May 2025</strong>.
          </p>
        </>
      }
    />
  );
}
