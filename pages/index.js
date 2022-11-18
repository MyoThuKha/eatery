import Image from "next/image";
import { useState } from "react";
import { menuData } from "../data/menuData";
import ChoosenItem from "../components/choosen";
import Head from "next/head";

export const getStaticProps = async () => {
  const data = menuData;

  const parsedData = data.map((each) => {
    const instruct = each.analyzedInstructions.map((each) => {
      console.log(each);
      return each.steps.map((each2) => {
        return { step: each2.step, ingredients: each2.ingredients };
      });
    });
    return {
      id: each.id,
      title: each.title,
      image: each.image,
      veryPopular: each.veryPopular,
      vegan: each.vegan,
      dishTypes: each.dishTypes,
      analyzedInstructions: instruct,
    };
  });
  return {
    props: { data: parsedData },
  };
};

export default function Home({ data }) {
  console.log(data.analyzedInstructions);
  const [recipes, setRecipes] = useState(data);
  const [curr, setCurr] = useState(0);

  const [activeBtn, setActiveBtn] = useState(1);
  const dynamicBtn = (id) => (activeBtn === id ? "active-btn" : "btn");
  const handleBtn = (id) => {
    setActiveBtn(id);
    let result;
    if (id === 1) result = data;
    if (id === 2) result = data.filter((each) => each.veryPopular === true);
    if (id === 4) result = data.filter((each) => each.vegan === true);
    if (id === 3)
      result = data.filter(
        (each) => each.dishTypes.includes("dinner") === true
      );
    setCurr(0);
    setRecipes(result);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="relative bodyHeight grid grid-cols-7">
        <div className=" col-span-4 border-r border-black">
          <h1 className="text-8xl uppercase">
            Food
            <br />
            Recipes
          </h1>
          {/* <ChoosenItem
            dish={recipes[curr].analyzedInstructions}
            image={recipes[curr].image}
            title={recipes[curr].title}
            id={recipes[curr].id}
          /> */}
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
                  Vegan
                </button>
              </div>
              <div className="col-span-1 font-bold flex justify-center items-center">
                <div className="text-center">
                  <p className="text-4xl">*</p>
                  <p className="text-5xl py-4 ">{recipes.length}</p>
                  <p className="text-2xl">Food Recipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
