import type { TubeSample } from "../types";
import { assingSampleToRack } from "../utils";

const samples: TubeSample[] = [
  {
    name: "Alice Johnson",
    id: 1,
    age: 34,
    workPlace: "Hospital",
    district: "Central",
    visitonDefects: "Myopia",
    rack: undefined,
  },
  {
    name: "Bob Smith",
    id: 2,
    age: 42,
    workPlace: "School",
    district: "North",
    visitonDefects: "Hyperopia",
    rack: undefined,
  },
  {
    name: "Cathy Lee",
    id: 3,
    age: 28,
    workPlace: "Tech Company",
    district: "East",
    visitonDefects: "Astigmatism",
    rack: undefined,
  },
];

describe("Assign samples to racks", () => {
  test("should assign samples to different racks", () => {
    expect(assingSampleToRack(samples)).toEqual([
      {
        name: "Alice Johnson",
        id: 1,
        age: 34,
        workPlace: "Hospital",
        district: "Central",
        visitonDefects: "Myopia",
        rack: 0,
      },
      {
        name: "Bob Smith",
        id: 2,
        age: 42,
        workPlace: "School",
        district: "North",
        visitonDefects: "Hyperopia",
        rack: 0,
      },
      {
        name: "Cathy Lee",
        id: 3,
        age: 28,
        workPlace: "Tech Company",
        district: "East",
        visitonDefects: "Astigmatism",
        rack: 1,
      },
    ]);
  });

  test("should assine one sample to rack", () => {
    expect(
      assingSampleToRack([
        {
          name: "Cathy Lee",
          id: 3,
          age: 28,
          workPlace: "Tech Company",
          district: "East",
          visitonDefects: "Astigmatism",
          rack: undefined,
        },
      ])
    ).toEqual([
      {
        name: "Cathy Lee",
        id: 3,
        age: 28,
        workPlace: "Tech Company",
        district: "East",
        visitonDefects: "Astigmatism",
        rack: 1,
      },
    ]);
  });
});
