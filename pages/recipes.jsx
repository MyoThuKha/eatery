import Image from "next/image";
import { useSelector } from "react-redux";
import ChoosenItem from "../components/choosen";
import DetailPage from "../components/detail";

const Recipes = () => {
  const data = useSelector((state) => state.root.data);
  return <div></div>;
};

export default Recipes;
