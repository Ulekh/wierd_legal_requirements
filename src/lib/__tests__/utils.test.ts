import type { TubeSample } from "../types";
import { assignSampleToRack, findSameEntries } from "../utils";

const samples: TubeSample[] = [
  {
    name: "Alice Johnson",
    id: 1,
    age: 34,
    workPlace: "Hospital",
    district: "Central",
    visionDefects: "Myopia",
    rack: undefined,
  },
  {
    name: "Bob Smith",
    id: 2,
    age: 42,
    workPlace: "School",
    district: "North",
    visionDefects: "Hyperopia",
    rack: undefined,
  },
  {
    name: "Cathy Lee",
    id: 3,
    age: 28,
    workPlace: "Tech Company",
    district: "East",
    visionDefects: "Astigmatism",
    rack: undefined,
  },
];

describe("findSameEntries", () => {
  test("should find interference in two objects", () => {
    expect(
      findSameEntries(
        {
          name: "Bob Smith",
          id: 2,
          age: 42,
          workPlace: "School",
          district: "North",
          visionDefects: "Astigmatism",
          rack: undefined,
        },
        {
          name: "Cathy Lee",
          id: 3,
          age: 28,
          workPlace: "Tech Company",
          district: "East",
          visionDefects: "Astigmatism",
          rack: undefined,
        }
      )
    ).toEqual(["visionDefects", "Astigmatism"]);
  });

  // test("should find interference in two objects (case insensivite)", () => {
  //   expect(
  //     findSameEntries(
  //       {
  //         name: "Bob Smith",
  //         id: 2,
  //         age: 42,
  //         workPlace: "School",
  //         district: "North",
  //         visionDefects: "astigmatism",
  //         rack: undefined,
  //       },
  //       {
  //         name: "Cathy Lee",
  //         id: 3,
  //         age: 28,
  //         workPlace: "Tech Company",
  //         district: "East",
  //         visionDefects: "Astigmatism",
  //         rack: undefined,
  //       }
  //     )
  //   ).toEqual(["visionDefects", "Astigmatism"]);
  // });

  test("should not find interference in two different objects", () => {
    expect(
      findSameEntries(
        {
          name: "Bob Smith",
          id: 2,
          age: 42,
          workPlace: "School",
          district: "North",
          visionDefects: "Hyperopia",
          rack: undefined,
        },
        {
          name: "Cathy Lee",
          id: 3,
          age: 28,
          workPlace: "Tech Company",
          district: "East",
          visionDefects: "Astigmatism",
          rack: undefined,
        }
      )
    ).toEqual(undefined);
  });
});

describe("Assign samples to racks", () => {
  test("should assign 3 samples with no interference into same rack", () => {
    expect(assignSampleToRack(samples)).toEqual([
      {
        name: "Alice Johnson",
        id: 1,
        age: 34,
        workPlace: "Hospital",
        district: "Central",
        visionDefects: "Myopia",
        rack: 0,
      },
      {
        name: "Bob Smith",
        id: 2,
        age: 42,
        workPlace: "School",
        district: "North",
        visionDefects: "Hyperopia",
        rack: 0,
      },
      {
        name: "Cathy Lee",
        id: 3,
        age: 28,
        workPlace: "Tech Company",
        district: "East",
        visionDefects: "Astigmatism",
        rack: 0,
      },
    ]);
  });

  test("should assign 3 samples with interferences into 3 racks", () => {
    expect(
      assignSampleToRack([
        {
          name: "Alice Johnson",
          id: 1,
          age: 34,
          workPlace: "Hospital",
          district: "Central",
          visionDefects: "Hyperopia",
          rack: undefined,
        },
        {
          name: "Bob Smith",
          id: 2,
          age: 42,
          workPlace: "School",
          district: "East",
          visionDefects: "Hyperopia",
          rack: undefined,
        },
        {
          name: "Cathy Lee",
          id: 3,
          age: 28,
          workPlace: "Tech Company",
          district: "East",
          visionDefects: "Astigmatism",
          rack: undefined,
        },
      ])
    ).toEqual([
      {
        name: "Alice Johnson",
        id: 1,
        age: 34,
        workPlace: "Hospital",
        district: "Central",
        visionDefects: "Hyperopia",
        rack: 0,
      },
      {
        name: "Bob Smith",
        id: 2,
        age: 42,
        workPlace: "School",
        district: "East",
        visionDefects: "Hyperopia",
        rack: 1,
      },
      {
        name: "Cathy Lee",
        id: 3,
        age: 28,
        workPlace: "Tech Company",
        district: "East",
        visionDefects: "Astigmatism",
        rack: 2,
      },
    ]);
  });

  test("should assign 4 samples with interferences into 3 racks", () => {
    expect(
      assignSampleToRack([
        {
          name: "Alice Johnson",
          id: 1,
          age: 34,
          workPlace: "Hospital",
          district: "Central",
          visionDefects: "Myopia",
          rack: undefined,
        },
        {
          name: "Bob Smith",
          id: 2,
          age: 42,
          workPlace: "School",
          district: "East",
          visionDefects: "Myopia",
          rack: undefined,
        },
        {
          name: "Cathy Lee",
          id: 3,
          age: 28,
          workPlace: "Tech Company",
          district: "East",
          visionDefects: "Astigmatism",
          rack: undefined,
        },
        {
          name: "David Brown",
          id: 4,
          age: 51,
          workPlace: "Bank",
          district: "South",
          visionDefects: "Presbyopia",
          rack: undefined,
        },
      ])
    ).toEqual([
      {
        name: "Alice Johnson",
        id: 1,
        age: 34,
        workPlace: "Hospital",
        district: "Central",
        visionDefects: "Myopia",
        rack: 0,
      },
      {
        name: "Bob Smith",
        id: 2,
        age: 42,
        workPlace: "School",
        district: "East",
        visionDefects: "Myopia",
        rack: 1,
      },
      {
        name: "Cathy Lee",
        id: 3,
        age: 28,
        workPlace: "Tech Company",
        district: "East",
        visionDefects: "Astigmatism",
        rack: 2,
      },
      {
        name: "David Brown",
        id: 4,
        age: 51,
        workPlace: "Bank",
        district: "South",
        visionDefects: "Presbyopia",
        rack: 0,
      },
    ]);
  });

  test("should assine one sample to rack", () => {
    expect(
      assignSampleToRack([
        {
          name: "Cathy Lee",
          id: 3,
          age: 28,
          workPlace: "Tech Company",
          district: "East",
          visionDefects: "Astigmatism",
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
        visionDefects: "Astigmatism",
        rack: 0,
      },
    ]);
  });
});
