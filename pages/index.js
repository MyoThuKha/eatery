import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dummyMenu } from "../data/dummyMenu";
import NavBar from "../components/navBar";
import ChoosenItem from "../components/choosen";

export const getStaticProps = async () => {
  const foods_api = `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${process.env.API_KEY}`;
  const data = dummyMenu;
  // const res = await fetch(foods_api);
  // const data = await res.json();
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const recipes = data.results;
  const [curr, setCurr] = useState(0);

  const [activeBtn, setActiveBtn] = useState(1);
  const handleBtn = (curr) => setActiveBtn(curr);
  const dynamicBtn = (id) => {
    return activeBtn === id ? "active-btn" : "btn";
  };

  return (
    <div>
      <NavBar></NavBar>
      <main className="">
        <div className="grid grid-cols-7">
          <div className="bodyHeight col-span-4 border-r border-black">
            <h1 className="text-8xl uppercase">
              Food
              <br />
              Recipes
            </h1>
            <ChoosenItem dish={recipes[curr]} />
          </div>
          <div className=" col-span-3">
            {/* section 2 */}
            <div className="topSection overflow-scroll">
              {recipes.map((each) => {
                return (
                  <div
                    key={each.id}
                    className="flex items-center justify-around my-4"
                  >
                    <p className="w-1/2 text-white text-lg">{each.title}</p>
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
            <div className="bottomSection grid grid-cols-2">
              <div className="col-span-1 border-r border-black flex flex-col justify-around px-10">
                <button className={dynamicBtn(1)} onClick={() => handleBtn(1)}>
                  Steaks
                </button>
                <button className={dynamicBtn(2)} onClick={() => handleBtn(2)}>
                  Drinks
                </button>
                <button className={dynamicBtn(3)} onClick={() => handleBtn(3)}>
                  Dessert
                </button>
              </div>
              <div className="col-span-1 font-bold text-center">
                <p className="text-6xl">*</p>
                <p className="text-3xl">+{recipes.length}</p>
                <p className="text-2xl">Food Recipes</p>
                <p>All Around the world</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
