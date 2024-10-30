import type { TubeSample } from "../lib/types";

type TSnaplePreviewProps = {
  samples: TubeSample[];
};

const tableColumns = [
  "name",
  "age",
  "workPlace",
  "district",
  "visionDefects",
  "rack",
];

export default function SamplesPreview({ samples }: TSnaplePreviewProps) {
  return (
    <ul>
      <li className="bg-slate-300">
        {tableColumns.map((cell) => (
          <span key={cell} className="flex-[1_1_100px]">
            {cell}
          </span>
        ))}
      </li>

      {samples.map((sample) => {
        return (
          <li key={sample.id} className="flex-[1_1_100px]">
            <span>{sample.name}</span> <span>{sample.age}</span>
            <span>{sample.workPlace}</span> <span>{sample.district}</span>
            <span>{sample.visionDefects}</span> <span>{sample.rack}</span>
          </li>
        );
      })}
    </ul>
  );
}
