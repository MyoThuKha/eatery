import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="navHeight border-b border-black w-screen flex items-center justify-around">
      <div className="text-2xl uppercase">recipes</div>
      <div className="flex w-1/3 justify-between text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/features">Features</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button>Favorites</button>
    </nav>
  );
};

export default NavBar;
