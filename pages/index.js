import Image from "next/image";
import { useState } from "react";
import { dummyMenu } from "../data/dummyMenu";
import ChoosenItem from "../components/choosen";
import DetailPage from "../components/detail";
import { setData } from "../data/slice";
import { useEffect } from "react";

export const getStaticProps = async () => {
  const foods_api = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=20&apiKey=${process.env.API_KEY}`;
  const data = dummyMenu;
  // const res = await fetch(foods_api);
  // const data = await res.json();
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [recipes, setRecipes] = useState(data.results);
  const [curr, setCurr] = useState(0);

  const [activeBtn, setActiveBtn] = useState(1);

  const dynamicBtn = (id) => (activeBtn === id ? "active-btn" : "btn");

  const handleBtn = (id) => {
    setActiveBtn(id);
    changeRecipes(id);
  };

  const changeRecipes = (id) => {
    let result;
    const dataList = data.results;
    if (id === 1) result = data.results;
    if (id === 2) result = dataList.filter((each) => each.veryPopular === true);
    if (id === 4) result = dataList.filter((each) => each.vegetarian === true);
    if (id === 3)
      result = dataList.filter(
        (each) => each.dishTypes.includes("dinner") === true
      );
    setCurr(0);
    setRecipes(result);
  };

  return (
    <main className="relative bodyHeight grid grid-cols-7">
      <div className=" col-span-4 border-r border-black">
        <h1 className="text-8xl uppercase">
          Food
          <br />
          Recipes
        </h1>
        <ChoosenItem dish={recipes[curr]} />
      </div>

      <div className="col-span-3">
        {/* section 2 */}
        <div className="topSection overflow-scroll px-4">
          {recipes.map((each) => {
            return (
              <div
                key={each.id}
                className="flex items-center justify-around my-4"
              >
                <p className="w-1/2 text-white text-lg">{each.title}</p>
                <hr width={60} />
                <div
                  onClick={() => setCurr(recipes.indexOf(each))}
                  className={
                    recipes[curr] === each
                      ? "border-white ctmBorW inline-flex my-2"
                      : "customBorder inline-flex my-2"
                  }
                >
                  <Image
                    src={each.image}
                    alt={each.title}
                    width={150}
                    height={80}
                    objectFit="cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* section3 */}

        <div>
          <div className="bottomSection grid grid-cols-2">
            <div className="col-span-1 border-r border-black flex flex-col justify-around px-10">
              <button className={dynamicBtn(1)} onClick={() => handleBtn(1)}>
                All
              </button>
              <button className={dynamicBtn(2)} onClick={() => handleBtn(2)}>
                Popular
              </button>
              <button className={dynamicBtn(3)} onClick={() => handleBtn(3)}>
                Dinner
              </button>
              <button className={dynamicBtn(4)} onClick={() => handleBtn(4)}>
                Vegetarian
              </button>
            </div>
            <div className="col-span-1 font-bold flex justify-center items-center">
              <div className="text-center">
                <p className="text-6xl">*</p>
                <p className="text-3xl py-4 ">{data.results.length}</p>
                <p className="text-2xl">Food Recipes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
