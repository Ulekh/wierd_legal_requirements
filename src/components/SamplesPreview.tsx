import type { TubeSample } from "../lib/types";
import TableCell from "./TableCell";

type TSnaplePreviewProps = {
  samples: TubeSample[];
  handleSamplesAssign: () => void;
};

const tableColumns = [
  "name",
  "age",
  "work place",
  "district",
  "vision defects",
  "rack",
];

function HeaderRow() {
  return (
    <li className="bg-blue-700 flex text-white">
      {tableColumns.map((cell) => (
        <TableCell
          key={cell}
          className={cell === "rack" || cell === "age" ? "basis-10" : ""}
        >
          {cell.toUpperCase()}
        </TableCell>
      ))}
    </li>
  );
}

export default function SamplesPreview({
  samples,
  handleSamplesAssign,
}: TSnaplePreviewProps) {
  return (
    <>
      <ul className="flex flex-col mb-4 rounded text-sm md:text-base border-solid border-2 border-gray-">
        <HeaderRow />
        {samples.length ? (
          samples.map((sample, index) => {
            return (
              <li
                key={sample.id}
                className={`flex ${index % 2 !== 0 ? "bg-slate-200" : ""}`}
              >
                <TableCell>{sample.name}</TableCell>
                <TableCell className="basis-10">{sample.age}</TableCell>
                <TableCell>{sample.workPlace}</TableCell>
                <TableCell>{sample.district}</TableCell>
                <TableCell>{sample.visionDefects}</TableCell>
                <TableCell className="basis-10">
                  {sample.rack ?? "not assigned"}
                </TableCell>
              </li>
            );
          })
        ) : (
          <div className="text-xl text-center my-14 text-gray-400">No data</div>
        )}
      </ul>
      <button
        disabled={!samples.length}
        onClick={handleSamplesAssign}
        className="bg-blue-600 hover:bg-blue-500 rounded p-2  text-white transition w-full disabled:bg-gray-300 mt-3"
      >
        Assign samples to racks
      </button>
    </>
  );
}
