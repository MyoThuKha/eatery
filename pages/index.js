import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/navBar";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=8a61ec6fd5a54af6a0803c76b46e1a96"
  );
  const data = await res.json();
  return {
    props: { data },
  };
};
export default function Home({ data }) {
  const recipes = data.results;
  return (
    <div className="md:grid md:grid-cols-5">
      <div className="md:col-span-1 flex justify-end">
        <NavBar />
      </div>

      <main className="px-16 py-16 bg-gray-100 col-span-4">
        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="btn md:border-2 text-red-400 border-red-400 mx-2 hover:text-white hover:bg-red-400 transition ease-out duration-500"
          >
            Log in
          </a>
          <a
            href="#"
            className="btn md:border-2 text-red-400 border-red-400 hover:text-white hover:bg-red-400 transition ease-out duration-500"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-bold font-body">
            Recipes
          </h2>
          <h3 className="text-gray-700 text-2xl font-semi-bold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="grid lg:grid-cols-3 lg:gap-10">
            {/*  cards go here  */}
            {recipes.map((item) => (
              <div key={item.id} className="card hover:shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={150}
                  layout="responsive"
                />

                <div className="m-4">
                  <span className="text-xl font-bold">{item.title}</span>
                  {/* <span className="block justify-center text-sm text-gray-400">
                    Recipe by Mario
                  </span> */}
                  <div className="badge">
                    <svg
                      className="w-5 inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="{1.5}"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>25 mins</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>

          <div className="mt-8">{/* cards go here  */}</div>
        </div>

        <div className="flex justify-center">
          <div className="btn bg-stone-400 text-white hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50">
            Load more
          </div>
        </div>
      </main>
    </div>
  );
}
