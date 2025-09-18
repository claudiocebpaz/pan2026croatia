export const InstructionsStep = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="md:bg-transparent md:border-2 md:border-yellow-500 md:rounded-xl md:p-8 md:max-w-2xl">
      <img
        src="/logosanctuary.webp"
        alt="Project Sanctuary Logo"
        className="mx-auto mb-6 w-auto h-56 object-contain"
      />
      <p className="mt-6 text-white text-center max-w-4xl mx-auto flex-2">
        To get your unique booking code and a chance to enter the side excursion
        giveaway, tell us why you want in this community.
        <br />
        <br />
        E-mail to{" "}
        <a
          href="mailto:subhi@projectsanctuary.club"
          className="mx-auto mt-4 block bg-black border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-900/20 transition-colors"
        >
          subhi@projectsanctuary.club
        </a>
        <br />
        Tell us who you are, where you are from, what you bring. <br />
        What is your gift? What can you teach, offer, or share?
        <br />
        <br />
        Just be real. No flattery. No posturing.
        <br />
        <span className="block mt-2 font-bold text-lg">It's Simple.</span>
      </p>
      <div className="mt-6 w-full max-w-sm mx-auto">
        <button
          onClick={onNext}
          className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 font-semibold text-black shadow-sm hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};
