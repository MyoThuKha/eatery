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
  const [load, setLoad] = useState(3);

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
          </div>
          <div className=" col-span-3">
            <div className="topSection"></div>
            <div className="bottomSection grid grid-cols-2">
              <div className="col-span-1 border-r border-black">coo</div>
              <div className="col-span-1 font-bold text-center">
                <p className="text-6xl">*</p>
                <p className="text-3xl">+500</p>
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
