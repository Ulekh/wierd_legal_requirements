import { TubeSample } from "./types";
import { CONSTRAINS } from "../constants";

export function findSameEntries(obj1: TubeSample, obj2: TubeSample) {
  if (!obj1 || !obj2) return [];

  const firstObjectValues = Object.entries(obj1);
  const secondObjectValues = Object.values(obj2);
  const foundSameItems = firstObjectValues.find(([key, value]) => {
    return secondObjectValues.includes(value) && CONSTRAINS.includes(key);
  });

  return foundSameItems || [];
}

export function assignSampleToRack(
  sampleData: TubeSample[]
): TubeSample[] | [] {
  if (!sampleData.length) {
    return [];
  }

  sampleData[0].rack = 0;

  if (sampleData.length === 1) {
    return sampleData;
  }

  for (let idx = 0; idx < sampleData.length; ++idx) {
    for (let j = idx + 1; j < sampleData.length; ++j) {
      if (!sampleData[j].rack) {
        sampleData[j].rack = 0;
      }
      const foundDuplicates = findSameEntries(sampleData[idx], sampleData[j]);
      if (
        foundDuplicates.length &&
        sampleData[idx].rack === sampleData[j].rack
      ) {
        sampleData[j].rack = idx + 1;
      }
    }
  }

  return sampleData;
}
