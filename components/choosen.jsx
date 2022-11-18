import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
const ChoosenItem = ({ instructions, image, title, id }) => {
  const ingredients = useMemo(() => {
    let result = [];
    instructions.map((each) => {
      each.ingredients.map((each) => {
        result.push(each);
      });
    });
    //removing duplicate items
    result = [...new Set(result)];
    return result;
  }, [instructions]);

  const displayList =
    ingredients.length > 8 ? ingredients.slice(0, 8) : ingredients;

  return (
    <div className="flex items-center justify-center">
      <div className="bgImage flex justify-center items-center">
        <a href={image} target="_blank" rel="noreferrer">
          <div className="relative rounded-full overflow-hidden w-48 h-48">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </div>
        </a>
      </div>

      <div>
        <h1 className="py-2 text-lg">Ingredients</h1>
        <div>
          <div style={{ height: "21rem" }} className="listBox w-48">
            <h4 className="font-bold pb-4">{title}</h4>
            <ul className="list-disc">
              {displayList.map((each) => (
                <li key={ingredients.indexOf(each)}>{each}</li>
              ))}
            </ul>
            <Link href={"/recipes/" + id}>
              <a className="pt-8 absolute bottom-2 text-orange-300 underline">
                See More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosenItem;
