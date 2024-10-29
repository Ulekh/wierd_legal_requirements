import { useState } from "react";
import "./App.css";
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
      visitonDefects: formData.get("visitonDefects"),
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
    setSamples(result);
  };

  return (
    <>
      <SamplesPreview samples={samples} />

      <form onSubmit={handleFormSumbit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          minLength={2}
        />
        <label htmlFor="name"></label>

        <input type="number" name="age" id="age" placeholder="30..." required />
        <label htmlFor="age"></label>
        <input
          type="text"
          name="workPlace"
          id="workPlace"
          placeholder="McDonalds..."
          required
        />
        <label htmlFor="workPlace"></label>
        <input
          type="text"
          name="district"
          id="district"
          placeholder="District"
          required
        />
        <label htmlFor="district"></label>

        <input
          type="text"
          name="visitonDefects"
          id="visitonDefects"
          placeholder="Myopia"
          required
        />
        <label htmlFor="visitonDefects"></label>
        <button type="submit" onSubmit={handleFormSumbit}>
          add
        </button>
      </form>
      <button disabled={!samples.length} onClick={handleSubmitSamples}>
        submit samples
      </button>

      {/* <pre>{samples}</pre> */}
    </>
  );
}

export default App;
