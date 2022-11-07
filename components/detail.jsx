import { useMemo } from "react";

const DetailPage = ({ dish }) => {
  const steps = useMemo(() => {
    return dish.analyzedInstructions[0].steps.map((each) => each.step);
  }, [dish]);

  return (
    <div className="col-span-3">
      <div>
        <div className="h-1/2 overflow-scroll">{steps}</div>
      </div>
      <div></div>
    </div>
  );
};

export default DetailPage;
