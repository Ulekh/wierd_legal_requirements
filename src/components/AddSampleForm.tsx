type TAddSampleFormProps = {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function AddSampleForm({
  handleFormSubmit,
}: TAddSampleFormProps) {
  return (
    <section className="border-2 rounded p-4 w-min md:w-full">
      <h3 className="font-semibold text-xl mb-5">Add new sample</h3>

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col mb-4 md:flex-row md:flex-wrap items-baseline gap-2"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          minLength={2}
          className="flex-grow border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="number"
          name="age"
          id="age"
          placeholder="30..."
          className="border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
          pattern="\d{1,5}"
          min={0}
          max={120}
        />

        <input
          type="text"
          name="workPlace"
          id="workPlace"
          placeholder="Construction Site"
          className="lg:flex-grow border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="district"
          id="district"
          placeholder="District (North)"
          className="lg:flex-grow border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="visitonDefects"
          id="visitonDefects"
          placeholder="Myopia"
          className="border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <button
          type="submit"
          className="rounded mt-2 h-8 pr-2 pl-2 border-blue-500 border-2 text-blue-800 font-medium w-full hover:bg-blue-500 hover:text-white transition"
        >
          Add
        </button>
      </form>
    </section>
  );
}
