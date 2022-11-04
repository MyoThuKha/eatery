import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dummyMenu } from "../data/dummyMenu";
import NavBar from "../components/navBar";

export const getStaticProps = async () => {
  const foods_api = `https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${process.env.API_KEY}`;
  const url = foods_api;
  const data = dummyMenu;
  // const res = await fetch(url);
  // const data = await res.json();
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const recipes = data.results;
  const [curr, setCurr] = useState();

  return (
    <div className="">
      <NavBar></NavBar>
      <main className="">
        <div className="grid grid-cols-7">
          <div className="bodyHeight col-span-4 border-r border-black">
            <h1 className="text-6xl uppercase">
              Food
              <br />
              Recipes
            </h1>
            <div>
              <h1>Ingredients</h1>
              <div>
                <div>
                  <ul>
                    {recipes.map((each) => (
                      <li key={each.id}></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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
                    <div className="imageBorder inline-flex my-2">
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
                <button className="btn">Steaks</button>
                <button className="btn">Drinks</button>
                <button className="btn">Drinks</button>
                <button className="btn">Drinks</button>
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
