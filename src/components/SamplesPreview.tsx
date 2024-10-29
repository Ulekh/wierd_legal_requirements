import type { TubeSample } from "../lib/types";

type TSnaplePreviewProps = {
  samples: TubeSample[];
};

export default function SamplesPreview({ samples }: TSnaplePreviewProps) {
  return (
    <ul className="tablelist">
      {samples.map((sample) => {
        return (
          <>
            <li>
              {sample.name} {sample.age} {sample.workPlace} {sample.district}{" "}
              {sample.visitonDefects}
            </li>
          </>
        );
      })}
    </ul>
  );
}
