import Image from "next/image";
import { useSelector } from "react-redux";
import ChoosenItem from "../components/choosen";
import DetailPage from "../components/detail";
import { dummyMenu } from "../data/dummyMenu";
import { useState, useMemo } from "react";

export const getStaticProps = async () => {
  const foods_api = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=20&apiKey=${process.env.API_KEY}`;
  const data = dummyMenu;
  // const res = await fetch(foods_api);
  // const data = await res.json();
  return {
    props: { data },
  };
};

const Recipes = ({ data }) => {
  const [curr, setCurr] = useState(0);
  const recipes = data.results;

  const steps = useMemo(() => {
    return recipes[curr].analyzedInstructions[0].steps.map((each) => {
      return each.step;
    });
  }, [recipes, curr]);

  const ingredients = useMemo(() => {
    let result = [];
    try {
      recipes[curr].analyzedInstructions[0].steps.map((step) => {
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
  }, [recipes, curr]);

  return (
    <div className="min-h-screen overflow-hidden grid grid-cols-3 p-8">
      <div className="col-span-2 w-5/6">
        {/* title */}
        <div className=" h-60">
          {/* dishtype */}
          <p className="text-lg">{recipes[curr].dishTypes.join(", ")}</p>
          <h2 className="text-5xl pt-6 pb-10">{recipes[curr].title}</h2>
        </div>
        {/* ==title== */}

        <h3 className="text-xl pb-8">Methods</h3>
        <div className="h-96 pr-8 overflow-scroll">
          {steps.map((each) => {
            return (
              <div className="flex items-center pb-6" key={steps.indexOf(each)}>
                <p className=" text-xs flip">Step {steps.indexOf(each) + 1}</p>
                <p className="pl-4">{each}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* ==col1== */}

      {/* col2 */}
      <div className="col-span-1 flex justify-center">
        <div>
          <div className="listBox py-4 w-56 bg-white">
            {/* infos */}
            <div>
              <div className="flex items-center pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="pl-4">{recipes[curr].readyInMinutes} minutes</p>
              </div>

              <div className="flex items-center pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <p className="pl-4">{recipes[curr].servings} servings</p>
              </div>

              <div className="flex items-center pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-5 h-5 text-gray-800"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
                </svg>
                <p className="pl-4">{recipes[curr].healthScore} scores</p>
              </div>
            </div>
            {/* --info-- */}

            {/* ingredient */}
            <h4 className="text-xl pb-6 pt-4">Ingredients</h4>
            <ul className="list-disc">
              {ingredients.map((each) => (
                <li key={ingredients.indexOf(each)}>{each}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
