import { useMemo } from "react";
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
    ingredients.length > 10 ? ingredients.slice(0, 10) : ingredients;
  return (
    <div>
      <h1 className="py-2 text-lg">Ingredients</h1>
      <div>
        <div className="customBorder listBox inline-block w-48 overflow-hidden px-5">
          <h4 className="font-bold">{dish.title}</h4>
          <ul className="list-disc">
            {displayList.map((each) => (
              <li key={ingredients.indexOf(each)}>{each}</li>
            ))}
          </ul>
          <button className="py-4 text-orange-300 underline">See More</button>
        </div>
      </div>
    </div>
  );
};

export default ChoosenItem;
