import DJTemplate from "./DJTemplate";

export default function JoshuaSmith() {
  return (
    <div className="w-full px-4">
      <DJTemplate
        name="Joshua Smith"
        subtitle="Born thirsty, raised hungry"
        imageUrl="https://pub-256cbac8c7ba4219be4d35b225b48d92.r2.dev/joshuasmith.jpeg"
        imageClassName="w-full max-w-full md:w-4/5 h-auto rounded shadow-lg object-cover"
        content={
          <p className="whitespace-pre-line">
            10 years of experience in the industry starting from being a young
            boy mixing fruit juices and sodas together before I was even able to
            look over a bar.
            <br />
            <br />
            My passion for all types of liquids has lead me to work many high
            end events for multiple different VIP clients globally.
            <br />
            <br />
            Events such as high end weddings, WEF, Cannes Lions, F1, LIV golf
            tour, brand activations, celebrity charity events and more.
            <br />
            <br />
            Now mostly based in consultancy I spend my time training, writing
            menus and developing new drink concepts for various different bars
            and my own drinks brand from my personal drinks laboratory.
          </p>
        }
      />
    </div>
  );
}
