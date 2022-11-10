import { useSelector } from "react-redux";

const Recipes = () => {
  const data = useSelector((state) => state.root.data);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Recipes;
