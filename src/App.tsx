import { useState } from "react";
import "./App.css";
import SamplesPreview from "./components/SamplesPreview";

function App() {
  const [samples, setSamples] = useState([]);

  // const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   setSamples(e.target.value);
  // };
  const date = new Date();

  const handleFormSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const formValues = {
      name: formData.get("name"),
      age: formData.get("age"),
      workPlace: formData.get("workPlace"),
      district: formData.get("district"),
      visitonDefects: formData.get("visitonDefects"),
    };

    setSamples((prev) => {
      return [...prev, { ...formValues, id: date.getTime(), rack: undefined }];
    });
    event.target.reset();

    // console.log(formValues);
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
          placeholder="Construction Site"
          required
        />
        <label htmlFor="district"></label>

        <input
          type="text"
          name="visitonDefects"
          id="visitonDefects"
          placeholder="South"
          required
        />
        <label htmlFor="visitonDefects"></label>
        <button type="submit" onSubmit={handleFormSumbit}>
          add
        </button>
      </form>

      {/* <pre>{samples}</pre> */}
    </>
  );
}

export default App;
