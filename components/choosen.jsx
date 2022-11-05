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
    ingredients.length > 8 ? ingredients.slice(0, 8) : ingredients;
  return (
    <div className="flex items-center">
      <svg
        width="500.4"
        height="300"
        viewBox="0 0 737 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="737" height="500" fill="#f2eee9" />
        <g id="Frame 1">
          <rect width="737" height="500" fill="#f2eee9" />
          <g id="Group 1">
            <circle id="middle" cx="369" cy="250" r="199.5" stroke="black" />
            <circle id="first" cx="269" cy="250" r="199.5" stroke="black" />
            <circle id="last" cx="469" cy="250" r="199.5" stroke="black" />
          </g>
        </g>
      </svg>

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
