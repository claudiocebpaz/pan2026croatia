import DJTemplate from "./DJTemplate";

export default function NaimaMoussa() {
  return (
    <DJTemplate
      name={<strong>Naïma Namaste</strong>}
      subtitle="Resident Artist"
      imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/NaimaMoussa.jpeg"
      imageClassName="w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
      content={
        <>
          <p className="font-quattrocento mb-3">
            <strong>Naïma</strong> is a French oil painter whose work is rooted
            in the spirit of the <em>wild feminine</em> and the untamed beauty
            of nature.
          </p>
          <p className="font-quattrocento mb-3">
            Based in the South of France, she paints <strong>women</strong>,
            <strong> animals</strong>, and <strong>landscapes</strong> as
            symbols of freedom, healing, and transformation.
          </p>
          <p className="font-quattrocento mb-3">
            Her art carries the energy of <em>myth</em> and
            <em> poetry</em>, reflecting her own journey of returning to her
            authentic feminine essence.
          </p>
          <ul className="font-quattrocento list-disc pl-6 mb-3">
            <li>
              <strong>Wilderness:</strong> raw, primal landscapes that mirror
              inner freedom.
            </li>
            <li>
              <strong>Sacred archetypes:</strong> symbolic figures guiding
              healing and transformation.
            </li>
            <li>
              <strong>Cycles of nature:</strong> rhythms that reconnect us with
              our creative essence.
            </li>
          </ul>
          <p className="font-quattrocento italic">
            Naïma’s paintings invite a reconnection with the primal, creative
            force within us all — echoing the timeless call of Pan, god of the
            wild.
          </p>
        </>
      }
    />
  );
}
