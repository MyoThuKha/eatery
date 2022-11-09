import { useMemo } from "react";
import Image from "next/image";
const ChoosenItem = ({ dish, detail, onDetail }) => {
  // parsing data from api (can call directly from api but i have limited api call)
  const ingredients = useMemo(() => {
    let result = [];
    try {
      dish.analyzedInstructions[0].steps.map((step) => {
        step.ingredients.map((each) => {
          result.push(each.name);
        });
      });
    } catch (e) {
      result.push("no data");
    }
    //removing duplicate items
    result = [...new Set(result)];
    return result;
  }, [dish]);
  //------------------------parsing-------------------------------//

  const displayList =
    !detail && ingredients.length > 8 ? ingredients.slice(0, 8) : ingredients;

  const boxStyle = "listBox w-48 " + (detail ? "" : "h-80");

  return (
    <div className="flex items-center justify-center">
      <div className="bgImage flex justify-center items-center">
        <a href={dish.image} target="_blank" rel="noreferrer">
          <div className="relative rounded-full overflow-hidden w-48 h-48">
            <Image
              src={dish.image}
              alt={dish.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
      </div>

      <div>
        <h1 className="py-2 text-lg">Ingredients</h1>
        <div>
          <div className={boxStyle}>
            <h4 className="font-bold">{dish.title}</h4>
            <ul className="list-disc">
              {displayList.map((each) => (
                <li key={ingredients.indexOf(each)}>{each}</li>
              ))}
            </ul>
            {!detail && (
              <button
                onClick={() => onDetail()}
                className="py-4 absolute bottom-2 text-orange-300 underline"
              >
                See More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosenItem;
