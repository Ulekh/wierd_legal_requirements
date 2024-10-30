import SamplesPreview from "./components/SamplesPreview";
import { assignSampleToRack } from "./lib/utils";

import AddSampleForm from "./components/AddSampleForm";
import { useSessionStorageData } from "./hooks/useSessionStorageData";

function App() {
  const { samples, setSamples } = useSessionStorageData();

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
      { ...formValues, id: new Date().getTime(), rack: undefined },
    ]);
    event.currentTarget.reset();
  };

  const handleSamplesAssign = () => {
    const result = assignSampleToRack(samples);
    setSamples([...result]);
  };

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
