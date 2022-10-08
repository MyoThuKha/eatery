import { foods_api, foods_id } from "../../data/data";
import { dummySteps } from "../../data/dummySteps";

export const getStaticPaths = async () => {
  const res = await fetch(foods_api);
  const data = await res.json();

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
  const data = dummySteps;
  // const res = await fetch(foods_id(id));
  // const data = await res.json();
  return {
    props: { data },
  };
};

const Details = ({ data }) => {
  const steps = data[0].steps;
  return (
    <div>
      <hr />
      <div className=" ">
        <h1 className="text-4xl">Ingredients</h1>
        <div>
          <ul style={{ listStyleType: "circle" }}>
            {steps.map((each) => {
              return each.ingredients.map((each) => {
                return <li key={Math.random()}>{each.name}</li>;
              });
            })}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Details;
