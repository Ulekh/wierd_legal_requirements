import { TubeSample } from "./types";

export function validate() {}

function hasSamePropertiesValues(obj1: TubeSample, obj2: TubeSample) {
  if (!obj1 || !obj2) return false;

  const firstObjectValues = Object.values(obj1);
  const secondObjectValues = Object.values(obj2);
  return firstObjectValues.find((prop) => secondObjectValues.includes(prop));
}

export function assingSampleToRack(sampleData: TubeSample[]) {
  if (!sampleData.length) {
    return undefined;
  }

  const [first] = sampleData;
  let assignedSamples = [{ ...first, rack: 1 }];

  if (sampleData.length === 1) {
    return assignedSamples;
  }
  for (let idx = 0; idx < sampleData.length; ++idx) {
    if (!sampleData[0].rack) {
      sampleData[0].rack = 0;
    }
    for (let j = idx + 1; j < sampleData.length; ++j) {
      if (!hasSamePropertiesValues(sampleData[idx], sampleData[j])) {
        sampleData[j].rack = idx;
      }
    }
  }

  return sampleData;
}