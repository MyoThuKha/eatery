const NavBar = () => {
  return (
    <nav className="navHeight border-b border-black w-screen flex items-center justify-around">
      <div className="text-2xl uppercase">recipes</div>
      <div className="flex w-1/3 justify-between text-gray-700">
        <a>Home</a>
        <a>Recipes</a>
        <a>Features</a>
        <a>Contact</a>
      </div>
      <button>Favorites</button>
    </nav>
  );
};

export default NavBar;
