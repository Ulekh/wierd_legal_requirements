import { useState } from "react";
import SamplesPreview from "./components/SamplesPreview";
import { assignSampleToRack } from "./lib/utils";
import { TubeSample } from "./lib/types";

function App() {
  const [samples, setSamples] = useState<TubeSample[]>([]);

  const date = new Date();

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = {
      name: formData.get("name"),
      age: formData.get("age"),
      workPlace: formData.get("workPlace"),
      district: formData.get("district"),
      visionDefects: formData.get("visitonDefects"),
    };
    setSamples([
      ...samples,
      { ...formValues, id: date.getTime(), rack: undefined },
    ]);
    event.currentTarget.reset();

    // console.log(formValues);
  };

  const handleSubmitSamples = () => {
    const result = assignSampleToRack(samples);
    console.log(result);
    setSamples([...result]);
  };

  return (
    <section className="p-8">
      {samples.length ? <SamplesPreview samples={samples} /> : null}

      <form
        onSubmit={handleFormSumbit}
        className="flex flex-col mb-4 lg:flex-row"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          minLength={2}
          className=" border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="number"
          name="age"
          id="age"
          placeholder="30..."
          className=" border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
          min={0}
          max={120}
        />

        <input
          type="text"
          name="workPlace"
          id="workPlace"
          placeholder="McDonalds..."
          className=" border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="district"
          id="district"
          placeholder="District"
          className=" border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="visitonDefects"
          id="visitonDefects"
          placeholder="Myopia"
          className=" border-2 border-blue-400/50 px-4 border-1 mb-1 rounded h-8 focus:outline-none focus:ring focus:border-blue-500"
          required
        />

        <button
          type="submit"
          onSubmit={handleFormSumbit}
          className="bg-gray-400 rounded p-2 mt-4"
        >
          Add
        </button>
      </form>
      <button
        disabled={!samples.length}
        onClick={handleSubmitSamples}
        className="enabled:bg-blue-600 rounded p-2 hover:bg-blue-400 text-white transition w-full disabled:bg-gray-300 disabled:hover"
      >
        Submit samples
      </button>

      {/* <pre>{samples}</pre> */}
    </section>
  );
}

export default App;
