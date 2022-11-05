import { useMemo } from "react";
import Image from "next/image";
const ChoosenItem = ({ dish }) => {
  const ingredients = useMemo(() => {
    let result = [];
    dish.analyzedInstructions[0].steps.map((step) => {
      step.ingredients.map((each) => {
        result.push(each.name);
      });
    });
    //removing duplicate items
    result = [...new Set(result)];
    return result;
  }, [dish]);
  const displayList =
    ingredients.length > 8 ? ingredients.slice(0, 8) : ingredients;
  return (
    <div className="flex items-center justify-center">
      <div className="bgImage flex justify-center items-center">
        <div className="relative rounded-full overflow-hidden w-48 h-48">
          <Image
            src={dish.image}
            alt={dish.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div>
        <h1 className="py-2 text-lg">Ingredients</h1>
        <div>
          <div className="customBorder relative listBox inline-block w-48 h-80 overflow-hidden px-5">
            <h4 className="font-bold">{dish.title}</h4>
            <ul className="list-disc">
              {displayList.map((each) => (
                <li key={ingredients.indexOf(each)}>{each}</li>
              ))}
            </ul>
            <button className="py-4 absolute bottom-2 text-orange-300 underline">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosenItem;
