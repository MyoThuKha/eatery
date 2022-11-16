import { useMemo, useState } from "react";
import Image from "next/image";

const DetailPage = ({ dish, onDetail }) => {
  const steps = useMemo(() => {
    return dish.analyzedInstructions[0].steps.map((each) => {
      return each.step;
    });
  }, [dish]);
  const [finished, setFinished] = useState([]);

  return (
    <div className="col-span-3">
      <div className="pt-4 px-8 pb-8">
        <h1 className="text-3xl py-4 capitalize">how to Make</h1>
        <div>
          <Image src={dish.image} alt="" width={400} height={300} />
        </div>
        {steps.map((each) => {
          return (
            <div
              key={steps.indexOf(each)}
              className={
                finished.includes(steps.indexOf(each))
                  ? "pb-4 cursor-pointer line-through decoration-gray-700"
                  : "pb-4 cursor-pointer"
              }
            >
              <p
                onClick={() => {
                  if (finished.includes(steps.indexOf(each))) {
                    setFinished(() =>
                      finished.filter((index) => index !== steps.indexOf(each))
                    );
                  } else setFinished([...finished, steps.indexOf(each)]);
                }}
              >
                {each}
              </p>
            </div>
          );
        })}
        <div>
          <a href={dish.sourceUrl} target="_blank" rel="noreferrer">
            &copy;{dish.creditsText}
          </a>
        </div>
        <button
          className="customBorder mt-8 px-4 py-2"
          onClick={() => onDetail()}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
