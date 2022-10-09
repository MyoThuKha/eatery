import Image from "next/image";
// import { foods_api, info } from "../../data/data";
import { dummyInfo } from "../../data/dummyInfo";
import { dummyMenu } from "../../data/dummyMenu";

export const getStaticPaths = async () => {
  // const res = await fetch(foods_api);
  // const data = await res.json();
  const data = dummyMenu;
  const paths = data.results.map((each) => {
    return {
      params: {
        id: each.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = dummyInfo;
  // const res = await fetch(info(id));
  // const data = await res.json();
  console.log(data);
  return {
    props: { data },
  };
};

const Details = ({ data }) => {
  const imageUrl = data.image;
  const title = data.title;
  console.log(data.analyzedInstructions);
  const steps = data.analyzedInstructions[0].steps;
  // const instructions = data.instructions;
  return (
    <div>
      <section className="pb-5 border-b border-orange-900">
        <div className="flex justify-center">
          {/* <div className="w-full h-64 overflow-hidden bg-purple-600"> */}
          <Image
            src={imageUrl}
            alt="main image"
            width={400}
            height={400}
            // layout="responsive"
            className="rounded-full"
          />
        </div>
        <div className="text-6xl text-center font-bold my-6">{title}</div>
      </section>
      <section className="py-5 border-b border-orange-900">
        <h1 className="text-4xl text-center my-6">Ingredients</h1>
        <div className="flex justify-center">
          <ul className="text-center">
            {steps.map((each) => {
              return each.ingredients.map((each) => {
                return (
                  <li key={each.id} className="capitalize">
                    {each.name}
                  </li>
                );
              });
            })}
          </ul>
        </div>
      </section>
      <section className="py-5 border-b border-orange-900">
        <div>
          <h1 className="text-4xl text-center my-6">Directions</h1>
          <div className="flex justify-center">
            <div className="w-8/12 text-center">
              {steps.map((each) => {
                return each.step;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Details;
