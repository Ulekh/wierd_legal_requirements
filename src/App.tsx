import { useState, useMemo, useCallback } from "react";
import SamplesPreview from "./components/SamplesPreview";
import { assignSampleToRack } from "./lib/utils";
import { TubeSample } from "./lib/types";

import { sampleData } from "./assets/data";
import AddSampleForm from "./components/AddSampleForm";

function App() {
  const [samples, setSamples] = useState<TubeSample[]>([]);

  const date = new Date();
  console.log("rerender");

  const handleAddNewSample = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = {
      name: formData.get("name") as string,
      age: formData.get("age") as unknown as number,
      workPlace: formData.get("workPlace") as string,
      district: formData.get("district") as string,
      visionDefects: formData.get("visitonDefects") as string,
    };
    setSamples([
      ...samples,
      { ...formValues, id: date.getTime(), rack: undefined },
    ]);
    event.currentTarget.reset();
  };

  const handleSamplesAssign = useCallback(() => {
    const result = assignSampleToRack(samples);
    setSamples([...result]);
  }, [samples]);

  return (
    <section className="p-8 max-w-7xl my-0 mx-auto">
      <h1 className="font-semibold text-2xl mb-5">Samples preview</h1>
      <section className="mb-6">
        <SamplesPreview
          samples={samples}
          handleSamplesAssign={handleSamplesAssign}
        />
      </section>
      <AddSampleForm handleFormSubmit={handleAddNewSample} />
    </section>
  );
}

export default App;
