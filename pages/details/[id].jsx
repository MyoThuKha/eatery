import { foods_api, foods_api_id } from "../../components/data";
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
  console.log(id);
  const res = await fetch(foods_api_id(id));
  const data = await res.json();
  return {
    props: { data },
  };
};

const Details = ({ data }) => {
  const ingredients = data.ingredients;
  return (
    <div>
      <div>
        <ul>
          {ingredients.map((each) => {
            return <li key={Math.random()}>{each.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Details;
