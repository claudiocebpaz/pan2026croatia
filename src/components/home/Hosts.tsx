import DjDeeMontero from "./DJDeeMontero";
import DjEelkeKleijn from "./DJEelkeKleijn";
import DJJanBlomqvist from "./DJJanBlomqvist";
import DjLaylaBenitez from "./DJLaylaBenitez";
// import DjSaraLandry from "./DJSaraLandry";
import DjMarieSauvage from "./DJMarieSauvage";
import DjDoubleTouch from "./DJDoubleTouch";
// import DjMariePosa from "./DJMariePosa";
// import DJErikaAlkemiss from "./DJErikaAlkemiss";
// import DjSarahHaywood from "./DJSarahHaywood";
// import DJJlittle from "./DJJlittle";
// import DJSone from "./DJSone";
// import SimaGandhi from "./DJSimaGandhi";
// import GabrielleManuel from "./DJGabrielle";
// import DjMorePower from "./DJMorepower";
// import DJShelleySmith from "./DJShelleySmith";
import SamathaKennedy from "./DJSamanthaKennedy";
// import JoshuaSmith from "./DJJoshuaSmith";
// import HakeemBourne from "./Hakeem";
// import NaimaMoussa from "./NaimaMoussa";
import Phase2 from "./Phase2";

function Divider() {
  return (
    <div className="h-[1px] my-10 w-2/3 mx-auto bg-gray-500 md:my-18 md:w-1/3" />
  );
}

export default function Hosts() {
  return (
    <section className="md:mt-24 border-t border-gray-500 bg-gray-950 text-white">
      <div className="p-4 max-w-7xl mx-auto mt-12">
        <h2 className="font-cinzel text-5xl font-bold mb-8 text-amber-400">
          Dj Lineup
        </h2>

        <DjDeeMontero />
        <Divider />
        <DjDoubleTouch />
        <Divider />
        <DjEelkeKleijn />
        <Divider />
        <DJJanBlomqvist />
        <Divider />
        <DjLaylaBenitez />
        <Divider />
        {/* <DjSaraLandry /> */}
        <Phase2 />
        {/* <Divider />
        <h2 className="font-cinzel text-3xl font-bold mb-8 text-amber-400">
          With support from...
        </h2> */}

        {/* <DjMariePosa /> */}
        {/* <Divider /> */}
        {/* <DJErikaAlkemiss /> */}
        {/* <Divider /> */}
        {/* <DjSarahHaywood /> */}
        {/* <Divider /> */}
        {/* <DJJlittle /> */}
        {/* <Divider /> */}
        <h2 className="font-cinzel text-3xl font-bold mb-8 text-amber-400">
          Special Guests
        </h2>
        <DjMarieSauvage />
        <Divider />
        {/* <DJSone /> */}
        {/* <Divider /> */}
        {/* <SimaGandhi /> */}
        {/* <Divider /> */}
        {/* <GabrielleManuel /> */}
        {/* <Divider /> */}
        {/* <DjMorePower /> */}
        {/* <Divider /> */}
        {/* <DJShelleySmith /> */}
        {/* <Divider /> */}
        {/* <HakeemBourne /> */}
        {/* <Divider /> */}
        {/* <NaimaMoussa /> */}
        {/* <Divider /> */}
        <h2 className="font-cinzel text-3xl font-bold mb-8 text-amber-400">
          Culinary and Mixology
        </h2>
        <SamathaKennedy />
        {/* <Divider /> */}
        {/* <JoshuaSmith /> */}
      </div>
    </section>
  );
}
