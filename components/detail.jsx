import { useMemo, useState } from "react";

const DetailPage = ({ dish }) => {
  const steps = useMemo(() => {
    return dish.analyzedInstructions[0].steps.map((each) => {
      return each.step;
    });
  }, [dish]);
  const [finished, setFinished] = useState([]);

  return (
    <div className="col-span-3">
      <div className="pt-4 px-8">
        {steps.map((each) => {
          return (
            <div
              onClick={() => setFinished([...finished, steps.indexOf(each)])}
              key={steps.indexOf(each)}
              className={
                finished.includes(steps.indexOf(each))
                  ? "pb-4 cursor-pointer line-through"
                  : "pb-4 cursor-pointer"
              }
            >
              {each}
            </div>
          );
        })}
        <button></button>
      </div>
    </div>
  );
};

export default DetailPage;