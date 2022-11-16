import Image from "next/image";
import { useSelector } from "react-redux";
import ChoosenItem from "../components/choosen";
import DetailPage from "../components/detail";
import { dummyMenu } from "../data/dummyMenu";
import { useState } from "react";

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
  return (
    <div className=" grid grid-cols-6">
      <div className="col-span-3 border-r border-black">
        {recipes.map((each) => {
          return (
            <div
              key={each.id}
              className="flex items-center justify-around my-4"
            >
              <div
                onClick={() => setCurr(recipes.indexOf(each))}
                className={
                  0 === each
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

              <p
                className="w-1/2 text-lg cursor-pointer"
                onClick={() => setCurr(recipes.indexOf(each))}
              >
                {each.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="col-span-3">
        <DetailPage dish={recipes[curr]} onDetail={null} />
      </div>
    </div>
  );
};

export default Recipes;
